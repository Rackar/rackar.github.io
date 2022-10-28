---
title: 新购买腾讯云轻量级
date: 2022-10-15
tags:
  - Node.js
categories:
  - 技术
publish: false
---


## 基本配置
首先创建宝塔面板的linux应用，然后选择ssh密钥可直接连接。

修改防火墙端口，放开待设定的ssh，宝塔和8888默认端口。

修改ssh端口（见文档）

修改宝塔端口。修改完要用bt命令，去重新生成用户密码。

修改putty和winscp的ip地址，私钥沿用。

宝塔中安装nginx（可也不装用docker）, 安装pm2管理器（千万别装node管理器）

新建php静态网站放blog，修改域名解析，加入ssl密钥到宝塔。

### MongoDB

找到mongodb位置

```s
whereis mongod
ps aux|grep mongod

# 发现配置文件在
/www/server/mongodb/config.conf

# 读配置发现数据在
/www/server/mongodb/data

# 找到启动脚本
cat /etc/init.d/mongodb

# 服务开关命令
/etc/init.d/mongodb start | stop | restart

# 如同前几篇prisma文章所说的，修改为副本集
vi /www/server/mongodb/data

# 重启
```

[prisma文章](https://www.codingyang.com/2022/06/prisma.html#mongodb%E8%BD%AC%E6%8D%A2%E4%B8%BA%E5%89%AF%E6%9C%AC%E9%9B%86)

## 但是
我这里遇到了莫名bug，不能继续使用，在宝塔中反复卸载安装删除配置还是没启动。

结果只能用这套重新手动装一个MongoDB 4.2继续折腾。安装方法见[之前的文章](https://www.codingyang.com/article_tech/wsl.html#%E5%AE%89%E8%A3%85-mongodb)


```s
service mongod start

##修改副本集
vi /etc/mongod.conf

#加入下两句，保存
replication:
  replSetName: rs0

# 自启动
service mongod restart
```

## 项目
```
gi
npm i -g pnpm
pnpm i
touch .env

touch src/utils/secret.ts
