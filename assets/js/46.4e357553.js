(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{523:function(o,t,e){"use strict";e.r(t);var n=e(4),a=Object(n.a)({},(function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[e("h2",{attrs:{id:"windows-环境下"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#windows-环境下"}},[o._v("#")]),o._v(" Windows 环境下")]),o._v(" "),e("ol",[e("li",[e("p",[o._v("自动选择稳定版的 64 位。可以选择 zip 版。解压到 D:/mongodb 文件夹\n"),e("a",{attrs:{href:"https://www.mongodb.com/download-center/community",target:"_blank",rel:"noopener noreferrer"}},[o._v("https://www.mongodb.com/download-center/community"),e("OutboundLink")],1),o._v(" "),e("strong",[o._v("如果准备一直开启数据库服务器，直接下载 MSI 版本安装即可。可跳过 2、3 步")])])]),o._v(" "),e("li",[e("p",[o._v("在 D:/mongodb/文件夹下新建两个文件夹 db,log\n"),e("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/15157592-1c7fe8e8157eea44.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}})])]),o._v(" "),e("li",[e("p",[o._v("在 D:/mongodb/文件夹下新建文本文件 startServer.bat，编辑复制这条命令进去保存：\n"),e("code",[o._v(".\\bin\\mongod.exe --dbpath D:\\mongodb\\db --logpath D:\\mongodb\\log\\mongod.log --logappend")]),o._v("\n双击 bat 文件执行，即开启 mongod 数据库服务器。服务器默认会开启在本地 localhost:27017 端口（127.0.0.1:27017 同样是本机 ip），无用户名和密码。")])])]),o._v(" "),e("p",[o._v("4.在空白处 shift+右键，“在此处打开 Powershell（或命令行）窗口”，\n执行命令："),e("code",[o._v(".\\bin\\mongo.exe")]),o._v("，看到> 即表明数据库服务器连接正常，输入 show dbs 可看到初始数据库列表。\n"),e("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/15157592-555de13e5b3d4374.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"安装运行正常"}})]),o._v(" "),e("p",[o._v("或者下载"),e("a",{attrs:{href:"https://www.mongodb.com/download-center/compass",target:"_blank",rel:"noopener noreferrer"}},[o._v("MongoDB Compass"),e("OutboundLink")],1),o._v("，用 UI 界面管理数据库。")]),o._v(" "),e("p",[o._v("5.为了不用每次重启电脑以后手动执行 startServer.bat 来打开数据库服务，可以 win+r 打开运行，键入"),e("code",[o._v("shell:startup")]),o._v("打开系统启动项，按住 alt 将.bat 文件拖入，即可开机自启。")])])}),[],!1,null,null,null);t.default=a.exports}}]);