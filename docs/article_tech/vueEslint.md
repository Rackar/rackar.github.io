---
title: Vue 自动 lint 和格式化
date: 2021-05-28
tags:
  - 工具
categories:
  - 技术
---

VS code 中装了插件 prettier，vue/cli 运行时会 lint，vs code 中的自动 format 格式和 yarn lint 的警告及自动 fix 又不一致。简直搞得崩溃。彻底找一下原因和解决方案。

## 新版方法更新

2021-05-28 又碰到这个问题了，Prettier的配置不生效。再来彻底解决一次。

### 1.使用vue/cli创建新项目模板

使用vue create project 新建项目，选择 Manually select features 打钩 linter / formatter - eslint + prettier - lint on save - In dedicated config files.

最后一项是将配置文件独立保存，否则都会写入package.json.

如此创建的项目会安装如下开发库，请忽略版本号：

```json
"devDependencies": {
    "@vue/cli-plugin-babel": "~4.5.0",
    "@vue/cli-plugin-eslint": "~4.5.0",
    "@vue/cli-plugin-router": "~4.5.0",
    "@vue/cli-plugin-vuex": "~4.5.0",
    "@vue/cli-service": "~4.5.0",
    "@vue/eslint-config-prettier": "^6.0.0",
    "babel-eslint": "^10.1.0",
    "eslint": "^6.7.2",
    "eslint-plugin-prettier": "^3.3.1",
    "eslint-plugin-vue": "^6.2.2",
    "prettier": "^2.2.1",
    "vue-template-compiler": "^2.6.11"
  }
```

eslint 的配置文件会生成在根目录下，名为".eslintrc.js"

```js
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};

```

可以看到相关的插件工具

### 2.配置VS code

VS code 首先安装插件：Prettier, Eslint, Vetur. 新版本如提示 Prettier 和 Eslint 要使用项目下的包时，点击 allow 允许。

VS code 用户设置会被项目设置覆盖，使用项目配置并使配置文件被git管理，统一本项目开发者的配置。

清除掉 VS Code 用户设置 `settings.json` 中有关 format 和 prettier 和 eslint 的设置，在项目根目录下新建 `.vscode/settings.json`

写入如下设置：

```js
   {
    // 窗口失去焦点自动保存
    "files.autoSave": "onFocusChange",
    // 编辑粘贴自动格式化
    "editor.formatOnPaste": true,

    // eslint设置
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        "html",
        "vue",
    ],

    //新版本保存自动eslint修复格式
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    }
}
```

### 3.配置 Prettier

使用Pretiier的配置文件，结果用尽各种姿势都不生效。终于找到一个解决方案，就是直接将格式化规则也写入`.eslintrc.js`

```js
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    'prettier/prettier': [
      'warn',
      {
        singleQuote: false,
        semi: false,
        trailingComma: 'none'
      }
    ]
  },
};

```

通过添加'prettier/prettier'这部分，Prettier的规则也可以生效了，保存时自动修复格式和eslint错误。
