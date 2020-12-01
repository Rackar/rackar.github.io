---
title: 在封闭多边形中绘制平行线
date: 2020-10-12
tags:
  - JavaScript
categories:
  - 技术
publish: false
---

想用任意方向的等距平行线平铺多边形内部，找了半天没有合适的 JavaScript 库和方法，尝试自己实现一个简易的。

<!-- more -->

## 基础

使用高德 JS API 和 TURF 库。文档如下：

[高德鼠标绘制](https://lbs.amap.com/api/javascript-api/example/mouse-operate-map/mouse-draw-overlayers)

[高德多边形绘制编辑](https://lbs.amap.com/api/javascript-api/example/overlayers/polygon-draw-and-edit)

[高德空间数据计算](https://lbs.amap.com/api/javascript-api/reference/math)

```js
//   turf 方法：
// 线和面的交点lineIntersect 不会延长，结果为交点数组
// 两点线角度（斜率）bearing
// 两点距离 distance
```
