---
title: Vue3 项目模板
date: 2021-11-16
tags:
  - Vue.js
categories:
  - 技术
publish: true
---

每次从零构建都缺这缺那，记录一次比较完整可用的配置。

<!-- more -->

按照本文完成的项目模板，可直接clone使用：

https://github.com/Rackar/vue3-vite-starter

## 命令

使用yarn和vite

```sh
yarn create vite starter --template vue
cd starter
yarn install

# Eslint自动化检查和格式化(需安装Eslint VS Code 插件)
yarn add -D eslint eslint-plugin-prettier eslint-plugin-vue @vue/eslint-config-prettier prettier

# 选装相关工具
yarn add vue-router@4 axios

# tailwind
yarn add tailwindcss
npx tailwindcss init
yarn add --dev postcss autoprefixer

cat>postcss.config.js<<EOF
module.exports = {
    plugins: [
        require('tailwindcss')(),
        require('autoprefixer')(),
    ]
}
EOF

cat>src/assets/tailwindcss.css<<EOF
@tailwind base;
@tailwind components;
@tailwind utilities;
EOF


# 第三行插入引用
sed -i "3iimport './assets/tailwindcss.css'" src/main.js


## 加入css生产摇树优化
sed -i "2c purge: ['src/**/*.vue']," tailwind.config.js

# 添加Eslint配置

touch .eslintrc.js
```
复制：
```js
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/prettier'],

  parser: 'vue-eslint-parser',
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    //if后必须加花括号
    curly: 1,
    //禁止条件表达式中出现赋值操作符
    'no-cond-assign': 1,
    //箭头函数括号适时省略
    'arrow-parens': [1, 'as-needed'],
    //不允许var，用let const代替
    'no-var': 1,
    // 未定义直接用
    'no-undef': 1,
    // 能用const时不用let

    'prefer-const': 1,
    // 每个变量定义需要单独行
    'one-var': [1, 'never'],

    // 不允许定义未使用
    'no-unused-vars': 1,
    //对象属性使用点而不是方括号
    // 'dot-notation': 1,

    // 屏蔽无必要的字符串相加
    'no-useless-concat': 'warn',

    // 字符串使用字面量而不是加号连接
    'prefer-template': 'warn',

    // 不允许空函数体
    'no-empty': 'warn',

    // 块末插入空行
    'padding-line-between-statements': [
      'warn',
      { blankLine: 'always', prev: 'block-like', next: '*' },
    ],

    //尽量使用对象简写
    'object-shorthand': ['warn', 'always', { ignoreConstructors: true }],

    // 回调函数必须使用箭头函数
    'prefer-arrow-callback': 'warn',

    // 尽量使用对象解构赋值
    'prefer-destructuring': [
      'warn',
      {
        object: true,
      },
      {
        enforceForRenamedProperties: false,
      },
    ],

    //禁止在循环中声明函数
    'no-loop-func': 'warn',

    //禁止循环中出现await。应使用await Promise.all(results)将promise集合并行处理
    'no-await-in-loop': 'warn',

    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        trailingComma: 'es5',
        bracketSpacing: true,
        jsxBracketSameLine: true,
        semi: true,
        endOfLine: 'auto',
        printWidth: 80,
        arrowParens: 'avoid',
      },
    ],
  },
  globals: {
    _: true,
  },
};
```