---
title: 区块链学习计划
date: 2021-10-28
tags:
  - 区块链
categories:
  - 技术
publish: false
---



<!-- more -->

## 计划

暂时不对外公开，不过应该对爬虫不隐形，有观众就随缘。


目标到2022年12月，依靠链上套利和投资，获利30万元左右。投入本金为2万元，亏损完即失败终止。

目标1：学习量化交易、套利和区块链交易知识，开启链上及交易所多个账号，写行情爬虫，试验套利脚本可行性。

目标2：参与白名单挖矿、打新等薅羊毛项目，摸清基本门路，进行1-2次尝试。

目标3：记录对热点行情的观察和分析，打点时间戳和K线状态。主要抓极端反弹行情进行抄底测试。

*其他信息点*

Solana 多签 。 NFT随机生成 。

## 语言与开发

技术方面

### Solidity

官方文档： https://docs.soliditylang.org/en/v0.8.9/

在线编译： https://remix.ethereum.org/

## 套利

需要套利知识，交易所账户，API，余额，脚本。

关键词：Crypto Arbitrage

参考文章：

[套利介绍1](https://www.sofi.com/learn/content/crypto-arbitrage/?__cf_chl_jschl_tk__=pmd_pwqzXQhDOyGd5yBBmnRVe8Ae.clDBKJKoco.49nFKCA-1635425384-0-gqNtZGzNAnujcnBszQi9)

[套利介绍2](https://coinmarketcap.com/alexandria/article/how-to-benefit-from-crypto-arbitrage?__cf_chl_jschl_tk__=pmd_b8z7WZhclwpwTT9caBV_rWTIq4fdodO2nJH9MmDS1YE-1635425389-0-gqNtZGzNAlCjcnBszQdR)

[Youtube: How to Code a Crypto Collectible: ERC-721 NFT Tutorial](https://www.youtube.com/watch?v=YPbgjPPC1d0)


[openzeppelin NFT 模板](https://github.com/OpenZeppelin/openzeppelin-contracts/tree/master/contracts/token)
主要方式：价差。快速锁定。

[跨链桥](https://zhuanlan.zhihu.com/p/383144405)

方式：

空间套利：跨交易所低处买，高处卖。（需时间，或都有预存资金）

非空间：价高处做空，价低处做多（等其他人搬平）。

三角：1-2 2-3 如果1-3的价格不平，则有套利空间。

去中心化套利：通过这种策略，交易者希望在Uniswap、Balancer 或 Curve等去中心化交易所 ( DEX )上执行套利交易。套利者可以买卖在这些不同平台上可能被低估或高估的集合数字资产。就像集中式加密货币交易所一样，这些活动最终会导致 DEX 之间的价格统一。

### 交易所和API

CCXT 库用于连接和交易全球的加密货币交易所和支付处理服务。 它提供对市场数据的快速访问，用于存储、分析、可视化、指标开发、算法交易、策略回测、机器人编程和相关软件工程。

当前功能列表：

支持许多加密货币交易所——更多即将推出
完全实现的公共和私有 API
用于交叉交易分析和套利的可选标准化数据
开箱即用的统一 API，极易集成
适用于 Node 10.4+、Python 3、PHP 5.4+ 和 Web 浏览器

https://github.com/ccxt/ccxt   
https://ccxt.readthedocs.io/en/latest/manual.html    
CCTX视频 https://www.youtube.com/watch?v=sj8g3gz0k24

https://www.coinbase.com/
https://developers.coinbase.com/


## 操作记录

时间 操作 币种 买入价 合计USD 理由
20211029123600 买入 ENJ 2.4464 695.25 facebook改名。微博消息提示关注mana, sand, enj。得到消息时mana日涨幅39%达1.127，sand19%达1.041, ENJ 5%。对照推理 可能还有10%以上涨幅。 测试仓位约20%， 现货。



## OKex 材料

API中文文档（不全）
https://www.okex.com/docs/zh

英文文档： 深度
https://www.okex.com/docs-v5/en/#rest-api-market-data-get-order-book