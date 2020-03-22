---
title: Node 爬虫编写
date: 2019-10-18
tags:
  - Node.js
categories:
  - 技术
---

## 介绍

之前用 python 勉强写过几个爬虫，但是语言特性和库都掌握的非常差，实在用不好。换回 node 重写。

场景是最简单的知道 apiurl 请求 json，可写入 json 或 mongodb。用到了简单的几个库，可配置 socks5 代理。

项目地址：https://github.com/Rackar/tinycrawl

项目文档：http://www.codingyang.com/article_tech/nodeCrawl.html

## 运行参数

- 是否写入 mongodb

  `-noDB` 启动时加上则不写入 db

- 是否写入 JSON

  `-noJSON` 启动时加上则不写入 json

- 是否使用本地 7070 代理

  `-useProxy` 启动时加上则开启本地 sock5 7070 端口代理

## 调试时设置参数

调试时需要修改./vscode/launch.json，将参数加入 args 数组。如：

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "启动程序",
      "program": "${workspaceFolder}\\index.js",
      "args": ["-useProxy"]
    }
  ]
}
```

## 小工具

utils 里面有 3 个小工具，一个 await 延时，一个格式化日期，一个去处 js 对象 key 中的'.'(无法写入 mongo)

## 准备工作

开始也就用两个库 request 来请求，mongoose 来入库。命令行走起：

```shell
mkdir tinyCrawl
cd ./tinyCrawl
npm init
npm i request mongoose
```

## 抓取命令

循环拼接 url

```js
async function getTodayData() {
  for (let i = 0; i < 3; i++) {
    let urlFormat = `http://1.1.1.1:8080/api/map/${i}?type=day`;

    let date = new Date();
    let timeStr = "日：" + date.format("YYYY-MM-DD") + "日";
    let result = await saveResultJson(urlFormat, timeStr);
    Day.collection.insertMany(result, onInsert);
  }
}
```

调用保存 json。这里调了两个外部方法，第一个 dirExist 是判断路径目录是否存在，不存在就是新建目录；第二个 renameJsonFileIfExist 是判断文件是否存在，存在则更名另存。

然后 JSON.stringify(data, null, 2)是按照 2 个空格的缩进和换行来格式化 json 字符串。以前真不知道这方法还封装了这么好用的格式化……

最后把结果数据扔回去赋值给上面的 result，一次性写入 mongoDB

```js
async function saveResultJson(url, timeStr) {
  return new Promise((resolve, reject) => {
    request.get(url, async (error, response, body) => {
      if (response.statusCode == 200) {
        await dirExist.dirExists("./resultData");
        let fileName = `resultData/${timeStr}环保空气污染指数.json`;
        fileName = await dirExist.renameJsonFileIfExist(fileName);
        let data = JSON.parse(body);
        body = JSON.stringify(data, null, 2);
        await fs.writeFile(fileName, body, "utf8", err => {
          if (err) throw err;
          console.log("写入完成：" + fileName);
        });
        resolve(data);
      }
    });
  });
}
```

[数据库连接同这里](./koa.html#连接-mongodb)

这里 mongoose 的 Schema 本来需要定义好数据字段，为了省事直接去掉 strict。随便写入

day.js

```js {8}
var mongoose = require("./db_mongoose");
var Schema = mongoose.Schema;
var DaySchema = new Schema(
  {
    body: Object,
    city: String
  },
  { strict: false }
);
module.exports = mongoose.model("Day", DaySchema);
```
