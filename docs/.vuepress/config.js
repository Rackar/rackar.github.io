module.exports = {
  title: 'Coding Yang',
  description: 'Just playing around',
  //   base: '/codingyang/',
  themeConfig: {
    sidebar: 'auto'
  }, //自动侧边栏
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
      title: 'VuePress',
      description: 'Vue 驱动的静态网站生成器'
    },
    '/en/': {
      lang: 'en-US',
      title: 'VuePress',
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
