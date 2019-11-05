# Node 爬虫

## 介绍

之前用 python 勉强写过几个爬虫，但是语言特性和库都掌握的非常差，实在用不好。换回 node 重写。

场景是最简单的知道 apiurl 请求 json，然后存入本地或者 MongoDB。

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
    await Day.collection.insertMany(result, onInsert);
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
  {strict: false}
);
module.exports = mongoose.model("Day", DaySchema);
```
