---
title: 以太坊开发
date: 2020-10-16
tags:
  - JavaScript
categories:
  - 技术
publish: false
---

## geth

[geth 帮助及参数](https://learnblockchain.cn/2017/11/29/geth_cmd_options/)

```shell
D:
cd ./"Program Files"/Geth
./geth.exe --datadir testNet --dev console 2>> test.log
```

--dev 启用开发者网络（模式），开发者网络会使用 POA 共识，默认预分配一个开发者账户并且会自动开启挖矿。  
--datadir 后面的参数是区块数据及秘钥存放目录。
第一次输入命令后，它会放在当前目录下新建一个 testNet 目录来存放数据。  
console 进入控制台  
2>> test.log 表示把控制台日志输出到 test.log 文件

eth.sendTransaction({from: '0x3ca6b7b0ec73751f064a18af8c5a8f301c0d914d', to: '0xf90a7597dff193560d515584e2215bda08274b88', value: web3.toWei(10000, "ether")})
