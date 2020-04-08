---
title: Codingyang Blog 静态文章站
date: 2019-11-01
tags:
  - Vue.js
categories:
  - 技术
---

## 更新

站点更换为 vuepress-theme-reco 主题。自动分类和标签聚合，以及分页和评论。

有些注意事项：

1. 不使用一级标题，使用 yaml 来编辑元数据。日期中要注意前面补齐 0。

```yaml
---
title: Node 爬虫编写
date: 2019-05-18
tags:
  - Node.js
categories:
  - 技术
---

```

2. 评论使用 Valine

3. 编译结果在`/public/`，而非`docs/.vuepress/dist`

4. Github Action 脚本可用，只要 push blog 分支，自动将生成静态文件文件写入 master 分支，Page 直接访问。同时支持使用 scp 静态复制文件到服务器。

## 相关命令

没有安装 yarn 的，把以下命令中的 yarn 替换为 npm run

```bash
# 安装依赖
yarn install

# 本地启动
yarn dev

# 编译
yarn build

# 编译为非根目录站点 （还需修改package.json中的script中的参数）
yarn buildSubpath

# 自动上传静态部署文件
yarn autopush
```

## 其他说明

使用 vuepress 创建 SEO 友好的静态文章站。一键发布到 github page，内置 github action 自动部署脚本。

vuepress 通过一定*号称简单*的配置之后，为每一个 md 文件生成静态 html 脚本，并通过主题挂接起来。用来写文档是非常不错的。写文章就要做一点工作，踩**一点**坑。

[demo 演示](http://www.codingyang.com/)

[github 源码](https://github.com/Rackar/rackar.github.io)

#### 注意 yaml

必须放在 md 文件在最上方才能生效

#### 无法热更新

修改 config.js 后，是没办法热更新的，只能 ctrl+c 结束任务然后重新 yarn dev

#### 百度统计代码

增加了一个 utils/db_hm.js 脚本，在 build 之后手动复制统计代码到首页 index.html 中。请自行从百度申请统计和推送链接代码。

#### 使用 Github Aciton 自动发布到 Github Page

开启项目 action。

开启 page。并使用 master 分支为 Page 源地址。

设置 secret。在[Settings-tTokens](https://github.com/settings/tokens)里选择第一项 repo 生成 token，复制 token 到项目 Settings-Secrets 下新建的`ACCESS_TOKEN`中

然后 git push 就好，CI 脚本自动发布。

如果要发布到**非根目录**。要 修改 package.json 中 `buildSubpath` 命令里的两处： `VUEPRESS_BASE=/codingyang/` 中的 `codingyang` 替换为自己要部署的子目录名。然后修改 Action 脚本 `nodejs.yml` 中最后一行脚本中的 `npm run build` 为 `npm run buildSubpath` 。

## 相关技术

[vuepress](https://v1.vuepress.vuejs.org/zh/guide/)

[主题文档](https://vuepress-theme-reco.recoluan.com/)
