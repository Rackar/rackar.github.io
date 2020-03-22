---
title: MongoDB 环境搭建
date: 2019-12-12
tags:
  - 数据库
categories:
  - 技术
---

## Windows 环境下

1. 自动选择稳定版的 64 位。可以选择 zip 版。解压到 D:/mongodb 文件夹
   [https://www.mongodb.com/download-center/community](https://www.mongodb.com/download-center/community)
   **如果准备一直开启数据库服务器，直接下载 MSI 版本安装即可。可跳过 2、3 步**

2. 在 D:/mongodb/文件夹下新建两个文件夹 db,log
   ![](https://upload-images.jianshu.io/upload_images/15157592-1c7fe8e8157eea44.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

3. 在 D:/mongodb/文件夹下新建文本文件 startServer.bat，编辑复制这条命令进去保存：
   `.\bin\mongod.exe --dbpath D:\mongodb\db --logpath D:\mongodb\log\mongod.log --logappend`
   双击 bat 文件执行，即开启 mongod 数据库服务器。服务器默认会开启在本地 localhost:27017 端口（127.0.0.1:27017 同样是本机 ip），无用户名和密码。

4.在空白处 shift+右键，“在此处打开 Powershell（或命令行）窗口”，
执行命令：`.\bin\mongo.exe`，看到> 即表明数据库服务器连接正常，输入 show dbs 可看到初始数据库列表。
![安装运行正常](https://upload-images.jianshu.io/upload_images/15157592-555de13e5b3d4374.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

或者下载[MongoDB Compass](https://www.mongodb.com/download-center/compass)，用 UI 界面管理数据库。

5.为了不用每次重启电脑以后手动执行 startServer.bat 来打开数据库服务，可以 win+r 打开运行，键入`shell:startup`打开系统启动项，按住 alt 将.bat 文件拖入，即可开机自启。
