---
title: 从零开始全栈开发(3)前端
date: 2019-08-27
tags:
  - Node.js
  - Vue.js
categories:
  - 技术
---

## 项目源码地址

后端源码：[https://github.com/Rackar/node_blog](https://github.com/Rackar/node_blog)

前端源码：[https://github.com/Rackar/node_blog_vue](https://github.com/Rackar/node_blog_vue)

## 系列文章地址

[基础环境搭建](./nodeStart1)

[后端起步](./nodeStart2)

[前端起步](./nodeStart3)

## 前端技术概况

vue.js + element-ui + axios + @toast-ui/vue-editor
前后端分离，后端发布 RESTful API，前端带着 jwt token 交互

## 登录

登录时将 token 保存到\$store.state,同时写入 localStorage。
并从 token 中解析出 payload 中的 userid 和 username 供全局使用
`store.js`

```
 mutations: {
    login_saveToken(state, data) {
      state.token = data; //data = "Bearer sdfsdfsdfwefas.sdfsdfsdf.sdfasdfsdfsdf"结构
      window.localStorage.setItem("token", data);
      function parseJwt(token) {
        var base64Url = token.split(".")[1];
        var base64 = decodeURIComponent(
          atob(base64Url)
            .split("")
            .map(function(c) {
              return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
            })
            .join("")
        );

        return JSON.parse(base64);
      }
      var dd = parseJwt(data.split(" ")[1]);
      // console.log(dd);
      state.userid = dd.userid;
      state.username = dd.username;
    }
}
```

## jwt 认证

给 axios 做全局配置，拦截请求增加 token:
`main.js`

```
axios.interceptors.request.use(
  config => {
    config.headers = {
      "Content-Type": " application/json"
    };
    if (store.state.token) {
      config.headers.Authorization = `${store.state.token}`;
    }
    // config.headers[] = localStorage.token;
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);
```

拦截影响检测 token:

```
axios.interceptors.response.use(
  function(response) {
    // 用户信息是否超时，重定向到登录页面
    // debugger;
    if (response.data.status === 0) {
      localStorage.clear();
      router.replace({
        path: "/login",
        query: { redirect: router.currentRoute.fullPath }
      });
    }
    return response;
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error);
  }
);
```

## markdown 编辑器

编辑器之前选择的是 simplemde 库，但是这个库有注入风险。换成了@toast-ui/vue-editor ，这个有另一个坑就是库太大了。为了解决过大的问题使用了下面的几个方法

## 路由和组件懒加载

路由通过下面的代码进行懒加载，同时注释不要拿掉，改成相应的名字，在 webpack 打包时会按注释名分割代码打包

```
{
      name: "edit",
      path: "/edit",
      component: () =>
        import(/* webpackChunkName: "editer" */ "./jianshu/editer2.vue")
    },
```

## 取消预拉取

```chainWebpack: config => {
config.plugins.delete("prefetch"); //关闭预拉取插件
  }
```

## 启用 gzip 压缩代

通过 `npm i compression-webpack-plugin -D` 设置代码压缩
