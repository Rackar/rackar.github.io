# 视频继续教育课脚本

具体什么课就不说了，保存一下脚本，可以最小化听课。屏蔽掉了失焦点视频暂停和验证码。

## 脚本
```js
$("body").off('blur');
window.onblur=function(){}
$.fn.pointsVerify=function(options,callbacks){options.success()}
```


## 用法

打开课程点 F12，找到 Console 标签，在下方箭头输入处粘贴这 3 行代码，回车就行
![](../pic/zcchs.jpg)
