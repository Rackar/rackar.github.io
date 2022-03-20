---
title: Electron 17踩坑记录
date: 2022-03-20
tags:
  - Vue.js
  - Electron
categories:
  - 技术
publish: true
---

断断续续学过几次Electron，没有正经写过一次DEMO，没想到准备用的时候各种玩不转，这么多坑，需要记录一下。

<!-- more -->


## 初始化配置

### 安装Electron v17

安装Electron都能成为一个大问题，要手动指定镜像地址来下载，不然各种报错
```
git clone https://github.com/electron/electron-quick-start
export ELECTRON_MIRROR=http://npm.taobao.org/mirrors/electron/
npm install -D electron
```

对了最近npm淘宝源换域名了，所以最好更换一下新镜像地址

`npm config set registry registry.npmmirror.com`
### 添加VS code调试node

因为在 ctrl+shift+I 的程序开发者界面中只能看到渲染进程(html)中输出的调试信息，为了调试node代码，需要加入调试配置：
```json
"configurations": [
    {
      "name": "Debug Main Process",
      "type": "node",
      "request": "launch",
      "cwd": "${workspaceFolder}",
      "runtimeExecutable": "${workspaceFolder}/node_modules/.bin/electron",
      "windows": {
        "runtimeExecutable": "${workspaceFolder}/node_modules/.bin/electron.cmd"
      },
      "args" : ["."],
      "outputCapture": "std"
    }
  ]
```

### （可选）渲染进程执行行内代码
在index.html中修改meta，为script-src增加'unsafe-inline'，来允许行间`<script>`标签内代码执行。也可以不开启本项，在`<script src="./renderer.js'>`中引用代码。

``` html
<meta http-equiv="Content-Security-Policy"
    content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'">
```

### 是否开启上下文隔离


参照官网的过程模型和上下文隔离： https://www.electronjs.org/docs/latest/tutorial/process-model

- 方法一：
默认开启上下文隔离，使用预加载模型向渲染进程的window暴露特定方法：
preload.js
```js
//暴露
const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('bridge', {
  openFolder: () => {
    ipcRenderer.send('openFolder')
  }
})
```
renderer.js
```js
//调用
document.getElementById('openFolder').onclick = function () {
  window.bridge.openFolder();
  console.log('openFolder sent');
}
```

main.js 
```js
//接收
ipcMain.on('openFolder', async () => {
  let res = await dialog.showOpenDialog({ properties: ['openDirectory', 'multiSelections'] })
  if (res.canceled) {
    return false
  } else {
    return res.filePaths
  }
})
```

- 方法二：不推荐的低安全度。在前端代码中使用require

修改main.js。开启node和关闭上下文隔离。

```js
webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true, // add
      contextIsolation: false, // add
    }
```

renderer.js
```js
const { ipcRenderer } = require('electron');

document.getElementById('openFolder').onclick = function () {
  ipcRenderer.send('openFolder');
  console.log('openFolder sent');
}
```

## 坑

### 选择文件对话框

为了调一个系统文件选择对话框，需要费劲心思找示例，各种旧版本代码没有能用的，后来发现就在官网文档里：
https://www.electronjs.org/docs/latest/tutorial/ipc#pattern-2-renderer-to-main-two-way


### Proxy对象无法作为IPC参数

Vue3的定义的对象是Proxy，直接传参会报"an object could not be cloned"，所以需要先转一下。比如

`JSON.parse(JSON.stringify(params))`


## 技巧

TS中给接口的参数定义可选值，即规定参数枚举。
单选：
```ts
justify: 'start' | 'end'
```

下面是多选值示例：

```ts
properties?: Array<'openFile' | 'openDirectory' | 'multiSelections' | 'showHiddenFiles' | 'createDirectory' | 'promptToCreate' | 'noResolveAliases' | 'treatPackageAsDirectory' | 'dontAddToRecent'>;
```