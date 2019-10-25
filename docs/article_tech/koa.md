# Node 后台使用 Koa2 开发 Api

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
mongoose.connect(testDB, { useNewUrlParser: true }, function(err) {
  if (err) {
    console.log('connect fail')
  } else {
    console.log('connect success')
  }
})
module.exports = mongoose
```

## 新建第一个 Model（和 Schema）

新建 models/artitcles.js，写入下面代码。

同时相当于建立了数据表结构

```js
var mongoose = require('../api/db_mongoose')
var Schema = mongoose.Schema

var ArticleSchema = new Schema({
  userid: Schema.Types.ObjectId,
  username: String,
  previewImageId: String,
  title: String,
  content: String,
  output: String,
  publicdate: Date,
  editdate: Date,
  clickCount: Number,
  liked: [
    {
      userid: Schema.Types.ObjectId,
      username: String
    }
  ],
  likedCount: Number,
  comment: [
    {
      userid: Schema.Types.ObjectId,
      username: String,
      content: String,
      publicdate: Date
    }
  ]
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
