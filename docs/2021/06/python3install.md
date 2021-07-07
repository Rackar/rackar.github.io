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

已经非常详尽了。在默认已有 python2 和 wget 的环境下，简单的几个步骤：

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

## 个人需要的 pip3 库安装

这里是个人用到的，无需参考

```s
pip3 install requests selenium bs4 python-wordpress-xmlrpc flask flask-cors
```

希望安装到这里还能顺利无报错。。

好吧果然运行报无数错了，搞了半天无果，重新换 docker 再来一套。

## Docker 安装 Python3

-v 挂载数据目录  
-p 映射绑定端口  
-w 指定工作空间

```s
docker pull python:3.7.5
docker run --name wp  -v /root/python_demo:/root/python_demo -p 5000:5000  -w /root/python_demo -it python:3.7.5 bash

# 这里已进入docker内的命令行
python -V
pip -V
python test.py

pip3 install requests selenium bs4 python-wordpress-xmlrpc flask flask-cors

# 退出 后以-d 后台形式运行

# 或者直接在运行中的容器附加后台执行命令（同样-d） 可以运行，但是没输出调试信息
docker exec -d wp python /root/python_demo/wpImport/timeCircle.py



```

## 构建 docker image

[官网文档](https://docs.docker.com/language/python/build-images/)

建立好 Dockerfile 文件,设定工作目录，拷贝 require，安装依赖，拷贝本目录文件到工作目录，然后执行服务器命令，如

```dockerfile
# syntax=docker/dockerfile:1
FROM python:3.7.5
# WORKDIR /root/python_demo/wpImport/
WORKDIR /app
COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt
COPY . .
CMD [ "python3", "timeCircle.py"]
```

然后开始建镜像，后台运行和测试。

```s
cd /root/python_demo/wpImport/
docker build --tag ly .
docker run --name ly -d --publish 5003:5000 ly
curl localhost:5003
```

难以调试。python 环境建立不成功，导致不能 linux 远程调试。windows 调试和 linux 的结果有偏差。采用 docker 镜像调试的步骤过于繁琐，修改以后需要频繁打包并运行调试。

window 用 `pip install -r requestment.txt` 后报错，模块未安装，还是需要一个个 install。linux 正常

代码变更时，选择连接到工目录，更新代码，更新奖项版本，停止原有服务，重新运行

```
docker stop ly
docker rm ly
docker image rm ly
cd ./wpImport/
docker build --tag ly .
docker run --name ly -d --publish 5003:5000 ly
```
