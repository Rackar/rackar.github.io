# VUE.NetCore

## 安装

```
git clone https://github.com/cq-panda/Vue.NetCore
```

## 环境

### Windows 安装虚拟机 Docker

下载 vmvare，安装 centos 镜像，安装 docker 后，映射 3306 端口。然后执行下面命令

1. linux 命令：

```
service docker start
docker ps
docker pull mysql:8.0
docker run -p 3306:3306 --name mymysql -v $PWD/conf:/etc/mysql/conf.d -v $PWD/logs:/logs -v $PWD/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456 -d mysql:8.0
docker cp import.sql mymysql:/
docker exec -it mymysql bash
```

2. docker 内命令：
   `mysql -p`
3. mysql 工具下命令：

```
create database netcoredev;
show databases;
use netcoredev;
source /import.sql

```

后端：

```
.\Vue.Net\VOL.WebApi\dev_run.bat
```

前端：

```
cd Vol.Vue
npm i
npm run dev
```
