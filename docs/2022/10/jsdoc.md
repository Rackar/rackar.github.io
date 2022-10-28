---
title: 记一次失败的破封装
date: 2022-10-20
tags:
  - Node.js
categories:
  - 技术
publish: true
---


实现一个小功能，从数组中取出随机个元素，已经用lodash了，很简单一句

`_.sampleSize(arr, _.random(min, max))`

没想到，想要简化下写法，又能水一篇破文章。

<!-- more -->


## 准备


先准备引入lodash，填充数组数据：

```js
const _ = require("lodash");
const avatar_sg = new Array(50).fill(0).map((e, i) => `(${i + 1}).png`)
```

## 方案一 Object.defineProperty
先来个时髦的，vue2用来做响应式的Object.defineProperty，直接加载Array数组原型上增加方法。

```js
Object.defineProperty(Array.prototype, 'sampleRandom', {
  value: function (min, max) {
    let count = _.random(min, max) || 1 //最少取1
    return _.sampleSize(this, count)
  },
  enumerable: false, //是否可遍历
  writable: false, //是否可写
  configurable: false, //可否删除重定义
});
console.log(avatar_sg.sampleRandom(5))
```

缺点：没有jsDOC代码提示，无论是函数名还是参数。尝试标注了半天也没生效，有懂得朋友可以告诉我……

## 方案二 封装类
制作一个新类去包装

```js
function EnumList(arr) {
  this.value = arr
  /**
   * 从列表中随机取出(min-max)项
   * @param {int} min // 整数
   * @param {int} max // 整数 如果不传max，随机范围为0-min
   * @returns
   */
  this.sampleRandom = (min, max) => {
    let count = _.random(min, max) || 1 //最少取1
    return _.sampleSize(this.value, count)
  }
}
let a = new EnumList(avatar_sg)
console.log(a.sampleRandom(16))
```
这回有代码提示了。缺点：需要new。而且拿到原值需要用 a.value。感觉更繁琐了

## 方案三 拎出函数直接放原型
```js
/**
 * 从列表中随机取出(min-max)项
 * @param {int} min // 整数
 * @param {int} max // 整数 如果不传max，随机范围为0-min
 * @returns
 */
function sampleRandom(min, max) {
  let count = _.random(min, max) || 1 //最少取1
  return _.sampleSize(this, count)
}
Array.prototype.sampleRandom = sampleRandom
console.log(avatar_sg)
```
缺点：代码提示不全。比方法一强点了，方法名没有提示，写完方法名，参数就有提示了。


## 方案四 折腾完毕，老老实实写纯函数
```js
/**
 * 从列表中随机取出(min-max)项
 * @param {Array} list // 原数组
 * @param {int} min // 整数
 * @param {int} max // 整数 如果不传max，随机范围为0-min
 * @returns
 */
function sampleRandom(arr, min, max) {
  let count = _.random(min, max) || 1 //最少取1
  return _.sampleSize(arr, count)
}
console.log(sampleRandom(avatar_sg, 5))
```

这下没问题了，基本啥也没干。

本来只想简化一个函数的导入导出，直接导数组数据到各处去用，结果又回来了。简直是听君一席话，等于一席话。

还是应该用TS的!!