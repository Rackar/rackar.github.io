# 手把手 Koa2 开发 RESTful Api 教程

之前基本写好了 Express 的后台程序，为了解决回调地狱的问题，搭 koa 看看。koa 可以通过 async/await 的方式写。

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
var mongoose = require('mongoose')
var testDB = 'mongodb://localhost:27017/rackar'
mongoose.connect(
  testDB,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function(err) {
    if (err) {
      console.log('connect fail')
    } else {
      console.log('connect success')
    }
  }
)
module.exports = mongoose
```

## 新建第一个 Model（和 Schema）

新建 models/artitcle.js，写入下面代码。

同时相当于建立了数据表结构

```js
var mongoose = require('../api/db_mongoose')
var Schema = mongoose.Schema

var ArticleSchema = new Schema({
  userid: String,
  title: String,
  content: String
})
module.exports = mongoose.model('Article', ArticleSchema)
```

## 第一个子路由

在/routes/下新建 api.js，写入

```js {6,16}
const router = require('koa-router')()
const Article = require('../models/article')
router.prefix('/api')

router.get('/article', async function(ctx, next) {
  let result = await Article.find().then(resultArr => {
    return resultArr.map(obj => {
      return { content: obj.content, title: obj.title }
    })
  })
  ctx.body = result
})

router.post('/article', async function(ctx, next) {
  let body = ctx.request.body
  var article = await new Article({
    content: ctx.request.body.content,
    title: ctx.request.body.title
  })
  article.save()

  ctx.body = {
    msg: '新增成功'
  }
})

module.exports = router
```

## 使用 nodemon 开启调试（自动保存时热更新）

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
const router = require('koa-router')()

router.post('/login', function(ctx, next) {
  ctx.body = 'this is a users response!'
})

router.post('/signup', function(ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
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
var mongoose = require('../api/db_mongoose')
var Schema = mongoose.Schema

var UserSchema = new Schema({
  username: {
    type: String
  },
  password: {
    type: String
  }
})
module.exports = mongoose.model('User', UserSchema)
```

### 修改注册登录代码

```js
const router = require('koa-router')()
var User = require('../models/user')

router.post('/login', async function(ctx, next) {
  let { username, password } = ctx.request.body
  let result = await User.findOne({ username, password })

  if (result) {
    ctx.body = '登录成功'
  } else {
    ctx.response.status = 401
    ctx.body = '登录失败'
  }
})

router.post('/signup', async function(ctx, next) {
  let { username, password } = ctx.request.body
  var user = await new User({
    username,
    password
  })
  user.save()
  ctx.body = {
    msg: '注册成功'
  }
})

module.exports = router
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
  jwtsecret: 'wodeJwtsecret_needchangenow', //密码
  expiresIn: 60 * 60 * 24 * 1 //token过期时间 1天
}
```

修改/routes/users.js，登录成功后制作 token 并返回

```js
const router = require('koa-router')()
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const config = require('../config')

router.post('/login', async function(ctx, next) {
  let { username, password } = ctx.request.body
  let result = await User.findOne({ username, password })

  if (result) {
    let token = jwt.sign(
      {
        username: username //payload部分可解密获取，不能放敏感信息
      },
      config.jwtsecret,
      {
        expiresIn: config.expiresIn // 授权时效1天
      }
    )
    ctx.body = {
      msg: '登录成功',
      token
    }
  } else {
    ctx.response.status = 401
    ctx.body = {
      msg: '登录失败',
      token: null
    }
  }
})

router.post('/signup', async function(ctx, next) {
  ///...未修改
})

module.exports = router
```

测试 login 接口，返回 token:

```json
{
  "msg": "登录成功",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhY2siLCJ1c2VyaWQiOiI1ZGIyNzFjMzQ0NDQxYjI0Nzg2ZmVlZDAiLCJpYXQiOjE1NzE5Nzg2NDgsImV4cCI6MTU3MjA2NTA0OH0.R69fcnz9BUZPOpSnhUhc0xpBShhbWejo7vPIzymZe9Y"
}
```

::: warning
将 token 字符串复制到 jwt.io 的 encode 区，右边可解析出明文的 userid 和 username。前端以这样从 token 解析的方式拿到的 userid，就很难被篡改了。
:::

![解析token](../pic/jwtio.png)

## 统一 token 鉴权

未完待续
