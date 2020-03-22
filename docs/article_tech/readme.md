---
title: Codingyang Blog 静态博客
date: 2019-11-1
tags:
  - vuepress
categories:
  - 技术
---

## 更新

2020 年 3 月 22 日更新。已更换静态博客主题为[reco](https://vuepress-theme-reco.recoluan.com/)

以下方式和文档不再进行维护。

## Intro 介绍

Use vuepress build static personal Blog.

Just create or edit \*.md markdown document,

quickly build it to static html site with good SEO.

使用 vuepress 创建 SEO 友好的静态博客站。一键发布到 github page，内置 github action 自动部署脚本。

vuepress 通过一定*号称简单*的配置之后，为每一个 md 文件生成静态 html 脚本，并通过主题挂接起来。
用来写文档是非常不错的。写博客就要做一点工作，踩**一点**坑。

[demo 演示](http://www.codingyang.com/)

[document 文档](http://www.codingyang.com/article_tech/)

[github 源码](https://github.com/Rackar/codingyang)

## 相关技术

[vuepress](https://v1.vuepress.vuejs.org/zh/guide/)

Github Aciton

## how to use 使用

1. 克隆项目后进入

`git clone https://github.com/Rackar/codingyang`

`cd codingyang`

2. 安装依赖并运行开发服务：

`yarn install` 或者 `npm i`

（没有安装 yarn 的，把以下命令中的 yarn 替换为 npm run:

```
yarn docs:dev
```

3. 编辑

编辑或新增\*.md，以及修改 docs/.vuepress/config.js 中的 nav 导航栏等信息。具体可查看上面的 vuepress 文档，重新运行`yarn docs:dev`并 ctrl+f5 刷新浏览器查看设置更改。

4. 打包

```
yarn docs:list
yarn docs:built
```

第一个命令将文章栏目下三个文件夹中的文件加入侧边栏（文章索引），
第二个打包为部署在根路径下的 index.html 文件和其他所有静态页面资源。

5. 利用自动持续集成发布到 github page

这里需要：开启项目 action，开启 page，设置 secret，修改脚本中的/codingyang/为自己的项目名。然后 git push 就好，CI 脚本自动发布。

6. 利用 scp2 自动上传 CentOS 服务器发布

如果需要发布到自己的服务器，利用 node 加 scp 直接把打包好的 dist 传到 linux 服务器上配置好 nginx 的路径。代码在/utils/scp，还要在该目录新建一个 secret.js 保存敏感的 ip 和登录信息。（已配置.gitignore，不会上传暴露）

## 小提示

#### 注意 yaml

必须放在 md 文件在最上方才能生效

#### 无法热更新

修改 config.js 后，是没办法热更新的，只能 ctrl+c 结束任务然后重新 yarn docs:dev

#### 想要自动发现新 md 文件并加入侧边栏索引列表？

BLOG 的最基本功能，需要加一点 node 的脚本来更新 sidebar:[]的配置。
放在了 utils/getFilenames.js 了。
脚本运行时会查找/article_child/等 3 个文件夹下的所有目录和文件，将名称列表置入.vuepress/config/sidebar.json。
之后重新 yarn docs:list，列表更新

#### 百度统计代码

加入了
"vuepress-plugin-baidu-autopush"
"vuepress-plugin-baidu-tongji"
两个包，统计功能虽然正常，但是首页检测代码失败。所以增加了一个 utils/db_hm.js 脚本，在 build 之后手动复制统计代码到首页。

#### 如何打包为部署到非根目录下

```
docs:build:gitpage
docs:push:gitpage
```

使用这两条命令，编译为 github page 或其他部署到非根目录下的 html。

要 **修改** package.json 中 docs:build:gitpage 命令里的： VUEPRESS_BASE=/codingyang/为自己要部署的子目录名，
其中 github page 即为项目名，发布方式为分支名 gh-pages 方式推送。
