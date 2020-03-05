# postgresql centsOS 示例

首先在 docker 中安装 postgeresql 数据库，密码设置为 mysecretpassword，并启动在 5433 接口：

```
sudo docker run --name tutorial -p 5433:5432 \
                -e POSTGRES_PASSWORD=mysecretpassword \
                -d postgres
```

如果镜像下载太慢，可以修改一下使用腾讯云加速。

```
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://mirror.ccs.tencentyun.com"]
}
EOF
sudo systemctl daemon-reload
sudo systemctl restart docker
```

安装完成后运行 docker ps 查看开启状态：

```

[root@VM_6_211_centos ~]# docker ps
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                    NAMES
fff034e323e2        postgres            "docker-entrypoint.s…"   6 seconds ago       Up 5 seconds        0.0.0.0:5433->5432/tcp   tutorial
```

启动正常，下面定位到合适的目录下，下载 postgrest。不适用 root 账户的话记得每句命令前面加 `sudo`

```
mkdir /root/postgrest
cd /root/postgrest

//官方地址下载
wget https://github.com/PostgREST/postgrest/releases/download/v6.0.2/postgrest-v6.0.2-centos7.tar.xz

//我传的七牛云镜像，国内下载
wget http://q6o50zwkj.bkt.clouddn.com/postgrest-v6.0.2-centos7.tar.xz

//原地解压
tar xfJ postgrest-v6.0.2-centos7.tar.xz

```

还需要先安装一个依赖，否则会报错 error:libpq.so.5 找不到：

`sudo yum -y install postgresql-libs`

好了，现在可以直接执行 `./postgrest` 命令，出现用法示例，说明正常。

下一步进入 docker 交互界面，开启 psql 命令行：

`sudo docker exec -it tutorial psql -U postgres`

创建 schema 命令：

`create schema api;`

```
sudo docker exec -it tutorial psql -U postgres
```

导入一个 sql 文件

```
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

创建可读 articles 表的角色 web_anon：

```
create role web_anon nologin;

grant usage on schema api to web_anon;
grant select on api.articles to web_anon;
```

然后在创建一个独立的连接数据账户，并允许切换到 web_anon：

```
create role authenticator noinherit login password 'mypassword';
grant web_anon to authenticator;
```

然后就`\q`退出命令行和 docker。

进入我们刚才解压的位置：

`cd /root/postgrest/`

新建配置文件:

```
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

已经可以通过 http 请求表内数据了。也就是说每个匿名用户都可以只读 articles 表了。

但是现在只有 get 请求的查询权限。我们继续配置用户和权限。

我们之前只有匿名用户 web_anon，下面我们同样适用 psql 设立认证用户 auth_user，他拥有对 articles 表的全部权限:

```
create role auth_user nologin;
grant auth_user to authenticator;

grant usage on schema api to auth_user;
grant all on api.articles to auth_user;
grant usage, select on sequence api.articles_id_seq to auth_user;
\q
```

然后定义我们的 token 密钥，密钥不少于 32 位字符的长度，然后写入配置文件中。例如：

```
echo 'jwt-secret = "iDYR4j2Qp3QT05kpd9oIcF2WPWEWVrI3"' >> pgrest.conf
```

现在重启 postgrest 服务。先输入 fg 让后台项目
创建

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

打开在 3000。
