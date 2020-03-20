# （草稿）Postgrest 从零开始

首先在 docker 中安装 postgeresql 数据库，密码设置为 mysecretpassword, 并启动在 5433 接口。同时为了插件文件的共享，在本机新建 dshare 目录并映射到 docker 内：

```s
sudo mkdir /dshare
sudo docker run --name post -p 5433:5432 -v /dshare:/dshare \
                -e POSTGRES_PASSWORD=mysecretpassword \
                -d postgres
```

如果镜像下载太慢，可以修改一下 docker 拉取地址，使用腾讯云加速。

```s
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://mirror.ccs.tencentyun.com"]
}
EOF
sudo systemctl daemon-reload
sudo systemctl restart docker
```

安装完成后运行 `docker ps -a` 查看开启状态：

```s
[root@VM_6_211_centos ~]# docker ps
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                    NAMES
fff034e323e2        postgres            "docker-entrypoint.s…"   6 seconds ago       Up 5 seconds        0.0.0.0:5433->5432/tcp   post
```

启动正常，下面定位到合适的目录下，下载 postgrest 。

不使用 `root` 账户的话，命令前面加 `sudo` 获取权限，后续不再提示。

```s
mkdir /root/postgrest
cd /root/postgrest

//官方地址下载
wget https://github.com/PostgREST/postgrest/releases/download/v6.0.2/postgrest-v6.0.2-centos7.tar.xz

//或者我传的七牛云镜像，国内下载
wget http://q6o50zwkj.bkt.clouddn.com/postgrest-v6.0.2-centos7.tar.xz

//原地解压
tar xfJ postgrest-v6.0.2-centos7.tar.xz
```

还需要先安装一个依赖，否则会报错 `error:libpq.so.5` 找不到：

`yum -y install postgresql-libs`

好了，现在可以直接执行 `./postgrest` 命令，出现用法示例，说明正常。`Ctrl+C` 关闭。

下一步进入 docker 交互界面，开启 psql 命令行：

`docker exec -it post psql -U postgres`

或者先进入 docker 中的 bash `docker exec -it post bash`，然后再开启 `psql -U postgres`。

创建 schema 命令：

`create schema api;`

新建表，并插入两行数据：

```sql
create table api.articles (
  id serial primary key,
  userid serial not null,
  title text,
  content text,
  show boolean not null default true,
  createdAt timestamptz  default current_timestamp
);

insert into api.articles (userid,title,content) values
  (1,'第一篇文章标题','内容'), (1,'第二篇标题','内容2');

select * from api.articles;
```

创建可读 articles 表的角色 web_anon ：

```sql
create role web_anon nologin;

grant usage on schema api to web_anon;
grant select on api.articles to web_anon;
```

```sql

-- 设置所有表查询权限
grant select on all tables in schema public to web_anon;

-- 设置默认新建表查询权限
alter default privileges in schema public grant select on tables to web_anon;
```

然后在创建一个独立的连接数据账户，并允许切换到 web_anon ：

```sql
create role authenticator noinherit login password 'mypassword';
grant web_anon to authenticator;
```

然后就 `\q` 退出命令行。`exit` 用来退出 docker。

进入我们刚才解压的位置：

`cd /root/postgrest/`

新建配置文件:

```sh
cat <<EOF > pgrest.conf
db-uri = "postgres://authenticator:mypassword@localhost:5433/postgres"
db-schema = "api"
db-anon-role = "web_anon"
EOF
```

然后启动程序：

`./postgrest pgrest.conf &`

这时显示连接成功，使用端口 3000。命令后面使用`&`符号将服务器程序挂载到后台运行，然后按回车，执行 get 查询:

`curl http://localhost:3000/articles`

已经可以通过 http 请求表内数据了。也就是说每个匿名用户都可以只读 `articles` 表了。

但是现在只有 get 请求的查询权限。我们继续配置用户和权限。

我们之前只有匿名用户 `web_anon`，下面我们同样使用 psql 设立认证用户 `auth_user`，他拥有对 `articles` 表的全部权限:

```
create role auth_user nologin;
grant auth_user to authenticator;

grant usage on schema api to auth_user;
grant all on api.articles to auth_user;
grant usage, select on sequence api.articles_id_seq to auth_user;
\q
```

然后定义我们的 token 密钥，密钥不少于 32 位字符的长度，然后添加入配置文件中最后一行。例如：

```
echo 'jwt-secret = "iDYR4j2Qp3QT05kpd9oIcF2WPWEWVrI3"' >> pgrest.conf
```

现在重启 `postgrest` 服务。

先输入 `fg` 让后台项目放入前台。然后 `Ctrl+C` 结束任务。

再通过 `./postgrest pgrest.conf &` ，重启完成。

然后可以手工制作一个有效 token，测试一下带 token 与不带 token 的 post 请求。

### jwt 认证系统原理

jwt 的 playload 中有一个关键词为 role。收到 token 并解析出 role 的时候，pgrest 会自动切换数据库账户名为 role 的值。当然这是在管理员已经 grant 后，允许切换才行。如`GRANT auth_user TO authenticator;`

如果没有 token 或者没有 role，会使用 PG 数据设置中的匿名账户。所以要确保匿名账户要访问的内容已设置好。

role 也很灵活，可以视为单个用户或者用户组。

如果把 role 视为单个角色，可以对单个角色执行行级安全策略。

同时 PG9.5 以上拥有行级访问控制，所以可以通过自定义策略来确定行级数据访问权限。如官网的一个聊天室示例，查询权限只能查 from or to 为本用户的行，插入和修改只能在 from 为本用户的行。

如果 role 为用户组，你还可以在 playoad 中加入 email 或者 username 来做用户区分。

这样通过`current_setting('request.jwt.claim.email', true)`来获取 email。

### SQL 函数实现注册和登录

通过 SQL 函数完成了注册，登录，颁发 token，密码加密保存等功能。

首先下载 jwt 插件到共享目录，没有 git 的用 `yum install git` 安装一下。

```
cd /dshare
git clone https://github.com/michelp/pgjwt
```

然后进去 docker，更新和安装 make，之后安装 pgjwt 插件到数据。

```sh

docker exec -it post bash

apt-get update
apt-get install make
cd /dshare/pgjwt
make install
psql -U postgres

CREATE EXTENSION pgjwt
```

然后继续在 psql 中添加模式、类型、触发器、函数等：

```sql
-- 创建一个非公开模式，用来管理用户信息
create schema if not exists basic_auth;

create table if not exists
basic_auth.users (
  email    text primary key check ( email ~* '^.+@.+\..+$' ),
  pass     text not null check (length(pass) < 512),
  role     name not null check (length(role) < 512)
);

-- 新建触发器，让role为数据库存在角色
create or replace function
basic_auth.check_role_exists() returns trigger as $$
begin
  if not exists (select 1 from pg_roles as r where r.rolname = new.role) then
    raise foreign_key_violation using message =
      'unknown database role: ' || new.role;
    return null;
  end if;
  return new;
end
$$ language plpgsql;

drop trigger if exists ensure_user_role_exists on basic_auth.users;
create constraint trigger ensure_user_role_exists
  after insert or update on basic_auth.users
  for each row
  execute procedure basic_auth.check_role_exists();

-- 安装pgcrypto插件并设置触发，在新建用户时加密密码信息。
create extension if not exists pgcrypto;

create or replace function
basic_auth.encrypt_pass() returns trigger as $$
begin
  if tg_op = 'INSERT' or new.pass <> old.pass then
    new.pass = crypt(new.pass, gen_salt('bf'));
  end if;
  return new;
end
$$ language plpgsql;

drop trigger if exists encrypt_pass on basic_auth.users;
create trigger encrypt_pass
  before insert or update on basic_auth.users
  for each row
  execute procedure basic_auth.encrypt_pass();

-- 创建比对函数，用户密码验证通过则返回角色
create or replace function
basic_auth.user_role(email text, pass text) returns name
  language plpgsql
  as $$
begin
  return (
  select role from basic_auth.users
   where users.email = user_role.email
     and users.pass = crypt(user_role.pass, users.pass)
  );
end;
$$;




CREATE TYPE basic_auth.jwt_token AS (
  token text
);



-- 为了避免硬编码密钥，新增一个数据库属性保存密钥。
ALTER DATABASE postgres SET "app.jwt_secret" TO 'iDYR4j2Qp3QT05kpd9oIcF2WPWEWVrI3';

-- 在公开schema上建立登录函数。token过期时间为1小时。
create or replace function
login(email text, pass text) returns basic_auth.jwt_token as $$
declare
  _role name;
  result basic_auth.jwt_token;
begin
  -- 调用验证用户密码
  select basic_auth.user_role(email, pass) into _role;
  if _role is null then
    raise invalid_password using message = 'invalid user or password';
  end if;

  select sign(
      row_to_json(r), current_setting('app.jwt_secret')
    ) as token
    from (
      select _role as role, login.email as email,
         extract(epoch from now())::integer + 60*60 as exp
    ) r
    into result;
  return result;
end;
$$ language plpgsql security definer;

```

测试命令

```
curl http://localhost:3000/todos -X POST \
     -H "Authorization: Bearer $TOKEN"   \
     -H "Content-Type: application/json" \
     -d '{"task": "learn how to auth"}'
```

```sql

-- signin
create or replace function signin
(email text, pass text, role text) returns integer as $$
declare
  num integer;
begin
  -- check email and password
  -- select count(*) from basic_auth.users where email=signin.email into num;
  -- if num
  INSERT INTO basic_auth.users VALUES (email,pass,role);
end;
$$ language plpgsql security definer;

```

```
测试插入一行用户：


INSERT INTO basic_auth.users VALUES ('27@qq.com','123','postgres');

curl http://localhost:3000/rpc/siginup -X POST \
     -H "Content-Type: application/json" \
     -d '{"email": "35@qq.com",pass:'123',role'postgres'}'

curl http://localhost:3000/rpc/login -X POST \
     -H "Content-Type: application/json" \
     -d '{"email": "27@qq.com",pass:'123'}'

```

其他可能用到的命令：

```
持续运行服务器
nohup ./postgrest pgrest.conf &

linux 杀进程：
ps -ef | grep postgrest
kill -s 9 12931

psql运行.sql文件：
docker exec -it post psql -U postgres -f /dshare/nideshop.sql
psql -d postgres -U postgres -f /dshare/pgjwt.sql

```

# 从头开始理顺

centos，安装 git 和 docker 之后。将 docker 源换为国内镜像站。

```sh
mkdir /dshare && cd /dshare
git clone https://github.com/michelp/pgjwt
docker run --name postgres -p 5433:5432 -v /dshare:/dshare \
                -e POSTGRES_PASSWORD=mysecretpassword \
                -d postgres
docker exec -it postgres bash
apt-get update
apt-get install make
cd /dshare/pgjwt
make install
psql -U postgres
create extension if not exists pgcrypto;
CREATE EXTENSION pgjwt;






```

<!-- ## 其他记录

云服务器上新建 pg11 数据库

创建数据库 cluster

ip 白名单

创建数据表和伪数据：sql 文件

创建文件夹，

新建数据库，用命令行连接数据库 psql
![](../pic/psql.png)

然后命令后面加上 `< contacts.sql`，来引入 sql 文件。

下载 pgrest 源码，解压，直接执行。

在 psgl 中创建一个只读用户，并禁止登录

`create role contacts_read nologin;`

这个用户不能用来连接数据库，而是以另一个用户登录，然后切换本用户。

然后挂载这个角色到 schema

`grant usage on schema public to contacts_read`

当然由于 public 本身就会挂载到所有用户，所以上面这步不是必须，仅是演示其他 schema 的方式。

然后挂载 select
`grant select on public.contacts to contacts_read`

然后我们创建一个登录角色，并不继承任何其他角色权限。最后添加登录密码（主要要复制）。

`create role postgrest noinherit login password 'P@ssword'`

最终我们挂载角色到这个登录用户

`grant contacts_read to postgrest`。

权限和用户设置完成。

下一步设置 pgrest。首先新建配置文件 `contacts.conf`

```

db-uri="postgresql://postgrest:P@ssword@ip:25060/contacts?sslmode=require"

db-schema="public"

db-anon-role = "contacts_read"

```

运行 `./postgrest contacts.conf`

打开在 3000。 -->
