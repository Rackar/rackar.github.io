---
title: VUE 与 KOA2 引入 socket.io
date: 2020-01-13
tags:
  - Vue.js
  - Node.js
categories:
  - 技术
---

## 单组件不用 vuex 的情况

### 后端 koa 代码

```js
const socket = require("socket.io");
var http = require("http");
let io = null;
//可以http
var server = http.createServer(app.callback());
io = socket(server);
io.on("connection", function(socket) {
  console.log("client connected"); //终端显示连接状态
  socket.on("pingfen", data => {
    console.log("客户端发送的内容：", data);
    //返回发起方
    socket.emit("getMsg", "我是返回的消息... 收到的分数为：" + data.fenshu);
    //广播除发起方的所有连接方
    socket.broadcast.emit(
      "getMsg",
      "我是返回的消息... 收到的分数为：" + data.fenshu
    );
  });
});
```

### 前端 vue 代码

main.js

```js
import VueSocketIO from "vue-socket.io";

let mainUrl =
  process.env.NODE_ENV === "production"
    ? "https://xxxxx.com:3007/"
    : "http://localhost:3006/";
Vue.use(
  new VueSocketIO({
    debug: true,
    connection: mainUrl
  })
);
```

socket.vue

```js
<template>
  <div>
    <div>{{ msg }}</div>

    <el-button @click="sendData">发送数据</el-button>
  </div>
</template>

<script>
export default {
  sockets: {
    connect: function() {
      console.log("socket connected");
    },
    getMsg: function(value) {
      console.log(value);
      this.msg = value;
    }
  },
  data() {
    return {
      msg: ""
    };
  },
  methods: {
    sendData() {
      this.$socket.emit("pingfen", { fenshu: 5 });
    }
  }
};
</script>

<style></style>


```

## 使用 vuex 的情况

### 前端代码

main.js

```js
import Vue from "vue";
import store from "./store";
import App from "./App.vue";
import VueSocketIO from "vue-socket.io";

Vue.use(
  new VueSocketIO({
    debug: true,
    connection: "http://metinseylan.com:1992",
    vuex: {
      store,
      actionPrefix: "SOCKET_",
      mutationPrefix: "SOCKET_"
    },
    options: { path: "/my-app/" } //Optional options
  })
);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
```

store.js

```js
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {
    "<MUTATION_PREFIX><EVENT_NAME>"() {
      // do something
    }
  },
  actions: {
    "<ACTION_PREFIX><EVENT_NAME>"() {
      // do something
    }
  }
});
```
