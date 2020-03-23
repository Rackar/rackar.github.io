---
title: TypeScript中用for in遍历对象的属性
date: 2020-03-23
tags:
  - TypeScript
categories:
  - 技术
---

在 TS 中使用对象遍历时，下角标不允许是字符串。

<!-- more -->

```js
for (let k in obj) {
  let s = obj[k];
}
```

报错：
`Element implicitly has an ‘any’ type because expression of type ‘string’ can’t be used to index type ‘{ ..... }’.`
`No index signature with a parameter of type ‘string’ was found on type ‘{..... }’.ts(7053)`

解决办法为修改`tsconfig.json`，允许索引

```js
"compilerOptions": {
    //...
    "suppressImplicitAnyIndexErrors": true
  },
```
