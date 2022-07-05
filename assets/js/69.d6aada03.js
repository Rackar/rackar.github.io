(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{520:function(t,e,a){"use strict";a.r(e);var s=a(0),n=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"项目源码地址"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#项目源码地址"}},[t._v("#")]),t._v(" 项目源码地址")]),t._v(" "),e("p",[t._v("后端源码："),e("a",{attrs:{href:"https://github.com/Rackar/node_blog",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/Rackar/node_blog"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("前端源码："),e("a",{attrs:{href:"https://github.com/Rackar/node_blog_vue",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/Rackar/node_blog_vue"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"系列文章地址"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#系列文章地址"}},[t._v("#")]),t._v(" 系列文章地址")]),t._v(" "),e("p",[e("a",{attrs:{href:"./nodeStart1"}},[t._v("基础环境搭建")])]),t._v(" "),e("p",[e("a",{attrs:{href:"./nodeStart2"}},[t._v("后端起步")])]),t._v(" "),e("p",[e("a",{attrs:{href:"./nodeStart3"}},[t._v("前端起步")])]),t._v(" "),e("h2",{attrs:{id:"安装工具"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装工具"}},[t._v("#")]),t._v(" 安装工具")]),t._v(" "),e("p",[t._v("下载安装 VS code 编辑器，作为主要开发工具\nhttps://aka.ms/win32-x64-user-stable")]),t._v(" "),e("p",[t._v("下载 node.js，很多工具和命令的基础环境（包括了 npm）\nhttps://nodejs.org/dist/v10.15.3/node-v10.15.3-x64.msi")]),t._v(" "),e("p",[t._v("下载 git，代码上传、下载、版本控制工具神器\nhttps://github.com/git-for-windows/git/releases/download/v2.21.0.windows.1/Git-2.21.0-64-bit.exe")]),t._v(" "),e("p",[t._v("下载谷歌 chrome 浏览器，必备的浏览和调试工具\nhttps://www.google.cn/intl/zh-CN/chrome/")]),t._v(" "),e("p",[t._v("安装 vue 脚手架（如果不自行新建 vue 项目，这个可以不装）\nwin+r 输入 cmd 打开命令行，执行"),e("code",[t._v("npm i -g @vue/cli")])]),t._v(" "),e("p",[t._v("以上工具链接都是 windows 安装版，一路默认安装即可。")]),t._v(" "),e("h2",{attrs:{id:"mongodb-数据库-本机"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mongodb-数据库-本机"}},[t._v("#")]),t._v(" mongodb 数据库（本机）")]),t._v(" "),e("p",[t._v("按照："),e("a",{attrs:{href:"./mongoStart"}},[t._v("MongoDB 坏境搭建")])]),t._v(" "),e("h2",{attrs:{id:"拷贝代码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#拷贝代码"}},[t._v("#")]),t._v(" 拷贝代码")]),t._v(" "),e("p",[t._v("在 d 盘新建 code 文件夹，用 vs code'文件'——'打开文件夹'打开。\n在 VS code 中的命令行工具（快捷键 ctrl+~）中输入")]),t._v(" "),e("p",[e("code",[t._v("git clone https://github.com/Rackar/node_blog_vue")]),t._v("\n拉取我的前端示例项目源码，会创建 d:\\dode\\node_blog_vue 文件夹")]),t._v(" "),e("p",[e("code",[t._v("git clone https://github.com/Rackar/node_blog")]),t._v("\n拉取我的后端项目源码，会创建 d:\\dode\\node_blog 文件夹")]),t._v(" "),e("h3",{attrs:{id:"前端初始化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前端初始化"}},[t._v("#")]),t._v(" 前端初始化")]),t._v(" "),e("p",[t._v("等待下载完成后在命令提示符依次执行下面几行命令")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("cd node_blog_vue\nnpm config set registry https://registry.npm.taobao.org\nnpm i\nnpm run serve\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])]),e("p",[t._v("分别是进入项目目录，设置国内的依赖下载源（配置一次一直成效），下载依赖包，运行调试。\n这时按住 ctrl 点击 http://localhost:9529/ 即会在浏览器打开项目预览。\n后续教程都会基于当前这个项目文件夹继续添加文件。")]),t._v(" "),e("h3",{attrs:{id:"后端初始化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#后端初始化"}},[t._v("#")]),t._v(" 后端初始化")]),t._v(" "),e("p",[t._v("同样")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("cd d:\\code\\node_blog\nnpm i\nnpm start\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("p",[t._v("或者不用执行 npm start，在 vs code 中使用 f5 快捷键调试。")]),t._v(" "),e("h1",{attrs:{id:"后端-nodemon-快速调试-vs-code-热重载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#后端-nodemon-快速调试-vs-code-热重载"}},[t._v("#")]),t._v(" 后端：nodemon 快速调试，vs code 热重载")]),t._v(" "),e("p",[t._v("全局安装工具\n"),e("code",[t._v("npm install -g nodemon")]),t._v("\nVS 调试配置：点击 launch.json，右下角添加配置，搜索 nodemon。修改启动路径为 express 脚手架的默认路径\n"),e("code",[t._v('"program": "${workspaceFolder}\\\\bin\\\\www",')]),t._v("\n现在 F5 调试可以一直不管了，保存 JS 文件时会自动重启调试。")]),t._v(" "),e("h1",{attrs:{id:"vs-code-自动修正格式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vs-code-自动修正格式"}},[t._v("#")]),t._v(" VS code 自动修正格式")]),t._v(" "),e("p",[t._v("保存时代码自动格式化,统一代码风格并自动修正格式问题。")]),t._v(" "),e("p",[t._v("按照："),e("a",{attrs:{href:"./vueEslint"}},[t._v("VS code 自动格式化")])])])}),[],!1,null,null,null);e.default=n.exports}}]);