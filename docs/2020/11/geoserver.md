---
title: Docker 安装 GeoServer
date: 2020-11-17
tags:
  - Linux
  - GIS
categories:
  - 技术
publish: true
---

安装 GeoServer，实现一个影像自动发布的后台。

<!-- more -->

## 安装工具

首先安装 docker，见[CentOS 起步](https://www.codingyang.com/article_tech/wsl.html)

## 推荐镜像

按照[docker-geoserver](https://github.com/oscarfonts/docker-geoserver)中的方式，拉取镜像直接运行。

```sh
docker pull oscarfonts/geoserver
docker run -d -p 8080:8080 -v ${PWD}/data_dir:/var/local/geoserver oscarfonts/geoserver
```

打开`http://localhost:8080/`，输入默认用户名密码`admin/geoserver`，环境已经建好。

## Node.js 示例程序

拉取[geoserver-rest-samplesr](https://github.com/michogar/geoserver-rest-samplesr)代码，安装依赖。

```sh
git clone https://github.com/michogar/geoserver-rest-samples.git
cd geoserver-rest-samples
npm install
```

然后就可以进行演示程序的测试，参考文档：

```sh
npm run create_workspace
npm run upload_shapefile
```

_这里有一个报错信息不对的坑，比如创建两次同名工作空间，明明是重名不能创建，报错信息是 401 权限错误。_

## 已废弃，使用 docker-compose 的方式

### 安装 docker-compose

```shell
# 下面的环境变量不用修改，直接粘贴命令
sudo curl -L "https://github.com/docker/compose/releases/download/1.27.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

#添加可执行权限
sudo chmod +x /usr/local/bin/docker-compose
```

### docker-compose.yml

新建 docker-compose.yml 文件，写入下列配置。记得改端口和密码：

```yml
version: "3.1"
services:
  geoserver:
    restart: always
    image: kartoza/geoserver
    container_name: geoserver
    ports:
      - 8888:8080
    volumes:
      - ./geoserver-data:/opt/geoserver/data_dir

  postgis:
    restart: always
    image: kartoza/postgis
    container_name: postgis
    ports:
      - 5444:5432
    environment:
      POSTGRES_USER: rackar
      POSTGRES_PASSWORD: 123456
    volumes:
      - ./postgis-data:/var/lib/postgresql/data

  pgadmin4:
    restart: always
    image: dpage/pgadmin4
    container_name: pgadmin
    ports:
      - 8889:80
    environment:
      PGADMIN_DEFAULT_EMAIL: 27681135@qq.com
      PGADMIN_DEFAULT_PASSWORD: 123456
```
