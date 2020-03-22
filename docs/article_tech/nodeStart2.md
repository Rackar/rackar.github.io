---
title: 从零开始全栈开发(2)后端
date: 2019-08-19
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

## 用 express 脚手架初始化项目

（如使用 git clone 拉取我的代码，这步就不用做了）

```
npm install express-generator -g
express node_blog
cd node_blog
npm install
```

## 安装 Mongoose

```
npm install mongoose
```

连接数据交给 mongoose，然后按照类似下面这种方式建立 User 模型，之后引入模型然后 find、save、update 就好。[参考简书](https://www.jianshu.com/p/b9a8a89f6c9f)

```
var mongoose = require("./index");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: {type: String},
    mobile: {type: String},
    pwd: {type: String}
});
module.exports = mongoose.model('User', UserSchema);
```

## 安装 jwt

[参考 csdn](https://blog.csdn.net/qq_30604453/article/details/85060077)
安装`npm install jsonwebtoken`
使用

```
token = jwt.sign({id=0}, 'tokenSecret', {expiresIn:time} //生成token加密字符串
result = jwt.verify(token, 'tokenSecret') //验证
```

一些坑：

## 解决跨域问题

要允许域，要允许 header，要处理 option 请求。

```
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行。jwt需Authorization
  res.header('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept,Authorization');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');

  //header头信息设置结束后，结束程序往下执行，如果是options请求，直接返回204允许浏览器紧接着发复杂请求
  if (req.method.toLocaleLowerCase() === 'options') {
    res.status(204);
    return res.json({}); //直接返回空数据，结束此次请求
  } else {
    next();
  }
});
```

## jwt 前后端一致问题

前端加了 Bearer +空格，后端就需要用.split(' ')[1]去

## 设计数据表结构

按照 mongodb 尽量不连表查询的原则，只设计两个表，用户信息表和文章表。
