# codingyang blog

## Intro 介绍

Use vuepress build static personal Blog.

Just create or edit \*.md markdown document,

quickly build it to static html site with good SEO.

使用 vuepress 创建静态博客站。

[demo 演示](http://www.codingyang.com/)

[document 文档](http://www.codingyang.com/article_tech/)

## how to use 使用

`git clone https://github.com/Rackar/codingyang`

`cd codingyang`

```
yarn install
yarn docs:dev
yarn docs:list
yarn docs:built
```

or

```
npm i
npm run docs:dev
npm run docs:list
npm run docs:built
```

## 如何直接发布到 github page

```
docs:build:gitpage
docs:push:gitpage
```

使用这两条命令，编译为 github page 或其他部署到非根目录下的 html。

要 **修改** package.json 中 docs:build:gitpage 命令里的： VUEPRESS_BASE=/codingyang/为自己要部署的子目录，
其中 github page 即为项目名，发布方式为分支名 gh-pages 方式推送。
