---
title: 从零开始全栈开发(1)基础
date: 2019-08-10
tags:
  - Node.js
  - Vue.js
categories:
  - 技术
---

## 项目源码地址

后端源码：[https://github.com/Rackar/node_blog](https://github.com/Rackar/node_blog)

前端源码：[https://github.com/Rackar/node_blog_vue](https://github.com/Rackar/node_blog_vue)

## 系列文章地址

[基础环境搭建](./nodeStart1)

[后端起步](./nodeStart2)

[前端起步](./nodeStart3)

## 安装工具

下载安装 VS code 编辑器，作为主要开发工具
https://aka.ms/win32-x64-user-stable

下载 node.js，很多工具和命令的基础环境（包括了 npm）
https://nodejs.org/dist/v10.15.3/node-v10.15.3-x64.msi

下载 git，代码上传、下载、版本控制工具神器
https://github.com/git-for-windows/git/releases/download/v2.21.0.windows.1/Git-2.21.0-64-bit.exe

下载谷歌 chrome 浏览器，必备的浏览和调试工具
https://www.google.cn/intl/zh-CN/chrome/

安装 vue 脚手架（如果不自行新建 vue 项目，这个可以不装）
win+r 输入 cmd 打开命令行，执行`npm i -g @vue/cli`

以上工具链接都是 windows 安装版，一路默认安装即可。

## mongodb 数据库（本机）

按照：[MongoDB 坏境搭建](./mongoStart)

## 拷贝代码

在 d 盘新建 code 文件夹，用 vs code'文件'——'打开文件夹'打开。
在 VS code 中的命令行工具（快捷键 ctrl+~）中输入

`git clone https://github.com/Rackar/node_blog_vue`
拉取我的前端示例项目源码，会创建 d:\dode\node_blog_vue 文件夹

`git clone https://github.com/Rackar/node_blog`
拉取我的后端项目源码，会创建 d:\dode\node_blog 文件夹

### 前端初始化

等待下载完成后在命令提示符依次执行下面几行命令

```
cd node_blog_vue
npm config set registry https://registry.npm.taobao.org
npm i
npm run serve
```

分别是进入项目目录，设置国内的依赖下载源（配置一次一直成效），下载依赖包，运行调试。
这时按住 ctrl 点击 http://localhost:9529/ 即会在浏览器打开项目预览。
后续教程都会基于当前这个项目文件夹继续添加文件。

### 后端初始化

同样

```
cd d:\code\node_blog
npm i
npm start
```

或者不用执行 npm start，在 vs code 中使用 f5 快捷键调试。

# 后端：nodemon 快速调试，vs code 热重载

全局安装工具
`npm install -g nodemon`
VS 调试配置：点击 launch.json，右下角添加配置，搜索 nodemon。修改启动路径为 express 脚手架的默认路径
`"program": "${workspaceFolder}\\bin\\www",`
现在 F5 调试可以一直不管了，保存 JS 文件时会自动重启调试。

# VS code 自动修正格式

保存时代码自动格式化,统一代码风格并自动修正格式问题。

按照：[VS code 自动格式化](./vueEslint)
