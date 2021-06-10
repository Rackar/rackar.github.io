---
title: Github Actions用私钥进行SCP部署
date: 2020-05-13
tags:
  - Linux
categories:
  - 技术
# publish: false
---

使用 putty 生成的私钥进行 SCP 部署时遇到了问题，折腾了半天发现是格式问题。记录一下。

<!-- more -->

为了方便 Putty 登录 Linux 服务器方便，使用 puttygen.exe 使用图形界面的方式保存了公钥和私钥。将公钥放到服务器上，私钥在存在本机，然后登录时在 Auth 部分写入地址，即可实现无密码登录。

```sh
cd /root/.ssh
vi ./authorized_keys
# 粘贴公钥进去，然后保存退出
:wq
```

结果最近想使用 Github Action 进行网站自动部署，除了部署在 Github Pages 之外，还将编译后的成果使用 SCP 方式上传到服务器静态目录一份。本来是很简单的一个操作，但是由于没有服务器密码，只能使用私钥认证来进行 SCP，结果就遭遇了错误。

使用的脚本地址是这个:https://github.com/garygrossgarten/github-action-scp

其中涉及到要用的 host, username 都以 secrets 变量的形式保存在:

`https://github.com/用户名/项目地址/settings/secrets`

将上面链接中的用户名和项目地址替换为自己的。然后就可以在 actions 脚本中以

```js
${{secrets.HOST}}
```

这种方式调用。

脚本这里提示 privateKey 要使用（OpenSSH format）就把我弄蒙了。

先测了一下 putty 存出来的私钥，以文本的形式拷贝到 secrests 中，失败；又手工按其他格式编辑了下，还是失败。

![1589353202334-20205131502.png](http://img.codingyang.com/1589353202334-20205131502.png)

提示更让我叫惨，总不是让我传私钥文件上去然后附路径吧，又会引发一次泄露惨案。

最后抱着试试看的心态再用 ssh-keygen 生成一份密钥对看看。

生成以后登录就给了一个下马威：

![1589353432344-202051315352.png](http://img.codingyang.com/1589353432344-202051315352.png)

格式太老，不给登录用。

但是谁曾想，这个破格式反而在 action 上成功了。

![1589353534360-202051315535.png](http://img.codingyang.com/1589353534360-202051315535.png)

简直叫人崩溃。所以现在两组密钥同时用上了，一组登录一组部署。

下面是我的部署脚本，供参考。

脚本于2021年6月10日更新，主要是 `JamesIves/github-pages-deploy-actio` 这个脚本升级了破坏性更新，现在指定了具体版本号。

```yml
name: Node CI

on: [push]

jobs:
  build:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [10.x]

    steps:
      - name: Checkout 🛎️
        uses: actions/checkout@v2.3.1
      - name: Install and Build 🔧 # This example project is built using npm and outputs the result to the 'build' folder. Replace with the commands required to build your project, or remove this step entirely if your site is pre-built.
        run: |
          npm install
          npm run build
      - name: Build and Deploy
        uses: JamesIves/github-pages-deploy-action@4.1.4
        with:
          BRANCH: master # The branch the action should deploy to.
          FOLDER: public # The folder the action should deploy.
        env:
          ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }}
          BASE_BRANCH: blog # The branch the action should deploy from.
      - name: Move index.html
        run: sudo mv public/index.html public/temp.html
      - name: DeployToMain
        uses: garygrossgarten/github-action-scp@release
        with:
          local: public
          remote: /root/myapp/www/
          # 涉及偏安全隐私的信息，不要明文暴露在此文件中，因为repo很可能是公开的，会被所有人看见
          # ${{ ... }} 会应用你在对应项目设置中，配置的对应serets的键值信息，从而保护私密信息不被看到
          host: ${{ secrets.HOST }}
          port: ${{secrets.PORT}}
          username: ${{ secrets.USER }}
          privateKey: ${{ secrets.PEM }}
          # concurrency: 20
      - name: upload index.html
        uses: garygrossgarten/github-action-scp@release
        with:
          local: public/temp.html
          remote: /root/myapp/www/index.html
          host: ${{ secrets.HOST }}
          port: ${{secrets.PORT}}
          username: ${{ secrets.USER }}
          privateKey: ${{ secrets.PEM }}
```
