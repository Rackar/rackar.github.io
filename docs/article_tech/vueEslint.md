---
title: Vue 自动 lint 格式化
date: 2019-12-13
tags:
  - 工具
categories:
  - 技术
---

VS code 中装了插件 prettier，vue/cli 运行时会 lint，vs code 中的自动 format 格式和 yarn lint 的警告及自动 fix 又不一致。简直搞得崩溃。彻底找一下原因和解决方案。

## 新版方法更新

2020-01-17 又碰到这个问题了，再来尝试一遍。VS Code 版本 1.41.1。

清除掉 VS Code 用户设置 `setting.json` 中有关 format 和 prettier 和 eslint 的设置，写入如下设置文件：

```js
    // 是否开启eslint检测
    "eslint.enable": true,

    // eslint配置文件
    "eslint.options": {
        "extensions": [
            ".js",
            ".vue",
            ".html"
        ]
    },
    // eslint能够识别的文件后缀类型
    "eslint.validate": [
        "javascript",
        "html",
        "vue"
    ],
    // 文件保存时是否根据eslint进行格式化
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    //默认格式化使用prettier插件，并排除这三种格式
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true,
    "prettier.disableLanguages": [
        "vue",
        "javascript",
        "html"
    ],
```

这下`.eslintrc.js`中的规则可以自动生效并格式化了。其他语言使用 prettier。

给一个我用到的规则示例：

```js
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/strongly-recommended", "@vue/standard"],
  rules: {
    "no-console": "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "generator-star-spacing": "off",
    "no-mixed-operators": 0,
    "vue/max-attributes-per-line": [
      2,
      {
        singleline: 5,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ],
    "vue/attribute-hyphenation": 0,
    "vue/html-self-closing": 0,
    "vue/component-name-in-template-casing": 0,
    "vue/html-closing-bracket-spacing": 0,
    "vue/singleline-html-element-content-newline": 0,
    "vue/no-unused-components": 0,
    "vue/multiline-html-element-content-newline": 0,
    "vue/no-use-v-if-with-v-for": 0,
    "vue/html-closing-bracket-newline": 0,
    "vue/no-parsing-error": 0,
    "no-tabs": 0,
    quotes: [
      2,
      "single",
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    semi: [
      2,
      "never",
      {
        beforeStatementContinuationChars: "never"
      }
    ],
    "no-delete-var": 2,
    "prefer-const": [
      2,
      {
        ignoreReadBeforeAssign: false
      }
    ]
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)"
      ],
      env: {
        jest: true
      }
    }
  ]
};
```

## 旧版

### 项目设置

干脆重装@vue/cli（4.0.5），整个使用推荐插件和配置，看看到底是冲突在哪里。
`vue create demo`

这里选择几乎所有插件。空格打钩，回车确认

```
> Manually select features

? Check the features needed for your project:
 (*) Babel
 (*) TypeScript
 ( ) Progressive Web App (PWA) Support
 (*) Router
 (*) Vuex
 (*) CSS Pre-processors
 (*) Linter / Formatter
>(*) Unit Testing
 ( ) E2E Testing

 ? Use class-style component syntax? (Y/n) y

 ? Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? (Y/n) y

 ? Use history mode for router? (Requires proper server setup for index fallback in production) (Y/n) n

 ? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default):
  Sass/SCSS (with dart-sass)
> Sass/SCSS (with node-sass)
  Less
  Stylus

 ? Pick a linter / formatter config:
  ESLint with error prevention only
  ESLint + Airbnb config
  ESLint + Standard config
> ESLint + Prettier
  TSLint (deprecated)

  ? Pick additional lint features:
 (*) Lint on save
>(*) Lint and fix on commit

? Pick a unit testing solution:
  Mocha + Chai
> Jest

? Where do you prefer placing config for Babel, PostCSS, ESLint, etc.? (Use arrow keys)
> In dedicated config files
  In package.json

? Save this as a preset for future projects? (y/N) n
```

### 安装之后的 Package.json

```json
"devDependencies": {
    "@types/jest": "^24.0.11",
    "@vue/cli-plugin-babel": "^4.0.0",
    "@vue/cli-plugin-eslint": "^4.0.0",
    "@vue/cli-plugin-router": "^4.0.0",
    "@vue/cli-plugin-typescript": "^4.0.0",
    "@vue/cli-plugin-unit-jest": "^4.0.0",
    "@vue/cli-plugin-vuex": "^4.0.0",
    "@vue/cli-service": "^4.0.0",
    "@vue/eslint-config-prettier": "^5.0.0",
    "@vue/eslint-config-typescript": "^4.0.0",
    "@vue/test-utils": "1.0.0-beta.29",
    "eslint": "^5.16.0",
    "eslint-plugin-prettier": "^3.1.1",
    "eslint-plugin-vue": "^5.0.0",
    "node-sass": "^4.12.0",
    "prettier": "^1.18.2",
    "sass-loader": "^8.0.0",
    "typescript": "~3.5.3",
    "vue-template-compiler": "^2.6.10"
  }
```

这么多 eslint 和 prettier 相关的，我已晕，只能保佑后面顺利了。

### Prettier 设置

根目录下添加文件 `.prettierrc.json`

```json
{
  "printWidth": 80,
  "singleQuote": false,
  "bracketSpacing": true,
  "jsxBracketSameLine": true,
  "htmlWhitespaceSensitivity": "ignore"
}
```

### eslint 设置

根目录下添加文件 `.eslintrc.js`

注释的部分是重点，要和上面保持一致

```js {10-21}
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier", "@vue/typescript"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "prettier/prettier": [
      "error",
      // 如果插件配置中修改了相关选项，
      // 则必须在此添加相对应的自定义规则否则就会出现编辑器格式化后ESlint检查无法通过的情况。
      {
        printWidth: 80,
        singleQuote: false,
        bracketSpacing: true,
        jsxBracketSameLine: true,
        htmlWhitespaceSensitivity: "ignore"
      }
    ]
  },
  parserOptions: {
    parser: "@typescript-eslint/parser"
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)"
      ],
      env: {
        jest: true
      }
    }
  ]
};
```

### vs code 设置

在 vs code 首选项-设置中，查找 prettier。
将这几项设置和上面的配置一样

```js
printWidth: 80,
singleQuote: false,
bracketSpacing: true,
jsxBracketSameLine: true,
```

然后将 formatOnSave 打钩开启。

Editor: Default Formatter 改为 esbenp.prettier-vscode

### 测试

关掉 serve 重新启动，乱改代码格式然后保存之后 commit，之后运行 yarn lint。看看是否还有冲突互改格式的问题。我到这里居然就好了，祝愿你们也没问题。。
