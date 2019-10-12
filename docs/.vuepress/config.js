module.exports = {
  title: 'Coding Yang',
  description: 'Just playing around',
  //   base: '/codingyang/',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/article/' },
      {
        text: '教育软件',
        items: [
          { text: '识字率测试', link: 'http://www.codingyang.com/word/' },
          {
            text: '奖励记录星',
            link: 'http://www.codingyang.com/stars/'
          },

          { text: '相关介绍', link: '/child/' }
        ]
      },
      { text: '其他程序', link: '/code/survey' },
      {
        text: '联系我',
        ariaLabel: '其他技术博客',
        items: [
          { text: '联系我', link: '/about' },
          { text: 'CSDN', link: 'https://blog.csdn.net/henjuewang' },
          { text: '简书', link: 'https://www.jianshu.com/u/2d95604f4b82' },
          { text: '微博', link: 'https://weibo.com/u/1828163444' },
          { text: 'github', link: 'https://github.com/rackar' },
          { text: '码云', link: 'https://gitee.com/rackar' }
        ]
      }
    ],
    // sidebar: 'auto', //自动侧边栏
    sidebar: {
      '/article/': ['' /* /foo/ */, 'tech/front', 'child/yuer', 'self/diary'],

      '/child/': ['', 'code' /* /bar/ */],
      '/code/': ['survey', 'other' /* /bar/ */],

      // fallback
      '/': ['' /* / */, 'about' /* /about.html */]
    }
    // displayAllHeaders: true // 默认值：false
  },
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
      title: 'CodingYang',
      description: 'Vue 驱动的静态网站生成器'
    },
    '/en/': {
      lang: 'en-US',
      title: 'CodingYang',
      description: 'Vue-powered Static Site Generator'
    }
  },
  configureWebpack: {
    //webpack别名 如![Image from alias](~@alias/image.png)
    resolve: {
      alias: {
        '@alias': 'path/to/some/dir'
      }
    }
  }
}
