---
title: node 服务器图片上传失败
date: 2019-11-05
tags:
  - Node.js
categories:
  - 技术
---

测试了各种写法，报 500 错误，连问题在哪都找不到。

简直都要放弃了，发现原来是 node 服务器用的 multer 问题。

服务端用了:

`apiRoutes.post('/uploadimage', upload.single('avatar'), uploadImage)`

这种鬼写法，指定了类型名称为 avatar。

那在前端上传时，必须要用同名的方式：

```
let data = new FormData();
data.append("avatar", file.file);
let config = {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      };
```

参考：
https://blog.csdn.net/qq_37540004/article/details/60963039
