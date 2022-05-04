(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{683:function(e,n,t){"use strict";t.r(n);var s=t(10),a=Object(s.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("微信的开发文档到底有多差，这次可是亲身体验过了。没有一个 demo 简直让人崩溃。")]),e._v(" "),t("h2",{attrs:{id:"直接使用-openid"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#直接使用-openid"}},[e._v("#")]),e._v(" 直接使用 openid")]),e._v(" "),t("p",[e._v("云数据库有两种访问方式：")]),e._v(" "),t("p",[e._v("小程序前端（也就是页面）直接操作，以及云函数（云端 node）。所以在文档中经常看到两种写法，一般来说前端的写法会有回调方法。")]),e._v(" "),t("p",[e._v('在小程序端写入数据的数据会自动添加"_openid"字段，用于记录时哪个用户进行的操作导致修改数据库。')]),e._v(" "),t("p",[e._v("云函数不会自动添加。但是云函数中可以用 "),t("code",[e._v("let { OPENID, APPID } = cloud.getWXContext()")]),e._v(" 来直接获取当前用户的 openid。")]),e._v(" "),t("p",[e._v("不管是哪种方式，这样写就都不用进行微信用户的授权和密钥的换取，节省了一些费劲的工作。")]),e._v(" "),t("h2",{attrs:{id:"授权后解密-openid"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#授权后解密-openid"}},[e._v("#")]),e._v(" 授权后解密 openid")]),e._v(" "),t("p",[e._v("不过想要获得昵称、头像、性别、城市等信息的话，还是需要使用一个 button 去获取授权获取一下。")]),e._v(" "),t("p",[e._v("这个 button 在 uniapp 中写成这样：")]),e._v(" "),t("p",[t("code",[e._v("<button open-type=\"getUserInfo\" @getuserinfo='onGotUserInfo'>登录授权</button>")])]),e._v(" "),t("p",[e._v("在微信小程序原生中写作这样：")]),e._v(" "),t("p",[t("code",[e._v('<button open-type="getUserInfo" lang="zh_CN" bindgetuserinfo="onGotUserInfo">获取用户信息</button>')])]),e._v(" "),t("p",[e._v("这里可以获取回来明文信息，但是没有 openid。获取的方法在这里，里面还包括解密示例代码，真是难得：")]),e._v(" "),t("p",[e._v("https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html#method-cloud")]),e._v(" "),t("h2",{attrs:{id:"云函数调试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#云函数调试"}},[e._v("#")]),e._v(" 云函数调试")]),e._v(" "),t("p",[e._v("高级日志的写法：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("const log = cloud.logger()\n\tlog.info({\n\t    name: 'myDebugLog',\n\t    event:event,\n\t\tcontext:context,\n\t\topenid:OPENID,\n        msg:'这破log'\n})\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br")])]),t("h2",{attrs:{id:"小程序转发"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#小程序转发"}},[e._v("#")]),e._v(" 小程序转发")]),e._v(" "),t("p",[e._v("如果要在某一个页面开启小程序默认转发，必须定义"),t("code",[e._v("onShareAppMessage")]),e._v("。如：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('onShareAppMessage(res) {\n    if (res.from === "button") {\n      // 来自页面内分享按钮\n      console.log(res.target);\n    }\n\n    return {\n      title: "转发标题",\n      path: "/pages/index/index"\n    };\n  },\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br")])]),t("p",[e._v("或者使用自定义按钮"),t("code",[e._v('<button open-type="share">分享</button>')])])])}),[],!1,null,null,null);n.default=a.exports}}]);