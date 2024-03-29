---
title: Nuxt 踩坑
date: 2021-08-12
tags:
  - Vue.js
categories:
  - 技术
publish: true
---

Nuxt 开发遇到的问题和解决

<!-- more -->

## 介绍

Nuxt 是 Vue.js 的 SSR 库。主要是保留后端服务器来辅助渲染。由于部署方式变了，所以和 Vue.js 前端打包一切的方式就有区别。

## 记录列表

1. 插件
   库基本都要通过插件形式引用，插件分为全栈插件、客户端、服务端。所以我自定义的一个小 UI 组件，就可以写成前端插件。

2. 插件加载顺序
   在 Nuxtconfig 里，插件数组中靠后的插件先生效，所以插件要引用别的插件的话，需要前置。

3. 手动安装 Express
   本来以为自带了 Express 不需要再安，可是看了半天最后还是手动安装解决。调用方式后面附代码。

4. 国际化
   使用@nuxt/i18n，可以从数据库获取 JSON 语种，延迟加载翻译。

## 调试

`.vscode\launch.json`添加如下：
```json
"version": "0.2.0",
"configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "server: nuxt",
      "args": ["dev"],
      "osx": {
        "program": "${workspaceFolder}/node_modules/.bin/nuxt"
      },
      "linux": {
        "program": "${workspaceFolder}/node_modules/.bin/nuxt"
      },
      "windows": {
        "program": "${workspaceFolder}/node_modules/nuxt/bin/nuxt.js"
      }
    },{
      "type": "chrome",
      "request": "launch",
      "name": "client: chrome",
      "url": "http://localhost:3000",
      "webRoot": "${workspaceFolder}"
    }
  ],
"compounds": [
    {
      "name": "fullstack: nuxt",
      "configurations": ["server: nuxt", "client: chrome"]
    }
  ]
```

nuxt.config.js 中的 nuxtConfig.build 增加
```
build: {
    extend(config, ctx) {
      if (ctx.isDev) {
        config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
      }
    }
  }
```

然后选fullstack: nuxt进行调试，前后端的断点就都能命中了