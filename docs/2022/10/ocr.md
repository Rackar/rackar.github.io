---
title: 腾讯云OCR调用识别照片中的电话号码
date: 2022-10-12
tags:
  - OCR
categories:
  - 技术
publish: true
---

社区防疫用小工具，识别十人混采信息

<!-- more -->

## 问题
有疫情防控工作者需要从照片中识别手机号，求助批量工具。

准备写一个nodejs程序，批量读取照片，去找一个大厂的AI OCR接口，提取出想要的手机号。

看了互联网大厂的免费策略，腾讯云有每月1000条，阿里云每月200条，百度每月2000条的免费额度。

腾讯云的通用识别可以很好的满足。 文档 https://cloud.tencent.com/document/product/866/34681

这里折腾base64时遇到一个坑，从nodejs转出的base64 string没法渲染，以为有什么转换bug。但是实际使用正常，不管了。转换直接指定编码：

```js
const base64Image = original_data.toString('base64');
// 正则验证手机号
let reg = /^1(3[0-9]|4[01456879]|5[0-35-9]|6[2567]|7[0-8]|8[0-9]|9[0-35-9])\d{8}$/
```

## 完整代码
```js
// Depends on tencentcloud-sdk-nodejs version 4.0.3 or higher
const tencentcloud = require("tencentcloud-sdk-nodejs");
const fs = require('fs')

const OcrClient = tencentcloud.ocr.v20181119.Client;

// 实例化一个认证对象，入参需要传入腾讯云账户secretId，secretKey,此处还需注意密钥对的保密
// 密钥可前往https://console.cloud.tencent.com/cam/capi网站进行获取
const clientConfig = {
  credential: {
    secretId: "", 
    secretKey: "",
  },
  region: "ap-beijing",
  profile: {
    httpProfile: {
      endpoint: "ocr.tencentcloudapi.com",
    },
  },
};
const client = new OcrClient(clientConfig);


let fileName = 'E:/ocr1.jpg'

fs.readFile(fileName, function (err, original_data) {
  const base64Image = original_data.toString('base64');

  // 实例化要请求产品的client对象,clientProfile是可选的
  const params = { ImageBase64: base64Image };
  client.GeneralBasicOCR(params).then(
    (data) => {
      let list = data.TextDetections

      for (const el of list) {
        let tel = el.DetectedText
        if (tel) {
          //管码10001031047676
          if (tel.substring(0, 2) === "管码") {
            console.log(tel)
            continue
          }

          //电话号
          let reg = /^1(3[0-9]|4[01456879]|5[0-35-9]|6[2567]|7[0-8]|8[0-9]|9[0-35-9])\d{8}$/
          if (reg.test(tel)) {
            console.log("手机号正确 " + tel);
          }
        }
      }
    },
    (err) => {
      console.error("error", err);
    }
  );
});

```

