---
title: 微信小程序云开发采坑

date: 2020-02-04
tags:
  - 小程序
categories:
  - 技术
---

微信的开发文档到底有多差，这次可是亲身体验过了。没有一个 demo 简直让人崩溃。

## 直接使用 openid

云数据库有两种访问方式：

小程序前端（也就是页面）直接操作，以及云函数（云端 node）。所以在文档中经常看到两种写法，一般来说前端的写法会有回调方法。

在小程序端写入数据的数据会自动添加"\_openid"字段，用于记录时哪个用户进行的操作导致修改数据库。

云函数不会自动添加。但是云函数中可以用 `let { OPENID, APPID } = cloud.getWXContext()` 来直接获取当前用户的 openid。

不管是哪种方式，这样写就都不用进行微信用户的授权和密钥的换取，节省了一些费劲的工作。

## 授权后解密 openid

不过想要获得昵称、头像、性别、城市等信息的话，还是需要使用一个 button 去获取授权获取一下。

这个 button 在 uniapp 中写成这样：

`<button open-type="getUserInfo" @getuserinfo='onGotUserInfo'>登录授权</button>`

在微信小程序原生中写作这样：

`<button open-type="getUserInfo" lang="zh_CN" bindgetuserinfo="onGotUserInfo">获取用户信息</button>`

这里可以获取回来明文信息，但是没有 openid。获取的方法在这里，里面还包括解密示例代码，真是难得：

https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html#method-cloud

## 云函数调试

高级日志的写法：

```
const log = cloud.logger()
	log.info({
	    name: 'myDebugLog',
	    event:event,
		context:context,
		openid:OPENID,
        msg:'这破log'
})
```

## 小程序转发

如果要在某一个页面开启小程序默认转发，必须定义`onShareAppMessage`。如：

```
onShareAppMessage(res) {
    if (res.from === "button") {
      // 来自页面内分享按钮
      console.log(res.target);
    }

    return {
      title: "转发标题",
      path: "/pages/index/index"
    };
  },
```

或者使用自定义按钮`<button open-type="share">分享</button>`
