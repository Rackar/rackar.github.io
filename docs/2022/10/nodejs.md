---
title: Node.js后端的一些库汇总
date: 2022-10-12
tags:
  - Node.js
categories:
  - 技术
publish: true
---

js的生态发展就是快，连后端的新技术也层出不穷，做下记录供选型

<!-- more -->


服务器后端
1. Express
老牌后端服务器，示例和资源最多
2. Koa
Express改进版，中间件好用
3. StrAPI
基于Koa的api增强版，一键可视化后台，可视化创建表并自动生成REST API路由

ORM
1. Mongoose
老牌Node.js ORM,专门针对MongoDB，使用数据模型，示例和经验多。
2. Prisma
新型ORM，可对接关系型数据库或MongoDB，使用Schema同时定义类型和关系，TS友好，可方便的关联查询和自定义查询，对接REST和GraphQL都比较好。

辅助
1. AdminJS
可几行命令嵌入后端，直接建立数据库管理面板可视化后台，内部使用React，待优化和完善，文档正在改进中。可接入Express Koa Nestjs等后端，Mongoose、Sequelize、Prisma等ORM。

低代码完整链
1. Unicloud
具备数据库Schema2Code，可自动生成后端，同时能做出管理页和前端展示页模板，前端灵活性高，复杂请求和复杂接口不好定义。但是必须要用腾讯云或阿里云的云数据库（mongo）和云开发路线。
2. JeeCG
前端vue，后端JAVA Spring boot。可视化一键生成后台管理端的增查改删接口和页面，需了解JAVA背景知识。数据库为MySQL。