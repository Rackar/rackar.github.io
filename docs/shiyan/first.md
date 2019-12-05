---
show: step
version: 1.0
---

# 环境搭建

## 简介

本节内容主要是指导在实验楼测试环境下如何快速搭建所需开发环境，以及非常简要的了解所用到的命令和工具。

#### 知识点

- 快速搭建环境
- npm 包管理器
- git 代码管理
- vue/cli 脚手架
- node.js http 服务器
- mongoDB 服务器和客户端
- nginx http 服务器

#### 完整代码

本节实验中提供了完整的示例代码，仅供参考，请仍然按照实验步骤逐步实现才会有收获：

<!-- ```
# 下载代码文件并解压
$ wget http://labfile.oss.aliyuncs.com/courses/923/week7/code/lab2.zip
``` -->

#### 说明

为了方便后续章节继续开发时快速恢复环境，第二节为已学完第一章的同学快速恢复环境使用。如果未曾搭建过环境的同学，请直接跳到第三节快速环境搭建。

## 环境快速恢复

**本节供后续章节使用，新同学请直接跳过。**
全新实验楼环境下，每节课可以用以下命令快速方式恢复课程所需开发环境。

1. **修改 npm 源**

`npm config set registry https://registry.npm.taobao.org`

2.  **拉取项目代码并安装**

```
git pull xxx.git
cd xxx && npm i
```

3.  **启动 mongo**

新建 db 文件夹，并后台运行 mongoDB 服务器。

```console
mkdir db && mongod --dbpath /home/project/db &
```

## 环境快速搭建

实验楼提供的 ubantu 环境已经安装好了绝大部分所需工具，如 git, mongoDB, node.js, vue/cli, nginx 等，并且锁定相同版本，所以，并使用 git 拉取本节所需文件或代码。

1. **修改 npm 源**

`npm config set registry https://registry.npm.taobao.org`

2.  **vue 脚手架初始化前端项目**

`vue create front`

在 front 文件夹下新建文件：`vue.config.js`。也可在命令行输入`touch /home/project/front/vue.config.js`。文件中输入如下内容：

```js
module.exports = {
  publicPath: "",
  devServer: {
    port: 8081,
    disableHostCheck: true
  }
};
```

4.  **启动 mongo**

新建 db 文件夹，并后台运行 mongoDB 服务器。

```console
mkdir db && mongod --dbpath /home/project/db &
```

开启 mongo Shell，并查看已有数据库

```console
mongo
show dbs
```

5. **修改 nginx 配置**

```
sudo vi /etc/nginx/conf.d/vue.conf
sudo nginx -t
sudo nginx
sudo nginx -s reload
```

```
server {
    listen       8080;
    location /vue/ {
        proxy_pass http://127.0.0.1:8081/;
    }
    location /node/ {
        proxy_pass http://127.0.0.1:8082/;
    }
}
```

`mkdir end && cd end && npm init && touch index.js`

index.js

```js
var http = require("http"); //加载内置 http 模块，无需安装

http
  .createServer(function(request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });

    response.end("Node 后端服务器就绪。\n"); // 发送数据
  })
  .listen(8082);

// 终端打印如下信息
console.log("Server running at http://127.0.0.1:8082/");
```

## 命令解析

在环境搭建中我们干了些什么，如果在非实验楼环境下自行搭建，又需要干些什么呢？

### npm 修改源地址

首先 npm 做为 node.js 默认的包管理器，可以下载 node.js 环境所需要的各种包。

这些源码包提供了各种各样的功能，使我们完成很多常见任务可以站在前人的肩膀上，无需重新发明轮胎，快速的实现自己的需求。

但是 npm 包的源地址是`https://registry.npmjs.org`，国外的服务器下载起来的速度非常不理想，所以替换为了国内源。

（阿里在国内的镜像站，10 分钟同步一次）。

查看当前源地址命令：

`npm config get registry`

修改回默认地址命令：

`npm config set registry https://registry.npmjs.org`

_请在命令行工具中输入进行测试_

记得改回国内源：

`npm config set registry https://registry.npm.taobao.org`

### vue/cli 脚手架

Vue 官方脚手架@vue/cli，v3.0 和 v4.0 的使用方法基本一致。

通过脚手架可以方便的开发 SPA，并引入各种生态链工具。

这里我们主要选择了 vue-router 前端路由，vuex 前端状态管理，代码格式检查和 css 预编译器。

脚手架最核心是 webpack+node，打包各种资源，并开启 http 调试服务器。

涉及到的东西偏多我们后续章节展开，本节简要了解一下概念和大致作用就好。

### mongoDB

NoSQL 数据库，可以简单的把它想象成一个 JSON 数据库。天然和 JavaScript 无缝对接。
