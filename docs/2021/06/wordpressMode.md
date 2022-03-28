---
title: 继续搬站，继续填坑
date: 2021-06-23
tags:
  - Linux
categories:
  - 技术
publish: true
---

（再次）又到了一年一度的云服务器过期时间，搬迁和环境搭建又得重搞一下了。这回是 php, mysql 和 wordpress.

<!-- more -->

## 原配置

使用了秋水逸冰的 lamp.sh, 文档和相关目录见 https://lamp.sh/faq.html

## MySQL8

首先 phpmyadmin 进不去。发现是权限问题。目录权限需改 755

```
cd /data/www/default/
chmod -R 755 phpmyadmin
```

然后是密码忘记了，需要重置 MySQL 的密码。由于 MySQL8 的修改方式有变，百度的几种方法都不适用。

```s
vi /etc/my.cnf
# [mysqld]后加入
skip-grant-tables

#重启
service mysqld restart

mysql -u root -p
# 回车 这样可以免密码登录，但是修改手段都会被禁止
FLUSH PRIVILEGES;
ALTER USER 'root'@'localhost' IDENTIFIED BY '123456';
```

详细见[官方文档](https://dev.mysql.com/doc/refman/8.0/en/resetting-permissions.html)

## 备份 wordpress 文件

/data/www/default 全部文件拷贝


## 宝塔面板WP迁移

用了宝塔，迁移Wordpress轻松多了。如果修改了端口忘记了宝塔管理面板入口，可以ssh登陆后输入
`sudo /etc/init.d/bt default` 查看地址和用户密码。

新机器安装宝塔面板 https://www.bt.cn/ 或者使用宝塔镜像

防火墙放行8888

进入ip:8888默认端口，一键安装Nginx,php,mysql

进入软件商店，一键部署，安装wordpress，指定域名或路径

由于宝塔会添加防火墙，所以还需要放行端口:[54125]和[10044] for outline

---
### 插播腾讯云秘钥登陆
轻量级服务器-关机   
轻量级-秘钥-创建-已有，复制coding.pub   
绑定秘钥-服务器   
服务器开机   
winscp-高级-秘钥-coding.ppk 使用root登陆
---

继续迁移

旧机器 宝塔-数据库-wp-备份，新机器 导入

旧机器 scp拷贝wp-content目录和wp-includes，上传新机器

wp注意固定链接格式，并给宝塔添加伪静态支持：网站-站点-伪静态-选择wordpress-保存

给图片上传权限 `sudo chmod -R 755 wp-content/`

如果xmlrpc权限没打开，搜索教程打开wp权限 