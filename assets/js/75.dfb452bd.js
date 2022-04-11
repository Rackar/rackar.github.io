(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{432:function(s,t,a){"use strict";a.r(t);var n=a(3),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"scratch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scratch"}},[s._v("#")]),s._v(" Scratch")]),s._v(" "),a("p",[s._v("Scratch 儿童编程")]),s._v(" "),a("p",[s._v("程序部署国内地址：https://scratch.codingyang.com")]),s._v(" "),a("p",[s._v("推荐一个国内社区，登录后有自动保存和分享，加载速度也比较快： https://www.scratch-cn.cn/")]),s._v(" "),a("h3",{attrs:{id:"本地安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本地安装"}},[s._v("#")]),s._v(" 本地安装")]),s._v(" "),a("p",[s._v("开源代码地址：https://github.com/LLK/scratch-gui.git")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("git clone https://github.com/LLK/scratch-gui.git --depth=1\ncd scratch-gui\nnpm install\nnpm start\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("加 depth 参数是因为 git 的历史记录中有大文件，所以下载太慢。")]),s._v(" "),a("p",[s._v("如果还是下载失败还要更改下 git 的全局配置中的网速和超时设置：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("git config --global http.lowSpeedLimit 0\n\ngit config --global http.lowSpeedTime 99999\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("gui 版本还有以下问题：不能自动保存，角色和背景还是外网拉取速度很慢，标题栏无用按钮较多。")]),s._v(" "),a("h4",{attrs:{id:"首先隐藏无用按钮"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#首先隐藏无用按钮"}},[s._v("#")]),s._v(" 首先隐藏无用按钮")]),s._v(" "),a("p",[a("code",[s._v("src\\components\\menu-bar\\munu-bar.css")]),s._v("\n给 class "),a("code",[s._v(".account-info-group .menu-bar-item")]),s._v(" 加上 "),a("code",[s._v("display:none;")])]),s._v(" "),a("p",[s._v("menu-bar.jsx 530 行注释掉分享按钮")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("props"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("showComingSoon\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// (")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('//     <MenuBarItemTooltip id="share-button">')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//         <ShareButton className={styles.menuBarButton} />")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//     </MenuBarItemTooltip>")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// )")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("以及紧接着的下面的社交按钮：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("MenuBarItemTooltip id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"community-button"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("CommunityButton className"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("styles"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("menuBarButton"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("MenuBarItemTooltip"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("修改 logo 的点击跳转在 render-gui.jsx 中")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("onClickLogo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("location "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://scratch.mit.edu"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("然后在 489 行增加一条提示说明：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<Divider className={classNames(styles.divider)} />\n                    <div\n                        className={classNames(styles.menuBarItem)}\n                    >\n                        制作完成后请点击文件→保存到电脑，以便下次上传使用。欢迎关注公众号 Rackar\n                    </div>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("图片 cdn 地址在：\n"),a("code",[s._v("scratch-gui\\src\\containers\\library-item.jsx")]),s._v("\n中第 109 行。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" iconURL "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" iconMd5\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("https://cdn.assets.scratch.mit.edu/internalapi/asset/")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("${")]),s._v("iconMd5"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("/get/")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("props"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("iconRawURL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("通过 md5 文件名拼接 url 模板。")]),s._v(" "),a("p",[s._v("MD5 信息如角色和背景等数据信息是离线 json，分别在")]),s._v(" "),a("p",[a("code",[s._v("src\\lib\\libraries\\sprites.json")]),s._v(" 和同级目录下的其他 json")]),s._v(" "),a("p",[s._v("下一步抓取所有数据做国内存储，解决访问缓慢。")]),s._v(" "),a("p",[s._v("lib 下 save-project-to-server 和 project-fetcher-hoc 中设置 ProjectFetcherComponent.defaultProps")]),s._v(" "),a("p",[s._v("可以修改默认的请求地址。")]),s._v(" "),a("h2",{attrs:{id:"swift"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#swift"}},[s._v("#")]),s._v(" SWIFT")]),s._v(" "),a("p",[s._v("AppStore 下载 Swift playground 软件，6-7 岁儿童认识一点汉字和英文就可以开始尝试编程。")]),s._v(" "),a("p",[s._v("这里有一点"),a("a",{attrs:{href:"https://www.bilibili.com/video/av71915776/",target:"_blank",rel:"noopener noreferrer"}},[s._v("视频供参考"),a("OutboundLink")],1),s._v("。")])])}),[],!1,null,null,null);t.default=e.exports}}]);