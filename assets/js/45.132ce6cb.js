(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{522:function(t,s,a){"use strict";a.r(s);var e=a(4),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"起步操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#起步操作"}},[t._v("#")]),t._v(" 起步操作")]),t._v(" "),a("h3",{attrs:{id:"基本介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本介绍"}},[t._v("#")]),t._v(" 基本介绍")]),t._v(" "),a("p",[t._v("通过建立个人分支，拉取代码，提交代码，推送代码来保持本地库和远程库更新，同时具有代码各版本留存和回溯，并可多人协作。")]),t._v(" "),a("h3",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("p",[t._v("Windows 下载一路安装：\nhttps://github.com/git-for-windows/git/releases/download/v2.21.0.windows.1/Git-2.21.0-64-bit.exe")]),t._v(" "),a("h3",{attrs:{id:"添加用户信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加用户信息"}},[t._v("#")]),t._v(" 添加用户信息")]),t._v(" "),a("p",[t._v('如果新安装的 git，需要添加本地库用户名和邮箱标识，下面两行改为自己的名称和邮箱，在命令行执行：\ngit config --global user.name "Your Name"\ngit config --global user.email "you@example.com"')]),t._v(" "),a("h3",{attrs:{id:"基本命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本命令"}},[t._v("#")]),t._v(" 基本命令")]),t._v(" "),a("p",[t._v("git clone http://xxxxx.git //克隆（复制）远程代码到本地")]),t._v(" "),a("p",[t._v("git pull //将远程库的更新内容拉取到本地")]),t._v(" "),a("p",[t._v('git commit -m "备注" //将暂存的更改提交到本地库，vs code 中只需在源码控制页添加备注然后 control+回车 即可实现本行命令。经常 commit 相当于保存了多个版本记录，可随时回退到任何提交时间点的代码。')]),t._v(" "),a("p",[t._v("git push //将本地提交后的新内容推送到远程")]),t._v(" "),a("p",[t._v("git branch -a 查看分支和当前分支 （*为当前）")]),t._v(" "),a("p",[t._v("git checkout fenzhi 切换到 fenzhi 分支（文件和代码同时会变化过去，加-b 参数是复制并新建分支）")]),t._v(" "),a("p",[t._v("git merge fenzhi 将 fenzhi 分支上的代码合并回当前分支。")]),t._v(" "),a("p",[a("strong",[t._v("分支")]),t._v("的概念就像是备份了一份主线从此另开了一条道路，可以在不同的分支上做不同的事，不影响主线。当分支的的操作结束时，可以很轻松的将差异合并回主线。各分支之间的切换非常之快，硬盘上的文件会瞬间写回。")]),t._v(" "),a("h3",{attrs:{id:"新建本人所属分支并推送到远程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新建本人所属分支并推送到远程"}},[t._v("#")]),t._v(" 新建本人所属分支并推送到远程")]),t._v(" "),a("p",[t._v("git checkout -b xinde //以当前分支的内容复制到新分支 xinde,并切换分支到 xinde")]),t._v(" "),a("p",[t._v("git push origin xinde:xinde //将新的分支推送到远程库中 xinde 分支")]),t._v(" "),a("p",[t._v("git push --set-upstream origin xinde //设置远程库与 xinde 分支的关联")]),t._v(" "),a("h3",{attrs:{id:"拉取本地不存在的远程分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拉取本地不存在的远程分支"}},[t._v("#")]),t._v(" 拉取本地不存在的远程分支")]),t._v(" "),a("p",[t._v("git checkout -b 本地分支名称 origin/远程分支名称")]),t._v(" "),a("h3",{attrs:{id:"更换远程仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更换远程仓库"}},[t._v("#")]),t._v(" 更换远程仓库")]),t._v(" "),a("p",[t._v("将原来的 origin 仓库变更为新的：\ngit remote set-url origin https://git.dev.tencent.com/rackar/XXXXXXXXXXXXXX.git")]),t._v(" "),a("p",[t._v("也可以使用双远程仓库：\ngit remote add origin2 https://git.dev.tencent.com/rackar/XXXXXXXXXXXXXX.git")]),t._v(" "),a("p",[t._v("这里的 origin 其实就是远程库别名，比如设定 Github 和 Gitee 分别为远程库，方便区分国际版本和国内版本的时候，就可以推送不同的分支到不同的远程仓库。")]),t._v(" "),a("h2",{attrs:{id:"git-rebase-使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-rebase-使用"}},[t._v("#")]),t._v(" git rebase 使用")]),t._v(" "),a("h3",{attrs:{id:"目的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目的"}},[t._v("#")]),t._v(" 目的")]),t._v(" "),a("p",[t._v("在 push 之前通过 rebase 将本地库中多次 commit 合并为一次 commit，保持远程库清爽。")]),t._v(" "),a("h3",{attrs:{id:"命令行工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令行工具"}},[t._v("#")]),t._v(" 命令行工具")]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",[t._v("git log 和 git rebase 命令在 cmd 和 powershell 下都有问题。\n所以在 Windows 中运行时，终端改为 git bash 或者 wsl")])]),t._v(" "),a("h3",{attrs:{id:"步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤"}},[t._v("#")]),t._v(" 步骤")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("查看 commit 记录")]),t._v(" "),a("p",[a("code",[t._v("git log --oneline")]),t._v("\n查看各次 commit 信息，回车继续显示，:q 中断退出。\n发现有 3 次零散 commit，准备 rebase 为一个 commit")])]),t._v(" "),a("li",[a("p",[t._v("编辑 rebase")]),t._v(" "),a("p",[a("code",[t._v("git rebase -i HEAD~3")]),t._v("\n会进入交互编辑界面，需要按各种快捷键操作（^为 ctrl，M 为 alt）\n3 次的 pick，将其中后两次 pick 单次改为字母 s\nctrl+o 保存，回车默认文件名，ctrl+x 退出。")])]),t._v(" "),a("li",[a("p",[t._v("编辑合并后的 commit 信息")]),t._v(" "),a("p",[t._v("之后进入 commit 信息编辑栏，非#注释掉的行即为你的 commit -m 信息，适当删减合并。\n然后 ctrl+o 保存，回车默认文件名，ctrl+x 退出。")])])]),t._v(" "),a("h2",{attrs:{id:"git-flow-工作流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-flow-工作流"}},[t._v("#")]),t._v(" Git Flow 工作流")]),t._v(" "),a("p",[t._v("以开源前端项目 dao 为例：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("克隆本项目的 dev 分支:")]),t._v(" "),a("p",[a("code",[t._v("git clone -b dev https://github.com/Rackar/dao-quasar")])])]),t._v(" "),a("li",[a("p",[t._v("fork 一份，添加自己 fork 库的远程地址，更改 Your_ID 为自己的 Github ID:")]),t._v(" "),a("p",[a("code",[t._v("git remote add myrepo https://github.com/Your_ID/dao-quasar")])])]),t._v(" "),a("li",[a("p",[t._v("从主 dev 分支拉取最新代码并新建自己的本地工作分支:")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 确定在dev分支上操作")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout dev\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b myjob\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("在 myjob 分支下进行代码编写，结束本日工作时，拉取最近主分支更改，进行冲突处理，然后推送 fork 库:")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -A\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"修改了xxx，添加了xxx"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull origin dev:dev\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" merge dev\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 处理冲突，然后再进行commit")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push myrepo myjob:myjob\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("然后到"),a("a",{attrs:{href:"https://github.com/Rackar/dao-quasar",target:"_blank",rel:"noopener noreferrer"}},[t._v("项目页面"),a("OutboundLink")],1),t._v("提交 PR 请求，从你 fork 的库的 myjob 分支到主库的 dev 分支。"),a("br"),t._v("\n然后可以在 myjob 分支下继续开发。"),a("br"),t._v("\n等待 Code review 完成并合并后，重复第 3 步-第 5 步，保持 myjob 和 dev 分支同步，尤其是"),a("strong",[t._v("提交 PR 前")]),t._v("必须同步。")])]),t._v(" "),a("li",[a("p",[t._v("负责 code review 时，可以将新的添加代码拉取到本地合并，测试无问题后再 merge")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://help.github.com/cn/github/collaborating-with-issues-and-pull-requests/checking-out-pull-requests-locally",target:"_blank",rel:"noopener noreferrer"}},[t._v("git 官方文档"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" fetch origin pull/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("ID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("/MERGE:tempMerge\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout tempMerge\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])])])])}),[],!1,null,null,null);s.default=r.exports}}]);