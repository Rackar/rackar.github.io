module.exports = {
  title: 'Coding Yang',
  description: 'Just playing around',
  //   base: '/codingyang/',
  themeConfig: {
    nav: [
      {text: '首页', link: '/'},
      {text: '文章', link: '/article/'},
      {text: '儿童编程', link: '/child/'},
      {text: '其他程序', link: '/code/'},
      {text: '连岳', link: 'http://www.lianyue4u.com'}
    ],
    sidebar: 'auto', //自动侧边栏
    displayAllHeaders: true // 默认值：false
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
