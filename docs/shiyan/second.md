## 介绍相关工具

我们用到的主要工具有：

- **Vue.js**

前端框架，用一种特殊的语法组合 HTML，JavaScript 和 CSS，并添加了如响应式数据绑定、动态更新、循环和条件、组件化等十分方便开发人员的特性。

- **git**

代码管理工具，最简单的说就是可以记录每次保存的代码差异，随时可以浏览和回退所有版本，并且可以上传下载同步和多人协作。

- **node.js**

使 JavaScript 进化的一个库。自从有了 node，JavaScript 从一种主要应用于浏览器的脚本语言一举具备了可以和 Java, C#, Python, PHP 等语言类似的能力，可以用于后端服务器。

```
const Koa = require("koa");
const app = new Koa();

const middleware1 = async (ctx, next) => {
  ctx.body = "1";
  next();
  ctx.body = ctx.body + "2";
};

const middleware2 = async (ctx, next) => {
  ctx.body = ctx.body + "3";
  next();
  ctx.body = ctx.body + "4";
};

const middleware3 = async (ctx, next) => {
  ctx.body = ctx.body + "5";
  next();
  ctx.body = ctx.body + "6";
};

app.use(middleware1);
app.use(middleware2);
app.use(middleware3);

app.listen(8082);
```
