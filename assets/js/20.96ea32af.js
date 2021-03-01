(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{525:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("之前两篇文章介绍了"),a("a",{attrs:{href:"https://www.codingyang.com/2020/03/codeEditer.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("VS Code 写作介绍"),a("OutboundLink")],1),t._v("和"),a("a",{attrs:{href:"https://www.codingyang.com/2020/03/getQiniu.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("七牛云图床申请"),a("OutboundLink")],1),t._v("，接下来再说一下怎么使用插件便捷在文章中插入图片。")]),t._v(" "),a("h2",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),a("p",[t._v("本插件可以用四种方式上传图片到七牛云存储，并将外链图片标签写回 md 文件。方式包括本地上传，本地/远程图片路径、截图粘贴和右键菜单。")]),t._v(" "),a("p",[t._v("还有一个设置图片在本机同目录下保存还是上传七牛云的开关。")]),t._v(" "),a("h2",{attrs:{id:"安装配置插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装配置插件"}},[t._v("#")]),t._v(" 安装配置插件")]),t._v(" "),a("p",[t._v("VS Code 插件中搜索 "),a("code",[t._v("markdown-image")]),t._v(" 就可以找到。点击 "),a("code",[t._v("Install")]),t._v(" 安装。或者使用快捷键"),a("code",[t._v("Ctrl+P")]),t._v("，键入 "),a("code",[t._v("ext install markdown-image")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.codingyang.com/assets/img/1585053722224.7c74657b.png",alt:""}})]),t._v(" "),a("p",[t._v("如果需要自动上传到七牛图床做外链，按照下面的方式进行配置。否则可以跳过。")]),t._v(" "),a("p",[t._v("首先配置七牛云参数，也就是上面第二篇文章中记录下来的"),a("code",[t._v("外链地址、AK、SK、存储名称")]),t._v("。")]),t._v(" "),a("p",[t._v("点击文件 → 首选项 → 设置（快捷键 "),a("code",[t._v("Ctrl + Shift +P")]),t._v(" open user settings），在用户页找到扩展 → qiniu configuration。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://img.codingyang.com/1585190944532-202032610495.png",alt:"1585190944532"}})]),t._v(" "),a("p",[t._v("这里填入各项配置：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 插件开关，默认打开")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"qiniu.enable"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 上传开关。如关闭则会复制图片到本机，位置为本项目中location。点击上传开关按钮会修改本值。")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"qiniu.uploadEnable"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 你的七牛AK: AccessKey")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"qiniu.access_key"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*****************************************"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 你的七牛SK: SecretKey")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"qiniu.secret_key"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*****************************************"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 你的七牛存储名称")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"qiniu.bucket"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"i-am-pic"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 你的七牛外链地址。注意需要以http://作为开头。")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"qiniu.domain"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://xxxxx.xxxx.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 远程文件命名方式。参数化命名，暂时支持 ${fileName}、${mdFileName}、${date}、${dateTime}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 示例：")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   ${mdFileName}-${dateTime} -> markdownName-20170412222810.jpg")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"qiniu.remotePath"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"${fileName}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 截图方式图片本地保存路径（因为七牛的api限制，截图上传是先将黏贴板里的图片存储到本地，然后再根据这个路径上传图片")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"qiniu.location"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./img"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br")])]),a("p",[t._v("修改以后会自动保存。设置完成后就可以开始使用了。")]),t._v(" "),a("h2",{attrs:{id:"使用方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用方法"}},[t._v("#")]),t._v(" 使用方法")]),t._v(" "),a("p",[t._v("打开 "),a("code",[t._v(".md")]),t._v(" 文件后，左下角状态栏有 3 个按钮和一个开关。开关用于切换图片文件保存到本机路径还是上传七牛云。按钮功能如下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://img.codingyang.com/1585790341995-2020429192.png",alt:"1585790341995-2020429192.png"}})]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("img 截图")]),t._v(" 剪贴板内的截图上传。快捷键： "),a("code",[t._v("Ctrl + Alt +8")]),t._v(" "),a("blockquote",[a("p",[t._v("支持 qq，微信等工具的截图功能，会自动在本目录保存图片并上传云端。由于截图是保存在剪贴板，其他复制操作会覆盖截图。")])])])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://img.codingyang.com/jietu-202032615512.gif",alt:"jietu"}})]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("strong",[t._v("img 本地")]),t._v(" 直接弹框选择本机图片上传。快捷键："),a("code",[t._v("Ctrl + Alt +9")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://img.codingyang.com/benji-202032615536.gif",alt:"benji"}})]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[a("strong",[t._v("img 远程")]),t._v(" 粘贴本地图片路径或远程图片 URL 上传。快捷键："),a("code",[t._v("Ctrl + Alt +0")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://img.codingyang.com/path-202032615555.gif",alt:"path"}})]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[a("strong",[t._v("右键添加")]),t._v(" 在左侧项目资源管理器中对图片文件右键，选择“将图片加入到 Markdown 文件中”。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://img.codingyang.com/youjian-20204292214.gif",alt:"youjian-20204292214.gif"}})]),t._v(" "),a("p",[t._v("上传成功后，插件会自动返回图片外链地址，并在光标处插入图片代码。如：")]),t._v(" "),a("div",{staticClass:"language-md line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[a("span",{pre:!0,attrs:{class:"token url"}},[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("["),a("span",{pre:!0,attrs:{class:"token content"}},[t._v("filename")]),t._v("]("),a("span",{pre:!0,attrs:{class:"token url"}},[t._v("http://img.codingyang.com/filename-2020326111524.png")]),t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("云端文件命名会根据你设置的参数化命名方式。")]),t._v(" "),a("h2",{attrs:{id:"注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[t._v("#")]),t._v(" 注意事项")]),t._v(" "),a("ol",[a("li",[t._v("只有在编辑 Markdown 文件时插件才可使用。")]),t._v(" "),a("li",[t._v("VS Code 在预览界面默认不加载 http 请求的图片，而七牛免费云图床使用 http 协议。要按照下图点击允许请求才能正常预览外链图片。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://img.codingyang.com/tu2-2020326112210.png",alt:"tu2"}})]),t._v(" "),a("h2",{attrs:{id:"源代码库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#源代码库"}},[t._v("#")]),t._v(" 源代码库")]),t._v(" "),a("p",[t._v("本插件源码地址：")]),t._v(" "),a("p",[t._v("https://github.com/Rackar/md-image-code-ext")]),t._v(" "),a("p",[t._v("欢迎报告 Bug、建议以及 PR。")]),t._v(" "),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),a("p",[t._v("本插件核心代码参考了下面 3 个库，修改为 qiniu 7.3.0 版 API 的用法，改为 TypeScript 版本。支持开源，尊重原创。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/favers/vscode-qiniu-upload-image",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/favers/vscode-qiniu-upload-image"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/yscoder/vscode-qiniu-upload-image",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/yscoder/vscode-qiniu-upload-image"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/gityangge/vscode-qiniu-upload-image-plus",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/gityangge/vscode-qiniu-upload-image-plus"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);