(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{518:function(s,t,a){"use strict";a.r(t);var e=a(0),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("又来了。本次虚拟机使用docker")]),s._v(" "),t("h2",{attrs:{id:"win11-家庭版启用-hyper-v"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#win11-家庭版启用-hyper-v"}},[s._v("#")]),s._v(" Win11 家庭版启用 Hyper-V")]),s._v(" "),t("p",[s._v("参考 https://blog.csdn.net/weixin_43841924/article/details/125600106")]),s._v(" "),t("p",[s._v("1、将如下代码添加到记事本中，并另存为Hyper-V.cmd文件。代码如下：")]),s._v(" "),t("div",{staticClass:"language-bat line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('pushd "%~dp0"\ndir /b %SystemRoot%\\servicing\\Packages\\*Hyper-V*.mum >hyper-v.txt\nfor /f %%i in (\'findstr /i . hyper-v.txt 2^>nul\') do dism /online /norestart /add-package:"%SystemRoot%\\servicing\\Packages\\%%i"\ndel hyper-v.txt\nDism /online /enable-feature /featurename:Microsoft-Hyper-V-All /LimitAccess /ALL\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("2、右键点击【Hyper-V.cmd】文件图标，在右键菜单中点击：以管理员身份运行；")]),s._v(" "),t("p",[s._v("3、然后弹出一个 用户帐户控制 - Windows命令处理程序 对话框，我们点击：是。")]),s._v(" "),t("p",[s._v("4、然后系统自动进行Windows命令处理，我们等待处理完成以后，在最末处输入：Y，电脑自动重启，进行配置更新。")]),s._v(" "),t("p",[s._v("5、重启后可以在“打开或关闭windows功能”里看到已经Hyper-V已经安装并打上勾了，重启即可使用。")]),s._v(" "),t("p",[s._v("管理员身份打开Powershell,分别执行")]),s._v(" "),t("div",{staticClass:"language-s line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart\ndism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"安装wsl2和ubuntu"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装wsl2和ubuntu"}},[s._v("#")]),s._v(" 安装wsl2和ubuntu")]),s._v(" "),t("p",[s._v("参考 https://www.bilibili.com/read/cv16825907/")]),s._v(" "),t("p",[s._v("打开微软商店，搜索linux，选择Windows Subsystem for Linux Preview，获取安装")]),s._v(" "),t("p",[s._v("然后搜索Ubuntu20.04 LTS 安装")]),s._v(" "),t("p",[s._v("安好后打开，提示初始化，输入用户名和密码")]),s._v(" "),t("h2",{attrs:{id:"虚拟机中安装docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#虚拟机中安装docker"}},[s._v("#")]),s._v(" 虚拟机中安装docker")]),s._v(" "),t("p",[s._v("参考 https://zhuanlan.zhihu.com/p/421998834")]),s._v(" "),t("p",[s._v("执行命令")]),s._v(" "),t("div",{staticClass:"language-s line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('# 切换到root账户操作\nsudo su root\n# 安装 Docker CE\n## 设置仓库\n### 安装软件包以允许 apt 通过 HTTPS 使用存储库\nsudo apt-get update && sudo apt-get install apt-transport-https ca-certificates curl software-properties-common -y\n### 新增 Docker 的 官方 GPG 秘钥\ncurl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -\n### 添加 Docker apt 仓库\nadd-apt-repository \\\n  "deb [arch=amd64] https://download.docker.com/linux/ubuntu \\\n  $(lsb_release -cs) \\\n  stable"\n\n## 安装 Docker CE\nsudo apt-get update && sudo apt-get install containerd.io   docker-ce   docker-ce-cli -y\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("p",[s._v("配置国内源")]),s._v(" "),t("div",{staticClass:"language-s line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("sudo mkdir /etc/docker\nsudo vim /etc/docker/daemon.json\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("写入")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"registry-mirrors"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://docker.mirrors.ustc.edu.cn/"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://hub-mirror.c.163.com/"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://reg-mirror.qiniu.com"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"exec-opts"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"native.cgroupdriver=systemd"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"log-driver"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"json-file"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"log-opts"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"max-size"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"100m"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"storage-driver"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"overlay2"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("按Esc后输入 "),t("code",[s._v(":wq")]),s._v(" 保存退出")]),s._v(" "),t("div",{staticClass:"language-s line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("# 启动\nservice docker start\n# 重启\nservice docker restart\n# 停止\nservice docker stop\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"安装mysql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装mysql"}},[s._v("#")]),s._v(" 安装mysql")]),s._v(" "),t("p",[s._v("参考 https://my.oschina.net/jeecg/blog/4283700")]),s._v(" "),t("div",{staticClass:"language-s line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("docker pull mysql:5.7\n#启动容器\ndocker run -p 3306:3306 --name mysql5732 -e MYSQL_ROOT_PASSWORD=needChangeNewPassword -d mysql:5.7.32 --privileged\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("这里报错，因为systemd的启动问题，微软最新的文章说已经可以解决，但是要在几周内才能推送给所有用户，暂时停滞等待更新。")]),s._v(" "),t("p",[s._v("https://devblogs.microsoft.com/commandline/systemd-support-is-now-available-in-wsl/")])])}),[],!1,null,null,null);t.default=n.exports}}]);