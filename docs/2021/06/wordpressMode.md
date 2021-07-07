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
