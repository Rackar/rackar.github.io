## 安装

```sh
mkdir /postgis

sudo docker run --name "postgis" -v /postgis:/postgis -p 5433:5432 -e POSTGRES_USER=postgres -e POSTGRES_PASS='123456' -e POSTGRES_MULTIPLE_EXTENSIONS=postgis -e ALLOW_IP_RANGE=0.0.0.0/0 --restart always -d -t kartoza/postgis

sudo docker exec -it postgis bash

cd /etc/postgresql/12/main/

```

In pg_hba.conf you will have to make a small change to the settings under Database administrative login by Unix domain socket from peer to trust. On lines 84 & 85, it should look like this:

```
# Database administrative login by Unix domain socket
local   all             postgres                                trust

# IPv4 local connections:
host    all             all             127.0.0.1/32            md5
host    all             all             0.0.0.0/0              md5
```

exit

```
sudo docker restart postgis
sudo docker exec -it postgis psql -U postgres
```

```
netstat -nlp | grep 5432 ##查看是否成功
```

重启命令 `service postgresql restart`

手动修改默认密码
`ALTER USER postgres WITH PASSWORD '123456';`
