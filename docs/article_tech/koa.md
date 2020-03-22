---
title: 手把手 Koa2 开发 REST Api
date: 2020-01-07
tags:
  - Node.js
categories:
  - 技术
---

之前基本写好了 Express 的后台程序，为了解决回调地狱的问题，搭 koa 看看。koa 可以通过 async/await 的方式写。

express 版本源码：https://github.com/Rackar/node_blog

koa2 版本源码：https://github.com/Rackar/node_koa

## 基础教程链接

node.js 和 npm 基础

[git 基础](./gitHelp)

vs code 基础

[从零开始全栈开发](./nodeStart1)

[mongodb 环境搭建](./mongoStart)

## 开始环境(脚手架)

安装 koa-generator，利用 koa-generator 快速搭建 Node.js 服务器

新建一个名为 project(可更改)的 koa2 项目,安装依赖

```cmd
npm install koa-generator -g
koa2 project
cd  project
npm  install
```

## 连接 mongoDB

在根目录下新建/api/db_mongoose.js, 写入连接字符串

```js
var mongoose = require("mongoose");
var testDB = "mongodb://localhost:27017/rackar";
mongoose.connect(
  testDB,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function(err) {
    if (err) {
      console.log("connect fail");
    } else {
      console.log("connect success");
    }
  }
);
module.exports = mongoose;
```

## 新建第一个 Model（和 Schema）

新建 models/artitcle.js，写入下面代码。

同时相当于建立了数据表结构

```js
var mongoose = require("../api/db_mongoose");
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  userid: String,
  title: String,
  content: String
});
module.exports = mongoose.model("Article", ArticleSchema);
```

## 第一个子路由

在/routes/下新建 api.js，写入

```js {6,16}
const router = require("koa-router")();
const Article = require("../models/article");
router.prefix("/api");

router.get("/article", async function(ctx, next) {
  let result = await Article.find().then(resultArr => {
    return resultArr.map(obj => {
      return { content: obj.content, title: obj.title };
    });
  });
  ctx.body = result;
});

router.post("/article", async function(ctx, next) {
  let body = ctx.request.body;
  var article = await new Article({
    content: ctx.request.body.content,
    title: ctx.request.body.title
  });
  article.save();

  ctx.body = {
    msg: "新增成功"
  };
});

module.exports = router;
```

## nodemon 调试热更新

新建.vscode/launch.json，保存之后 F5 开启服务器进行调试

```json
{
  // 使用 IntelliSense 了解相关属性。
  // 悬停以查看现有属性的描述。
  // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "nodemon",
      "runtimeExecutable": "nodemon",
      "program": "${workspaceFolder}\\bin\\www",
      "restart": true,
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen"
    }
  ]
}
```

## 测试 api 接口

打开 postman, POST http://localhost:3000/api/article, JSON 数据：

```json
{
  "content": "美好的一天开始了",
  "title": "hello"
}
```

收到

```json
{
  "msg": "新增成功"
}
```

发送 GET http://localhost:3000/api/article ，返回值

```json
[
  {
    "content": "美好的一天开始了",
    "title": "hello"
  }
]
```

## 加入 jwt 鉴权

### 首先增加注册登录接口

修改/routes/users.js 为

```js
const router = require("koa-router")();

router.post("/login", function(ctx, next) {
  ctx.body = "this is a users response!";
});

router.post("/signup", function(ctx, next) {
  ctx.body = "this is a users/bar response";
});

module.exports = router;
```

**为/routes/api.js 增加一行**,即增加/api/login 等路由地址：

```
router.use(users.routes(), users.allowedMethods())
```

发送 GET http://localhost:3000/api/login ，返回值`this is a users response!`

说明路由配置正确，可以开始写注册登录代码。

### 增加 User 模式

新建 models/user.js

```js
var mongoose = require("../api/db_mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String
  },
  password: {
    type: String
  }
});
module.exports = mongoose.model("User", UserSchema);
```

### 修改注册登录代码

```js
const router = require("koa-router")();
var User = require("../models/user");

router.post("/login", async function(ctx, next) {
  let { username, password } = ctx.request.body;
  let result = await User.findOne({ username, password });

  if (result) {
    ctx.body = "登录成功";
  } else {
    ctx.response.status = 401;
    ctx.body = "登录失败";
  }
});

router.post("/signup", async function(ctx, next) {
  let { username, password } = ctx.request.body;
  var user = await new User({
    username,
    password
  });
  user.save();
  ctx.body = {
    msg: "注册成功"
  };
});

module.exports = router;
```

又可以测试接口了。发送 JSON 数据

```json
{
  "password": "ar",
  "username": "rack"
}
```

到 POST http://localhost:3000/api/signup

和 POST http://localhost:3000/api/login

分别收到“注册成功”，“登录成功”。可故意输错看下失败返回。

下一步就是引入 jwt，进行 token 的传递

### 引入 jwt 库和配置

```
npm i jsonwebtoken
```

新建/config/index.js 文件

```js
module.exports = {
  jwtsecret: "wodeJwtsecret_needchangenow", //密码
  expiresIn: 60 * 60 * 24 * 1 //token过期时间 1天
};
```

修改/routes/users.js，登录成功后制作 token 并返回

```js
const router = require("koa-router")();
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const config = require("../config");

router.post("/login", async function(ctx, next) {
  let { username, password } = ctx.request.body;
  let result = await User.findOne({ username, password });

  if (result) {
    let token = jwt.sign(
      {
        username: username //payload部分可解密获取，不能放敏感信息
      },
      config.jwtsecret,
      {
        expiresIn: config.expiresIn // 授权时效1天
      }
    );
    ctx.body = {
      msg: "登录成功",
      token
    };
  } else {
    ctx.response.status = 401;
    ctx.body = {
      msg: "登录失败",
      token: null
    };
  }
});

router.post("/signup", async function(ctx, next) {
  ///...未修改
});

module.exports = router;
```

测试 login 接口，返回 token:

```json
{
  "msg": "登录成功",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhY2siLCJ1c2VyaWQiOiI1ZGIyNzFjMzQ0NDQxYjI0Nzg2ZmVlZDAiLCJpYXQiOjE1NzE5Nzg2NDgsImV4cCI6MTU3MjA2NTA0OH0.R69fcnz9BUZPOpSnhUhc0xpBShhbWejo7vPIzymZe9Y"
}
```

::: warning
将 token 字符串复制到 http://jwt.io 的 encode 区，右边可解析出明文的 userid 和 username。前端以这样从 token 解析的方式拿到的 userid，就很难被篡改了。
:::

![解析token](../pic/jwtio.png)

## 统一 token 鉴权

手写了半天没搞定，弱鸡还是得妥妥的用官方中间件。https://github.com/koajs/jwt 。直接安装：

`npm i koa-jwt`

修改/app.js，见高亮行，加载库，新建一个错误捕获中间件，在 routes 前调用 jwt 中间件，传入密钥和例外路径。

```js {9,12,13,18-27,53,54,55,57}
const Koa = require("koa");
const app = new Koa();
// const views = require('koa-views')
const json = require("koa-json");
// const onerror = require('koa-onerror')
const bodyparser = require("koa-bodyparser");
const logger = require("koa-logger");

const noauth = require("./routes/noAuth");
const api = require("./routes/api");

const jwt = require("koa-jwt");
const config = require("./config/index");
// error handler
// onerror(app)

// Custom 401 handling if you don't want to expose koa-jwt errors to users
app.use(function(ctx, next) {
  return next().catch(err => {
    if (401 == err.status) {
      ctx.status = 401;
      ctx.body = "Protected resource, use Authorization header to get access\n";
    } else {
      throw err;
    }
  });
});

// middlewares
app.use(
  bodyparser({
    enableTypes: ["json", "form", "text"]
  })
);
app.use(json());
app.use(logger());
app.use(require("koa-static")(__dirname + "/public"));

// app.use(
//   views(__dirname + '/views', {
//     extension: 'pug'
//   })
// )

// logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

app.use(
  jwt({ secret: config.jwtsecret }).unless({ path: [/^\/public/, /^\/noauth/] })
);
// routes
app.use(noauth.routes(), noauth.allowedMethods());
app.use(api.routes(), api.allowedMethods());

// // error-handling
// app.on('error', (err, ctx) => {
//   console.error('server error', err, ctx)
// })

module.exports = app;
```

### 修改路由组织

将所有路由 api 分拆成两组，有/api/前缀的需要检查 token 正确，有/noauth/前缀的不检查。分拆后的/routes/文件夹下 3 个文件：

- api.js

```js
const router = require("koa-router")();
const Article = require("../models/article");
router.prefix("/api");

router.post("/article", async function(ctx, next) {
  let body = ctx.request.body;
  var article = await new Article({
    content: ctx.request.body.content,
    title: ctx.request.body.title
  });
  article.save();

  ctx.body = {
    msg: "新增成功"
  };
});

module.exports = router;
```

- noauth.js

```js
const router = require("koa-router")();
const Article = require("../models/article");
const users = require("./users");
router.prefix("/noauth");

router.get("/article", async function(ctx, next) {
  let result = await Article.find();
  result = result.map(obj => {
    return { content: obj.content, title: obj.title };
  });
  ctx.body = result;
});

router.use(users.routes(), users.allowedMethods());

module.exports = router;
```

- user.js

```js
const router = require("koa-router")();
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const config = require("../config");

router.post("/login", async function(ctx, next) {
  let { username, password } = ctx.request.body;
  let result = await User.findOne({ username, password });

  if (result) {
    let token = jwt.sign(
      {
        username, //payload部分可解密获取，不能放敏感信息
        userid: result._id
      },
      config.jwtsecret,
      {
        expiresIn: config.expiresIn // 授权时效1天
      }
    );
    ctx.body = {
      msg: "登录成功",
      token
    };
  } else {
    ctx.response.status = 401;
    ctx.body = {
      msg: "登录失败",
      token: null
    };
  }
});

router.post("/signup", async function(ctx, next) {
  let { username, password } = ctx.request.body;
  var user = await new User({
    username,
    password
  });
  user.save();
  ctx.body = {
    msg: "注册成功"
  };
});

module.exports = router;
```

## 解决跨域

在 app.js 的判断 token 和路由中间件调用之间，加入如下代码。搞定 OPTIONS 问题和 CORS 问题。

```js
// 解决跨域和options请求问题，集中处理错误
const handler = async (ctx, next) => {
  // log request URL:
  ctx.set("Access-Control-Allow-Origin", "*");
  ctx.set(
    "Access-Control-Allow-Methods",
    "POST, GET, OPTIONS, PATCH, HEAD, PUT, DELETE"
  );
  ctx.set("Access-Control-Max-Age", "3600");
  ctx.set(
    "Access-Control-Allow-Headers",
    "x-requested-with,Authorization,Content-Type,Accept"
  );
  ctx.set("Access-Control-Allow-Credentials", "true");
  if (ctx.request.method == "OPTIONS") {
    ctx.response.status = 200;
  } else {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}`);
  }

  try {
    await next();
    console.log("handler通过");
  } catch (err) {
    console.log("handler处理错误");
    ctx.response.status = err.statusCode || err.status || 500;
    ctx.response.body = {
      message: err.message
    };
  }
};
app.use(handler);
```

## 上传图片模块

继续使用现成的中间件
`npm i koa-multer`

新建/routes/upload/index.js，内容如下。设定了存储路径，上传路由和返回

```js
const router = require("koa-router")();
const multer = require("koa-multer");

router.prefix("/upload");

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function(req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + file.originalname);
  }
});
const upload = multer({ storage: storage });

router.post("/image", upload.single("avatar"), function(ctx, next) {
  ctx.body = "ok";
});

module.exports = router;
```

给 noauth.js 增加以下两行

```js
const upload = require("./upload");
router.use(upload.routes(), upload.allowedMethods()); // /upload
```

此时上次文件 api 地址为/noauth/upload/image

使用 form.Data, avatar 上传图片测试，没问题。

## 发布图片路径

在 app.js 增加以下

```js
app.use(require("koa-static")(__dirname + "/uploads"));
```

则可以通过http://localhost:3000/2.jpg 获取到 node_koa/uploads/2.jpg，这个上次路径中的图片

## 收尾

这样基本的鉴权和注册登录有了，跨域和上次也测通，下一步详细的 api 功能设计
