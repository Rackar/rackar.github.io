# CentOS nginx 服务器起步

## 安装 docker

```
依赖
yum install -y yum-utils device-mapper-persistent-data lvm2
添加 Docker 软件包源
yum-config-manager \
--add-repo \
https://download.docker.com/linux/centos/docker-ce.repo

安装
yum install docker-ce docker-ce-cli containerd.io -y

启动
systemctl start docker
开机自启
systemctl enable docker
版本
docker version
docker pull centos:7
mkdir myapp
docker run --name centos -p 80:80 -v $PWD/myapp:/usr/src/myapp -itd -w /usr/src/myapp centos:7 bash

docker exec -it centos bash
```

## 官网方法安装 nginx

yum install yum-utils -y

vi /etc/yum.repos.d/nginx.repo

添加下面文件保存

```
[nginx-stable]
name=nginx stable repo
baseurl=http://nginx.org/packages/centos/$releasever/$basearch/
gpgcheck=1
enabled=1
gpgkey=https://nginx.org/keys/nginx_signing.key
module_hotfixes=true

[nginx-mainline]
name=nginx mainline repo
baseurl=http://nginx.org/packages/mainline/centos/$releasever/$basearch/
gpgcheck=1
enabled=0
gpgkey=https://nginx.org/keys/nginx_signing.key
module_hotfixes=true
```

yum install nginx -y

## 配置 nginx

```
查看配置路径和是否正确
nginx -t
查看错误日志
cat /var/log/nginx/error.log
启动
nginx 或者指定配置文件路径 nginx -c /etc/nginx/nginx.conf
重载配置
nginx -s reload
```

测试配置全文/etc/nginx/nginx.conf

```
user nginx;
worker_processes auto;
error_log /var/log/nginx / error.log;
pid / run / nginx.pid;

# Load dynamic modules.See / usr / share / doc / nginx / README.dynamic.
include / usr / share / nginx / modules/*.conf;

events {
    worker_connections 1024;
}

http {
    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;

    sendfile            on;
    tcp_nopush          on;
    tcp_nodelay         on;
    keepalive_timeout   65;
    types_hash_max_size 2048;
    client_max_body_size 10m;
    client_body_buffer_size 128k;

    include             /etc/nginx/mime.types;
    default_type        application/octet-stream;

    # Load modular configuration files from the /etc/nginx/conf.d directory.
    # See http://nginx.org/en/docs/ngx_core_module.html#include
    # for more information.
    include /etc/nginx/conf.d/*.conf;
    server {
        listen       80 default_server;
        listen       [::]:80 default_server;
        location / {
                # 根路径配置 try为vue-router history配置
                # try_files $uri $uri/ /index.html;
                root /root/myapp/www/;
                index index.html;
            }
        location /words {
            root /root/myapp/;
            index index.html;
            # 自动在目录末尾加/
            if (-d $request_filename) {
                rewrite ^/(.*)([^/])$ http://$http_host/$1$2/ permanent;
            }
        }
    }
}
```

#### 1.报错 stat() failed 13 Permission denied

由于目录属于 root，nginx 没有权限访问（`sudo -u nginx stat /root/myapp/www`会报 Permission denied。用以下命令将 nginx 加入 root 组，生产模式谨慎）

```
gpasswd -a nginx root
chmod g+x /root && chmod g+x /root/myapp && chmod g+x /root/myapp/www

```

#### 2.报错 invalid PID number "" in "/run/nginx.pid"

有时运行 reload 会报，需要将 nginx 进程 id 放进这个文件。

```
cat /run/nginx.pid（会无返回，说明为空）
ps -ef | grep nginx （查找搜索进程中nginx相关，返回结果中找 nginx: master process nginx ，第二列为pid）

root      7665  3436  0 21:49 pts/0    00:00:00 grep --color=auto nginx
root     11403     1  0 01:15 ?        00:00:00 nginx: master process nginx
nginx    12023 11403  0 01:20 ?        00:00:00 nginx: worker process

将查到的pid 11403写入之前的空文件，然后重载
echo 11403 > /run/nginx.pid
nginx -s reload
```

## 安装 node 和 npm

检查有没有 wget 和 tar。用 node 官网的 12.13 版本下载安装

```
cd /root
mkdir /root/tmp && cd /root/tmp
wget https://nodejs.org/dist/v12.13.0/node-v12.13.0-linux-x64.tar.xz
mkdir -p /usr/local/lib/nodejs
tar -xJvf node-v12.13.0-linux-x64.tar.xz -C /usr/local/lib/nodejs

安全写入环境变量并更新：
echo "export PATH=/usr/local/lib/nodejs/node-v12.13.0-linux-x64/bin:$PATH" > /etc/profile.d/node.sh
source /etc/profile
node -v && npm -v && npx -v

还有创建链接方式（暂不推荐）：
sudo ln -s /usr/local/lib/nodejs/node-v12.13.0-linux-x64/bin/node /usr/bin/node
sudo ln -s /usr/local/lib/nodejs/node-v12.13.0-linux-x64/bin/npm /usr/bin/npm
sudo ln -s /usr/local/lib/nodejs/node-v12.13.0-linux-x64/bin/npx /usr/bin/npx
```

## 安装 git

```shell
# 检查有没有安装git
git --version

# 使用git旧版1.8.0
yum install git

# 下面源码编译安装最新版2.24.0：
# 安装编译依赖
yum install curl-devel expat-devel gettext-devel openssl-devel zlib-devel gcc perl-ExtUtils-MakeMaker -y

# 获取最新版本查看： https://mirrors.edge.kernel.org/pub/software/scm/git/
cd /root/tmp
wget https://mirrors.edge.kernel.org/pub/software/scm/git/git-2.24.0.tar.gz

# 解压
tar xzf git-2.24.0.tar.gz
cd ./git-2.24.0

# 检验相关依赖，设置安装路径
./configure --prefix=/usr/local/git

# 编译安装
make && make install

# 安全写入环境变量并更新：
echo "export PATH=/usr/local/git/bin:$PATH" > /etc/profile.d/git.sh
source /etc/profile
git --version
# 居然显示1.8.1我要疯了，这是一个轮回吗
git config --global user.name "name"
git config --global user.email "222222@qq.com"
```

<!-- ```
By default, the repository for stable nginx packages is used. If you would like to use mainline nginx packages, run the following command:

sudo yum-config-manager --enable nginx-mainline
``` -->

## 安装 mongodb

官网文档（CentOS，Red Hat 相同）：
https://docs.mongodb.com/manual/tutorial/install-mongodb-on-red-hat/

```shell
vi /etc/yum.repos.d/mongodb-org-4.2.repo
# 添加：
[mongodb-org-4.2]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/4.2/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-4.2.asc

# 直接安装
yum install -y mongodb-org

# 默认数据目录 /var/lib/mongo (the data directory)
# 默认日志目录 /var/log/mongodb (the log directory)
# 启动
service mongod start | stop | restart
# 开机自启
systemctl enable mongod.service
# 查看日志，是否正常监听
cat /var/log/mongodb/mongod.log

#启动客户端
mongo

```

### 安装 pm2

拉取启动后台项目

```shell
npm --registry https://registry.npm.taobao.org install pm2 -g
git clone https://github.com/Rackar/node_koa
cd ./node_koa
npm i
pm2 start --name node_koa ./bin/www
pm2 logs 0


```

### 其他系统情况的一些安装命令

```
拉取镜像
docker pull python:3.5
启动挂载镜像
mkdir myapp
docker run --name python35 -v $PWD/myapp:/usr/src/myapp -itd -w /usr/src/myapp python:3.5
docker exec -it python35 bash
pip install requests
pip install pandas
nohup python -u huanbao.py >myouthb.out  &
nohup python -u qixiang.py >myoutqx.out  &
```

```
用途：不挂断地运行命令
语法：nohup Command [ Arg ... ] [　& ]
描述：nohup 命令运行由 Command 参数和任何相关的 Arg 参数指定的命令，忽略所有挂断（SIGHUP）信号。在注销后使用 nohup 命令运行后台中的程序。要运行后台中的 nohup 命令，添加 & （ 表示“and”的符号）到命令的尾部。
操作系统中有三个常用的流：
0：标准输入流 stdin
1：标准输出流 stdout
2：标准错误流 stderr
一般当我们用 > console.txt，实际是 1>console.txt的省略用法；
< console.txt ，实际是 0 < console.txt的省略用法。


```

## 更换 docker 镜像源下载地址

```
vi /etc/docker/daemon.json
按下insert

{
"registry-mirrors": [
"https://kfwkfulq.mirror.aliyuncs.com",
"https://2lqq34jg.mirror.aliyuncs.com",
"https://pee6w651.mirror.aliyuncs.com",
"https://registry.docker-cn.com",
"http://hub-mirror.c.163.com"
]
}

:wq
systemctl restart docker
```

## 拉取 nginx

docker pull nginx
docker run --name nginx_test -it -p 80:80 -v /home/dockerdata:/data nginx

docker run --name test -p 8081:80 -itd nginx bash

docker run -d -p 8082:80 --name nginxweb -v /home/WebManager/Nginx/www:/usr/share/nginx/html -v /home/WebManager/Nginx/conf/nginx.conf:/etc/nginx/nginx.conf -v /home/WebManager/Nginx/logs:/var/log/nginx nginx

docker run -d -p 8082:80 --name nginxweb -v /home/WebManager/Nginx/conf/nginx.conf:/etc/nginx/nginx.conf nginx

# wsl 安装 docker

## 参考文档

https://www.cnblogs.com/LiangSW/p/9842295.html

## 开启 wsl

控制面板中的程序中启用适用于 linux 的 winodws 子系统，然后重启电脑

运行商店 microsoft store，搜索 wsl，安装 ubuntu18.04

win+r 搜索 wsl，**注意右键管理员用户打开**。输入新账户与密码

:::danger
后面遇到奇怪问题卡住，先检查下自己是否用管理员权限打开的 wsl
:::

## 修改 root 密码

sudo passwd

输入刚才的密码

然后提示输入新密码，输入要设置的 root 密码两次

su root

root 登录成功

在命令行下运行`ubuntu config --default-user root`

可以设置每次打开 wsl 都是 root 账号登录

## 运行

```shell
apt-get remove docker docker-engine docker.io

apt-get update

apt-get install apt-transport-https ca-certificates curl software-properties-common -y

curl -fsSL https://mirrors.tuna.tsinghua.edu.cn/docker-ce/linux/ubuntu/gpg | sudo apt-key add -

sudo add-apt-repository  "deb [arch=amd64] https://mirrors.tuna.tsinghua.edu.cn/docker-ce/linux/ubuntu/  $(lsb_release -cs)  stable"

sudo apt-get update

sudo apt-get install docker-ce -y
//由于上面的方法还有会报Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?的问题 继续执行下面几行命令

sudo apt install docker.io
sudo usermod -aG docker $USER
sudo cgroupfs-mount
sudo service docker start
docker ps
```

## 安装 docker-compose

```
curl -L https://get.daocloud.io/docker/compose/releases/download/1.22.0/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
```
