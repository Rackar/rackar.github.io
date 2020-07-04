---
title: Promise返回Promise
date: 2020-07-04
tags:
  - JavaScript
categories:
  - 技术
publish: true
---

Promise用的很多，但在嵌套使用的时候还是会疑惑。记录一个小DEMO。

<!-- more -->

## 返回另一个Promise

Promise在新建时就会执行，then添加时如果异步已经完成则立即回调。

resolve返回一个Promise，会导致前一个的状态无效，then接收的是下一个的返回值。

```js
const p1 = new Promise(function (resolve, reject) {
    console.log("p1")
    setTimeout(() => {
        console.log('2.1s')
        resolve('2100')
    }, 3100)
  })
  
  const p2 = new Promise(function (resolve, reject) {
      console.log('p2')
    setTimeout(() => {
        console.log('2s')
        resolve(p1)}, 2000)
  })
  
  p2
    .then(result => console.log("回调返回",result))
    .catch(error => console.log(error))
```
