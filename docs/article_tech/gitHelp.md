---
title: git 基础教程
date: 2020-01-03
tags:
  - 工具
categories:
  - 技术
---

## 起步操作

### 基本介绍

通过建立个人分支，拉取代码，提交代码，推送代码来保持本地库和远程库更新，同时具有代码各版本留存和回溯，并可多人协作。

### 安装

Windows 下载一路安装：
https://github.com/git-for-windows/git/releases/download/v2.21.0.windows.1/Git-2.21.0-64-bit.exe

### 添加用户信息

如果新安装的 git，需要添加本地库用户名和邮箱标识，下面两行改为自己的名称和邮箱，在命令行执行：
git config --global user.name "Your Name"
git config --global user.email "you@example.com"

### 基本命令

git clone http://xxxxx.git //克隆（复制）远程代码到本地

git pull //将远程库的更新内容拉取到本地

git commit -m "备注" //将暂存的更改提交到本地库，vs code 中只需在源码控制页添加备注然后 control+回车 即可实现本行命令。经常 commit 相当于保存了多个版本记录，可随时回退到任何提交时间点的代码。

git push //将本地提交后的新内容推送到远程

git branch -a 查看分支和当前分支 （\*为当前）

git checkout fenzhi 切换到 fenzhi 分支（文件和代码同时会变化过去，加-b 参数是复制并新建分支）

git merge fenzhi 将 fenzhi 分支上的代码合并回当前分支。

**分支**的概念就像是备份了一份主线从此另开了一条道路，可以在不同的分支上做不同的事，不影响主线。当分支的的操作结束时，可以很轻松的将差异合并回主线。各分支之间的切换非常之快，硬盘上的文件会瞬间写回。

### 新建本人所属分支并推送到远程

git checkout -b xinde //以当前分支的内容复制到新分支 xinde,并切换分支到 xinde

git push origin xinde:xinde //将新的分支推送到远程库中 xinde 分支

git push --set-upstream origin xinde //设置远程库与 xinde 分支的关联

### 拉取本地不存在的远程分支

git checkout -b 本地分支名称 origin/远程分支名称

### 更换远程仓库

将原来的 origin 仓库变更为新的：
git remote set-url origin https://git.dev.tencent.com/rackar/XXXXXXXXXXXXXX.git

也可以使用双远程仓库：
git remote add origin2 https://git.dev.tencent.com/rackar/XXXXXXXXXXXXXX.git

这里的origin其实就是远程库别名，比如设定Github和Gitee分别为远程库，方便区分国际版本和国内版本的时候，就可以推送不同的分支到不同的远程仓库。

## git rebase 使用

### 目的

在 push 之前通过 rebase 将本地库中多次 commit 合并为一次 commit，保持远程库清爽。

### 命令行工具

::: danger
git log 和 git rebase 命令在 cmd 和 powershell 下都有问题。
所以在 Windows 中运行时，终端改为 git bash 或者 wsl
:::

### 步骤

1. 查看 commit 记录

   `git log --oneline`
   查看各次 commit 信息，回车继续显示，:q 中断退出。
   发现有 3 次零散 commit，准备 rebase 为一个 commit

2. 编辑 rebase

   `git rebase -i HEAD~3`
   会进入交互编辑界面，需要按各种快捷键操作（^为 ctrl，M 为 alt）
   3 次的 pick，将其中后两次 pick 单次改为字母 s
   ctrl+o 保存，回车默认文件名，ctrl+x 退出。

3. 编辑合并后的 commit 信息

   之后进入 commit 信息编辑栏，非#注释掉的行即为你的 commit -m 信息，适当删减合并。
   然后 ctrl+o 保存，回车默认文件名，ctrl+x 退出。
