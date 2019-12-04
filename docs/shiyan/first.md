# 环境搭建

## vue

vue create demo

为了在实验楼环境下正常运作 vue/cli

增加 vue.config.js

```js
module.exports = {
  devServer: {
    disableHostCheck: true
  }
};
```

## mongo
