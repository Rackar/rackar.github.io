---
title: Copilot 是不是程序员救星
date: 2021-11-14
tags:
  - Copilot
  - AI
  - 工具
categories:
  - 技术
publish: true
---

自从用了Github Copilot, 我被震惊了大约无数回。

<!-- more -->

## 经过

2,3还没写。未完待续

1. 写了我还不会写的代码

在试用NUXT3的时候，试了他的一个简易全局状态，写了这样一句： 

```js
let test = useState("cache", () => {
  return { login: false, address: "0x0" };
});
```

在其他组件模板中使用的时候，测了下
```js
// {{ test.login }} 和 {{ test.address }}
```
可以正常渲染出值。

ts没有报错，但是在模板中 test 下提示错误`对象的类型为 "unknown"`

于是乎建了个接口试试
```js
interface Cache {
  login: boolean;
  address: string;
}
const test = useState("cache") as Cache;
```
报错`类型“Ref<unknown>”缺少类型“Cache”中的以下属性: login, addressts(2352)`

TS大神可能已经知道怎么解决了，可当时我还在一脸蒙圈，查了下useState的文档特别简单啥也没有，正说是不是翻翻源码。结果巧合的从后往前吧Cache一删除，copilot自动补全了一个类型。我一惊，这莫非是正确答案？！结果还真是，被AI教了我完全不会的一招……

![动画1.gif](./img/copilot1.gif)


2. 写了我还没想好要怎么写的代码

3. 写了我写完但没考虑齐全的代码

待续
