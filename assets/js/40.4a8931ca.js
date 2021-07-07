(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{531:function(s,n,t){"use strict";t.r(n);var e=t(4),a=Object(e.a)({},(function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("又到了一年一度的云服务器过期时间，搬迁和环境搭建又得重搞一下了")]),s._v(" "),t("h2",{attrs:{id:"python3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#python3"}},[s._v("#")]),s._v(" Python3")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://blog.csdn.net/longzhoufeng/article/details/109879818",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考这篇文章"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("已经非常详尽了。在默认已有 python2 和 wget 的环境下，简单的几个步骤：")]),s._v(" "),t("div",{staticClass:"language-s line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("cd /tmp\nyum install -y zlib-devel bzip2-devel libffi-devel openssl-devel ncurses-devel sqlite-devel readline-devel tk-devel gcc make epel-release zlib\nwget https://www.python.org/ftp/python/3.6.8/Python-3.6.8.tar.xz\nxz -d Python-3.6.8.tar.xz\ntar -xf Python-3.6.8.tar\ncd Python-3.6.8\n./configure prefix=/usr/local/python3\nmake && make install\nln -s /usr/local/python3/bin/python3.6 /usr/bin/python3\npython3 -V\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("python3 安装完成")]),s._v(" "),t("h2",{attrs:{id:"pip3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pip3"}},[s._v("#")]),s._v(" pip3")]),s._v(" "),t("p",[s._v("然后"),t("a",{attrs:{href:"https://www.cnblogs.com/fyly/p/11112169.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考这篇"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("安装最新版本可以到 "),t("a",{attrs:{href:"https://pypi.org/project/pip/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://pypi.org/project/pip/"),t("OutboundLink")],1),s._v(" 去左侧 Download files 去找 Source 的压缩包地址。"),t("br"),s._v("\n这里演示的两个指定的旧版本")]),s._v(" "),t("div",{staticClass:"language-s line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("# 安装setuptools\ncd /tmp\nwget --no-check-certificate  https://pypi.python.org/packages/source/s/setuptools/setuptools-19.6.tar.gz#md5=c607dd118eae682c44ed146367a17e26\ntar -zxvf setuptools-19.6.tar.gz\ncd setuptools-19.6.tar.gz\npython3 setup.py build\npython3 setup.py install\n\n# 安装pip3\ncd /tmp\nwget --no-check-certificate  https://pypi.python.org/packages/source/p/pip/pip-8.0.2.tar.gz#md5=3a73c4188f8dbad6a1e6f6d44d117eeb\ntar -zxvf pip-8.0.2.tar.gz\ncd pip-8.0.2\npython3 setup.py build\npython3 setup.py install\nln -s /usr/local/python3/bin/pip3 /usr/bin/pip3\npip3 -V\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("p",[s._v("pip3 安装完成")]),s._v(" "),t("h2",{attrs:{id:"个人需要的-pip3-库安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#个人需要的-pip3-库安装"}},[s._v("#")]),s._v(" 个人需要的 pip3 库安装")]),s._v(" "),t("p",[s._v("这里是个人用到的，无需参考")]),s._v(" "),t("div",{staticClass:"language-s line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("pip3 install requests selenium bs4 python-wordpress-xmlrpc flask flask-cors\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("希望安装到这里还能顺利无报错。。")]),s._v(" "),t("p",[s._v("好吧果然运行报无数错了，搞了半天无果，重新换 docker 再来一套。")]),s._v(" "),t("h2",{attrs:{id:"docker-安装-python3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-安装-python3"}},[s._v("#")]),s._v(" Docker 安装 Python3")]),s._v(" "),t("p",[s._v("-v 挂载数据目录"),t("br"),s._v("\n-p 映射绑定端口"),t("br"),s._v("\n-w 指定工作空间")]),s._v(" "),t("div",{staticClass:"language-s line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("docker pull python:3.7.5\ndocker run --name wp  -v /root/python_demo:/root/python_demo -p 5000:5000  -w /root/python_demo -it python:3.7.5 bash\n\n# 这里已进入docker内的命令行\npython -V\npip -V\npython test.py\n\npip3 install requests selenium bs4 python-wordpress-xmlrpc flask flask-cors\n\n# 退出 后以-d 后台形式运行\n\n# 或者直接在运行中的容器附加后台执行命令（同样-d） 可以运行，但是没输出调试信息\ndocker exec -d wp python /root/python_demo/wpImport/timeCircle.py\n\n\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("h2",{attrs:{id:"构建-docker-image"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#构建-docker-image"}},[s._v("#")]),s._v(" 构建 docker image")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://docs.docker.com/language/python/build-images/",target:"_blank",rel:"noopener noreferrer"}},[s._v("官网文档"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("建立好 Dockerfile 文件,设定工作目录，拷贝 require，安装依赖，拷贝本目录文件到工作目录，然后执行服务器命令，如")]),s._v(" "),t("div",{staticClass:"language-dockerfile line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# syntax=docker/dockerfile:1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" python:3.7.5")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# WORKDIR /root/python_demo/wpImport/")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WORKDIR")]),s._v(" /app")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" requirements.txt requirements.txt")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" pip3 install -r requirements.txt")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" . .")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CMD")]),s._v(" [ "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"python3"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"timeCircle.py"')]),s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("然后开始建镜像，后台运行和测试。")]),s._v(" "),t("div",{staticClass:"language-s line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("cd /root/python_demo/wpImport/\ndocker build --tag ly .\ndocker run --name ly -d --publish 5003:5000 ly\ncurl localhost:5003\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("难以调试。python 环境建立不成功，导致不能 linux 远程调试。windows 调试和 linux 的结果有偏差。采用 docker 镜像调试的步骤过于繁琐，修改以后需要频繁打包并运行调试。")]),s._v(" "),t("p",[s._v("window 用 "),t("code",[s._v("pip install -r requestment.txt")]),s._v(" 后报错，模块未安装，还是需要一个个 install。linux 正常")]),s._v(" "),t("p",[s._v("代码变更时，选择连接到工目录，更新代码，更新奖项版本，停止原有服务，重新运行")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("docker stop ly\ndocker rm ly\ndocker image rm ly\ncd ./wpImport/\ndocker build --tag ly .\ndocker run --name ly -d --publish 5003:5000 ly\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])])])}),[],!1,null,null,null);n.default=a.exports}}]);