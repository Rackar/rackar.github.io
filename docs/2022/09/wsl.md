---
title: Win11 虚拟机安装 Docker
date: 2022-09-26
tags:
  - Linux
  - Docker
categories:
  - 技术
publish: false
---

又来了。本次虚拟机使用docker

<!-- more -->

## Win11 家庭版启用 Hyper-V

参考 https://blog.csdn.net/weixin_43841924/article/details/125600106

1、将如下代码添加到记事本中，并另存为Hyper-V.cmd文件。代码如下：
```bat
pushd "%~dp0"
dir /b %SystemRoot%\servicing\Packages\*Hyper-V*.mum >hyper-v.txt
for /f %%i in ('findstr /i . hyper-v.txt 2^>nul') do dism /online /norestart /add-package:"%SystemRoot%\servicing\Packages\%%i"
del hyper-v.txt
Dism /online /enable-feature /featurename:Microsoft-Hyper-V-All /LimitAccess /ALL
```
2、右键点击【Hyper-V.cmd】文件图标，在右键菜单中点击：以管理员身份运行；

3、然后弹出一个 用户帐户控制 - Windows命令处理程序 对话框，我们点击：是。

4、然后系统自动进行Windows命令处理，我们等待处理完成以后，在最末处输入：Y，电脑自动重启，进行配置更新。

5、重启后可以在“打开或关闭windows功能”里看到已经Hyper-V已经安装并打上勾了，重启即可使用。

管理员身份打开Powershell,分别执行
```s
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```

## 安装wsl2和ubuntu

参考 https://www.bilibili.com/read/cv16825907/

打开微软商店，搜索linux，选择Windows Subsystem for Linux Preview，获取安装

然后搜索Ubuntu20.04 LTS 安装 

安好后打开，提示初始化，输入用户名和密码


## 虚拟机中安装docker

参考 https://zhuanlan.zhihu.com/p/421998834


执行命令
```s
# 切换到root账户操作
sudo su root
# 安装 Docker CE
## 设置仓库
### 安装软件包以允许 apt 通过 HTTPS 使用存储库
sudo apt-get update && sudo apt-get install apt-transport-https ca-certificates curl software-properties-common -y
### 新增 Docker 的 官方 GPG 秘钥
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
### 添加 Docker apt 仓库
add-apt-repository \
  "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) \
  stable"

## 安装 Docker CE
sudo apt-get update && sudo apt-get install containerd.io   docker-ce   docker-ce-cli -y
```

配置国内源
```s
sudo mkdir /etc/docker
sudo vim /etc/docker/daemon.json
```
写入
```json
{
  "registry-mirrors": ["https://docker.mirrors.ustc.edu.cn/", "https://hub-mirror.c.163.com/", "https://reg-mirror.qiniu.com"],
  "exec-opts": ["native.cgroupdriver=systemd"],
  "log-driver": "json-file",
  "log-opts": {
    "max-size": "100m"
  },
  "storage-driver": "overlay2"
}
```
按Esc后输入 `:wq` 保存退出

```s
# 启动
service docker start
# 重启
service docker restart
# 停止
service docker stop
```

## 安装mysql
参考 https://my.oschina.net/jeecg/blog/4283700

```s
docker pull mysql:5.7
#启动容器
docker run -p 3306:3306 --name mysql5732 -e MYSQL_ROOT_PASSWORD=needChangeNewPassword -d mysql:5.7.32 --privileged
```

这里报错，因为systemd的启动问题，微软最新的文章说已经可以解决，但是要在几周内才能推送给所有用户，暂时停滞等待更新。

https://devblogs.microsoft.com/commandline/systemd-support-is-now-available-in-wsl/