---
title: docker部署学习
date: 2022-10-20
tags:
  - Node.js
categories:
  - 技术
publish: false
---

docker部署和近期编写情况

<!-- more -->
## 编写
docker

```dockerfile
FROM mhart/alpine-node

#RUN set -xe \
#    && apk add --no-cache nodejs npm \
RUN     npm config set registry  https://registry.npmmirror.com \
    npm install -g pm2 \
    rm -rf /tmp/npm* /var/cache/apk/*

WORKDIR /app


# Install local required modules
COPY package.json package.json

RUN yarn install

COPY . ./
EXPOSE 3001

# create production env
# HOST=`http://localhost:3000`
ARG DATABASE_URL
ARG JWT_SECRET

RUN touch .env
RUN echo DATABASE_URL=$DATABASE_URL >> .env
RUN echo JWT_SECRET=$JWT_SECRET >> .env

# CMD ["pm2", "/app/src/index.ts"]
#CMD ["bash","./i.sh"]
```
运行build
`docker build -t p6 .`
`docker run -itd --name p7 -p 3001:3001 p6` #保持后台
docker run -itd --name p10 -p 3001:3001 --link post:link-post p8
#链接数据库容器

如果只给-d后台参数的话，必须要跟一个会阻塞的命令如bash，不然容器没有任务又会关掉。或者加-it

`docker exec -it p7 /bin/sh` #前台执行命令
进去之后一组预操作(i.sh)。如需保持前台运行，可以按`Ctrl + p + q`退出容器。再次进去top显示进程还在后台运行。但是 stop 容器之后再起就不会运行了。

目前.env没有复制也没有写入

需要先--link 到post 然后使用link-post去连接另一个容器的原始端口

手动先修改.env
```
DATABASE_URL="postgresql://postgres:mysecretpassword@link-post:5432/prisma?schema=public"
JWT_SECRET="aosdifewoefmsalfjjioawefjosaofjaidf"

```


测试docker env
```s
docker run -itd --name back -p 3001:3001 --link post:link-post prisma  --env-file=.env

```



