---
title: CentOS 安装 Python3和pip3
date: 2021-06-10
tags:
  - Linux
  - Python
categories:
  - 技术
publish: true
---

又到了一年一度的云服务器过期时间，搬迁和环境搭建又得重搞一下了

<!-- more -->

## Python3

[参考这篇文章](https://blog.csdn.net/longzhoufeng/article/details/109879818)

已经非常详尽了。在默认已有python2和wget的环境下，简单的几个步骤：

```s
cd /tmp
yum install -y zlib-devel bzip2-devel libffi-devel openssl-devel ncurses-devel sqlite-devel readline-devel tk-devel gcc make epel-release zlib
wget https://www.python.org/ftp/python/3.6.8/Python-3.6.8.tar.xz
xz -d Python-3.6.8.tar.xz
tar -xf Python-3.6.8.tar
cd Python-3.6.8
./configure prefix=/usr/local/python3
make && make install
ln -s /usr/local/python3/bin/python3.6 /usr/bin/python3
python3 -V
```

python3 安装完成

## pip3

然后[参考这篇](https://www.cnblogs.com/fyly/p/11112169.html)

安装最新版本可以到 [https://pypi.org/project/pip/](https://pypi.org/project/pip/) 去左侧 Download files 去找 Source 的压缩包地址。   
这里演示的两个指定的旧版本

```s
# 安装setuptools
cd /tmp
wget --no-check-certificate  https://pypi.python.org/packages/source/s/setuptools/setuptools-19.6.tar.gz#md5=c607dd118eae682c44ed146367a17e26
tar -zxvf setuptools-19.6.tar.gz
cd setuptools-19.6.tar.gz
python3 setup.py build
python3 setup.py install

# 安装pip3
cd /tmp
wget --no-check-certificate  https://pypi.python.org/packages/source/p/pip/pip-8.0.2.tar.gz#md5=3a73c4188f8dbad6a1e6f6d44d117eeb
tar -zxvf pip-8.0.2.tar.gz
cd pip-8.0.2
python3 setup.py build
python3 setup.py install
ln -s /usr/local/python3/bin/pip3 /usr/bin/pip3
pip3 -V
```

pip3 安装完成


## 个人需要的pip3库安装

这里是个人用到的，无需参考

```
pip3 install requests selenium bs4

```

希望安装到这里还能顺利无报错。。