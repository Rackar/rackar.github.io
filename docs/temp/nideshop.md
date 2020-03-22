## （草稿）可读 public 模式下所有表的用户设置

新建用户

```sql
create role web_anon nologin;

grant usage on schema public to web_anon;
grant select on schema public to web_anon;

-- 设置所有表查询权限
grant select on all tables in schema public to web_anon;

-- 设置默认新建表查询权限
alter default privileges in schema public grant select on tables to web_anon;
```

然后在创建一个独立的连接数据账户，并允许切换到 web_anon ：

```sql
create role authenticator noinherit login password 'mypassword';
grant web_anon to authenticator;



docker exec -it postgres psql -U postgres -f /dshare/pgjwt/n1.sql
docker exec -it postgres psql -U postgres -f /dshare/pgjwt/n2.sql
docker exec -it postgres psql -U postgres -f /dshare/pgjwt/n3.sql
docker exec -it postgres psql -U postgres -f /dshare/pgjwt/n4.sql
```

导入表和数据

外键约束：

```
CREATE TABLE cities (
        city     varchar(80) primary key,
        location point
);

CREATE TABLE weather (
        city      varchar(80) references cities(city),

        temp_lo   int,
        temp_hi   int,
        prcp      real,
        date      date
);

或者省略主键：

city      varchar(80) references cities

以及多个外键：
CREATE TABLE t1 (
  a integer PRIMARY KEY,
  b integer,
  c integer,
  FOREIGN KEY (b, c) REFERENCES other_table (c1, c2)
);
```

```
插所有表：
select * from pg_tables where schemaname='public';
 public     | nideshop_cart                | postgres   |            | t          | f        | f           | f
 public     | nideshop_channel             | postgres   |            | t          | f        | f           | f
 public     | nideshop_comment_picture     | postgres   |            | t          | f        | f           | f
 public     | nideshop_coupon              | postgres   |            | t          | f        | f           | f
 public     | nideshop_address             | postgres   |            | t          | f        | f           | f
 public     | nideshop_admin               | postgres   |            | t          | f        | f           | f
 public     | nideshop_feedback            | postgres   |            | t          | f        | f           | f
 public     | nideshop_goods_issue         | postgres   |            | t          | f        | f           | f
 public     | nideshop_goods_specification | postgres   |            | t          | f        | f           | f
 public     | nideshop_keywords            | postgres   |            | t          | f        | f           | f
 public     | nideshop_order               | postgres   |            | t          | f        | f           | f
 public     | nideshop_order_express       | postgres   |            | t          | f        | f           | f
 public     | nideshop_attribute           | postgres   |            | t          | f        | f           | f
 public     | nideshop_footprint           | postgres   |            | t          | f        | f           | f
 public     | nideshop_goods               | postgres   |            | t          | f        | f           | f
 public     | nideshop_attribute_category  | postgres   |            | t          | f        | f           | f
 public     | nideshop_brand               | postgres   |            | t          | f        | f           | f
 public     | nideshop_goods_attribute     | postgres   |            | t          | f        | f           | f
 public     | nideshop_order_goods         | postgres   |            | t          | f        | f           | f
 public     | nideshop_category            | postgres   |            | t          | f        | f           | f
 public     | nideshop_goods_gallery       | postgres   |            | t          | f        | f           | f
 public     | nideshop_product             | postgres   |            | t          | f        | f           | f
 public     | nideshop_region              | postgres   |            | t          | f        | f           | f
 public     | nideshop_topic               | postgres   |            | t          | f        | f           | f
 public     | nideshop_related_goods       | postgres   |            | t          | f        | f           | f
 public     | nideshop_search_history      | postgres   |            | t          | f        | f           | f
 public     | nideshop_shipper             | postgres   |            | t          | f        | f           | f
 public     | nideshop_specification       | postgres   |            | t          | f        | f           | f
 public     | nideshop_collect             | postgres   |            | t          | f        | f           | f
 public     | nideshop_comment             | postgres   |            | t          | f        | f           | f
 public     | nideshop_topic_category      | postgres   |            | t          | f        | f           | f
 public     | nideshop_user                | postgres   |            | t          | f        | f           | f
 public     | nideshop_user_coupon         | postgres   |            | t          | f        | f           | f
 public     | nideshop_user_level          | postgres   |            | t          | f        | f           | f
 public     | nideshop_ad_position         | postgres   |            | t          | f        | t           | f
 public     | nideshop_ad                  | postgres   |            | t          | f        | t           | f

```
