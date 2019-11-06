# centOS 初始化

## 安装 docker

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
拉取镜像
docker pull python:3.5
启动挂载镜像
mkdir myapp

```
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
