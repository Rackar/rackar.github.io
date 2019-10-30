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
