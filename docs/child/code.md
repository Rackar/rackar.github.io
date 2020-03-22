---
title: 儿童编程
date: 2020-02-01
tags:
  - 育娃软件
categories:
  - 儿童
---

## Scratch

Scratch 儿童编程

程序部署国内地址：https://scratch.codingyang.com

推荐一个国内社区，登录后有自动保存和分享，加载速度也比较快： https://www.scratch-cn.cn/

### 本地安装

开源代码地址：https://github.com/LLK/scratch-gui.git

```
git clone https://github.com/LLK/scratch-gui.git --depth=1
cd scratch-gui
npm install
npm start
```

加 depth 参数是因为 git 的历史记录中有大文件，所以下载太慢。

如果还是下载失败还要更改下 git 的全局配置中的网速和超时设置：

```
git config --global http.lowSpeedLimit 0

git config --global http.lowSpeedTime 99999
```

gui 版本还有以下问题：不能自动保存，角色和背景还是外网拉取速度很慢，标题栏无用按钮较多。

#### 首先隐藏无用按钮

`src\components\menu-bar\munu-bar.css`
给 class `.account-info-group .menu-bar-item` 加上 `display:none;`

menu-bar.jsx 530 行注释掉分享按钮

```js
this.props.showComingSoon
  ? []
  : // (
    //     <MenuBarItemTooltip id="share-button">
    //         <ShareButton className={styles.menuBarButton} />
    //     </MenuBarItemTooltip>
    // )
    [];
```

以及紧接着的下面的社交按钮：

```js
<MenuBarItemTooltip id="community-button">
  <CommunityButton className={styles.menuBarButton} />
</MenuBarItemTooltip>
```

修改 logo 的点击跳转在 render-gui.jsx 中

```js
const onClickLogo = () => {
  window.location = "https://scratch.mit.edu";
};
```

然后在 489 行增加一条提示说明：

```
<Divider className={classNames(styles.divider)} />
                    <div
                        className={classNames(styles.menuBarItem)}
                    >
                        制作完成后请点击文件→保存到电脑，以便下次上传使用。欢迎关注公众号 Rackar
                    </div>
```

图片 cdn 地址在：
`scratch-gui\src\containers\library-item.jsx`
中第 109 行。

```js
const iconURL = iconMd5
  ? `https://cdn.assets.scratch.mit.edu/internalapi/asset/${iconMd5}/get/`
  : this.props.iconRawURL;
```

通过 md5 文件名拼接 url 模板。

MD5 信息如角色和背景等数据信息是离线 json，分别在

`src\lib\libraries\sprites.json` 和同级目录下的其他 json

下一步抓取所有数据做国内存储，解决访问缓慢。

lib 下 save-project-to-server 和 project-fetcher-hoc 中设置 ProjectFetcherComponent.defaultProps

可以修改默认的请求地址。

## SWIFT

AppStore 下载 Swift playground 软件，6-7 岁儿童认识一点汉字和英文就可以开始尝试编程。

这里有一点[视频供参考](https://www.bilibili.com/video/av71915776/)。
