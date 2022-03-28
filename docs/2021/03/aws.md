---
title: AWS linux 配置 Wordpress
date: 2021-03-07
tags:
  - Linux
categories:
  - 技术
publish: true
---

## 安装CentOS

AIM中选择CentOS 7，新建或者使用已有的公钥，下载私钥。

配置弹性ip，安全组放开80,1984,8888等端口。

注意登录后`sudo -s`切换到root账户。

## 安装宝塔

https://www.bt.cn/new/download.html 按系统版本安装脚本，需要在没安装其他软件前先安宝塔。

安装成功命令行窗口会打印外网登陆地址，用户密码。

登陆后绑定手机号

## 安装环境和wp

安装推荐环境LNMP(Linux/Nginx/MySQL/PHP)

安装一键部署

然后一键部署wordpress

目录在 www/wwwroot/xxxsite 下面

## 修改固定链接

修改固定链接为year/month/day/id/ 格式
`/%year%/%monthnum%/%day%/%post_id%/`。修改完后nginx会404，需要到宝塔面板-网站-站点-伪静态—规则选择wordpress


## 安装s

https://teddysun.com/486.html 找到s脚本，一键安装


## 另一个AWS Linux版本

### 配置购买

AIM 选择 AWS Linux ,又是魔改版。

### 连接SSH

第一步安全组别用默认，手动放开80,22进出站。

将私钥*.pem 文件在puttygen中load，重新保存为 *.ppk

HOST选为DNS主机名，60秒重连，Auth 用ppk， user为ec2-user。

### 环境配置

切换root账号 `sudo -s`


安装node.js  

```
curl -sL https://rpm.nodesource.com/setup_12.x | bash -
yum install -y nodejs
```

安装 AWS nginx

```
sudo amazon-linux-extras install nginx1
nginx -t
```
静态根目录为 /usr/share/nginx/html

进行`nginx -s relaod`加载配置时，使用root。


安装 Git

```
yum install git -y
```