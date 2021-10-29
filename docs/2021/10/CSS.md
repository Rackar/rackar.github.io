---
title: 空间旅行-CSS响应式实战
date: 2021-10-28
tags:
  - CSS
categories:
  - 技术
publish: true
---

记录CSS响应式实战课的学习

<!-- more -->

## 前言
Scrimba发来一个免费的CSS响应式课程[空间旅行](https://scrimba.com/learn/spacetravel)，刚好这方面弱到不行，正好学习一下补个短板。

课程是全英文，但是视频课附带可缩放PPT和可编辑代码的高科技课第一见，虽然不知为啥PPT看不到图片。听不懂也硬跟着学，反正都有代码指示。

## 第一章 代码设计系统

已入门简介为主，对index.css中的也按模块功能分为以下几个区域：

- 自定义的全局变量

    定义好的变量通过var(--ff-sans-normal)的方式引用
    ```css
    :root {
        /* colors */
        --clr-dark: 230 35% 7%;
        --clr-light: 231 77% 90%;
        --clr-white: 0 0% 100%;
        
        /* font-sizes */
        --fs-900: 9.375rem;
        --fs-800: 6.25rem;
        --fs-700: 3.5rem;
        --fs-600: 2rem;
        --fs-500: 1.75rem;
        --fs-400: 1.125rem;
        --fs-300: 1rem;
        --fs-200: 0.875rem;
        
        /* font-families */
        --ff-serif: "Bellefair", serif;
        --ff-sans-cond: "Barlow Condensed", sans-serif;
        --ff-sans-normal: "Barlow", sans-serif;
    }
    ```

- 全局预设重置

    清除margin，设定盒子，加一些便利的预设。
    ```css

    /* Box sizing */
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    /* Reset margins */
    body,
    h1,
    h2,
    h3,
    h4,
    h5,
    p,
    figure,
    picture {
        margin: 0; 
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
        font-weight: 400;
    }

    /* set up the body */
    body {
        font-family: var(--ff-sans-normal);
        font-size: var(--fs-400);
        color: hsl( var(--clr-white) );
        background-color: hsl( var(--clr-dark) );
        line-height: 1.5;
        min-height: 100vh;
    }

    /* make images easier to work with */
    img,
    picutre {
        max-width: 100%;
        display: block;
    }

    /* make form elements easier to work with */
    input,
    button,
    textarea,
    select {
        font: inherit;
    }

    /* remove animations for people who've turned them off */
    @media (prefers-reduced-motion: reduce) {  
    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
    }
    }
    ```

- 工具类（原子类，通用类）
    将最常用的属性原子化，类似TailWindCSS和其他类似工具，直观方便省重复。
    ```css
    .flex {
        display: flex;
        gap: var(--gap, 1rem);
    }

    .grid {
        display: grid;
        gap: var(--gap, 1rem);
    }

    .flow > *:where(:not(:first-child)) {
        margin-top: var(--flow-space, 1rem);
    }

    .container {
        padding-inline: 2em;
        margin-inline: auto;
        max-width: 80rem;
    }

    .sr-only {
    position: absolute; 
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px; 
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap; /* added line */
    border: 0;
    }

    /* colors */

    .bg-dark { background-color: hsl( var(--clr-dark) );}
    .bg-accent { background-color: hsl( var(--clr-light) );}
    .bg-white { background-color: hsl( var(--clr-white) );}
    ```

- 组件类
    特定组件用原子不方面的，单独封装。

- 知识点备忘

    1. color: hsl( var(--clr-white) / .25); 这里.25为透明度。 1为不透明
    2. aspect-ratio: 1; 宽高比为1，正方形
    3. transition: opacity 500ms linear, transform 750ms ease-in-out; 对同一个修改生效（hover focus之类）
    4. var(--flow-space, 1rem) 可以通过添加第二个参数来给默认值。可以通过父级临时修改变量值
    5. display: grid;place-items: center; grid子元素居中。与justify-items不同点。
- 小工具

[可视化grid生成器](https://cssgrid-generator.netlify.app/)

## 最简两列自适应
两列并一列

```css
.container{
    width: 95%;
    display: grid;
    grid-gap: 40px;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: minmax(500px, auto);
}

@media screen and (max-width: 850px)
.container{
    grid-template-columns: 1fr;
}

```