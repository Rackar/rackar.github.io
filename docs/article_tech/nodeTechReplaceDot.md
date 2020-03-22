---
title: 去掉 js 对象键中包含的点
date: 2019-10-20
tags:
  - Node.js
categories:
  - 技术
---

## 起因

写一个 node 爬虫存数据到 MongoDB 的时候，遇到了键为"PM2.5"这种情况，写入 MongoDB 时会报错。

http://www.codingyang.com/article_tech/nodeCrawl.html

做了一个小轮子，迭代对象下所有分支的 key，将所有带点.的都替换为下划线\_。

也许以后还会用到，记录一下。

## 代码

```js
function parseObjReplaceDot(obj) {
  if (obj.constructor !== Object) {
    throw new Error("只支持对象类型，数组请遍历调用");
  }
  let newObj = {};
  for (let key in obj) {
    var newkey = key.replace(/\./g, "_"); //将.全部替换为_
    let isObj = obj[key].constructor === Object;
    let isArr = obj[key].constructor === Array;
    if (isObj) {
      newObj[newkey] = parseObjReplaceDot(obj[key]);
    } else if (isArr) {
      let newArr = [];
      obj[key].forEach(arrObj => {
        if (arrObj.constructor === Object || arrObj.constructor === Array) {
          newArr.push(parseObjReplaceDot(arrObj));
        } else {
          newArr.push(arrObj);
        }
      });
      newObj[newkey] = newArr;
    } else {
      newObj[newkey] = obj[key];
    }
  }
  return newObj;
}
```

## 说明

第一层只接受对象。如果下面有值是数组或者对象，则迭代遍历。
