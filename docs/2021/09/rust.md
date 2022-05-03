---
title: Rust 与 WASM 入坑
date: 2021-09-18
tags:
  - Rust
  - WebAssembly
categories:
  - 技术
publish: true
---

中秋节不加班，这么有空，赶紧再掉坑学点东西吧。拿Rust 和 WebAssembly来上手。

<!-- more -->

## 参考教程

[掘金](https://juejin.cn/post/6844904081555718158)


```ps
cargo build
cargo run
cargo doc --open
println!
i32
f64
```

更换一个更牛的教程 [Rust语言圣经](https://course.rs/about-book.html)



记录下学习过程

```s
rustup update # 升级rustup版本
cargo build --release # 提高优化执行性能
```

可变变量申明
```rust
let mut x = 5;
x=6;
// 或者
let x =5;
let x =6;

let _y=5 //申明了不想用，加下划线去警告

```