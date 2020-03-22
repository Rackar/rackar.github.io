module.exports = {
  "title": "CodingYang",
  "description": "个人博客",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    valineConfig: {
      appId: 'qIMtTW8cOnc4Wyzsw5du5kCY-gzGzoHsz',// your appId
      appKey: 'f56GWCRncDeNHhggfNo52UTm', // your appKey
    },
    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间线",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "阿里云1折",
        "link": "https://www.aliyun.com/minisite/goods?userCode=ha4o8twr"
      },
      {
        "text": "联系",
        "icon": "reco-message",
        "items": [
          //         { text: "联系我", link: "/about/" },
          //         { text: "友情链接", link: "/about/friend" },
          //         { text: "CSDN", link: "https://blog.csdn.net/henjuewang" },
          //         { text: "简书", link: "https://www.jianshu.com/u/2d95604f4b82" },
          //         { text: "微博", link: "https://weibo.com/u/1828163444" },
          //         { text: "github", link: "https://github.com/rackar" },
          //         { text: "码云", link: "https://gitee.com/rackar" }
          {
            text: "关于", link: "/about/"
          },
          {
            "text": "GitHub",
            "link": "https://github.com/rackar",
            "icon": "reco-github"
          },
          {
            "text": "简书",
            "link": "https://www.jianshu.com/u/2d95604f4b82",
            "icon": "reco-jianshu"
          },
          {
            "text": "CSDN",
            "link": "https://blog.csdn.net/henjuewang",
            "icon": "reco-csdn"
          },

          {
            "text": "WeChat",
            "link": "https://mp.weixin.qq.com/s/-MJyE7Y7ixpm3gY1ZOcTIw",
            "icon": "reco-wechat"
          }
        ]
      }
    ],
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "类别"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      },
      {
        "title": "邪少博客",
        "desc": "前端技术",
        "link": "//itwmw.com"
      },
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "sidebar": "auto",
    "lastUpdated": "更新于",
    "author": "Rackar",
    "authorAvatar": "/logo.png",
    "record": "蒙ICP备19000275号-1",
    "startYear": "2018",
    repo: 'Rackar/rackar.github.io',
    // // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // // 假如文档放在一个特定的分支下：
    docsBranch: 'blog',
    editLinks: true,
    editLinkText: '参与编辑此文章',
  },
  "markdown": {
    "lineNumbers": true
  }
}