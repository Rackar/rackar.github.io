# vuepress 踩坑指南

## 官网和文档

[官网链接](https://v1.vuepress.vuejs.org/zh/guide/)

## 基本介绍

参考 nuxt 的静态文档系统，通过一定*号称简单*的配置之后，为每一个 md 文件生成静态 html 脚本，并通过主题挂接起来。
用来写文档是非常不错的。写博客就要做一点工作，踩**一点**坑。

## 问题

#### 注意 yaml

必须放在 md 文件在最上方才能生效

#### 无法热更新

修改 config.js 后，是没办法热更新的，只能 ctrl+c 结束任务然后重新 yarn docs:dev

#### 想要自动发现新 md 文件并加入侧边栏索引列表？

BLOG 的最基本功能，需要加一点 node 的脚本来更新 sidebar:[]的配置。
放在了 utils/getFilenames.js 了。
脚本运行时会查找/article_child/等 3 个文件夹下的所有目录和文件，将名称列表置入.vuepress/config/sidebar.json。
之后重新 yarn docs:dev，列表更新

#### 百度统计代码

加入了
"vuepress-plugin-baidu-autopush"
"vuepress-plugin-baidu-tongji"
两个包，统计功能虽然正常，但是首页检测代码失败。所以增加了一个 utils/db_hm.js 脚本，在 build 之后手动复制统计代码到首页。
