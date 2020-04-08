首先导入数据库表 ，然后设定用户相关函数，然后挂载权限，插入示例数据。  
然后添加设置，测试 pgr 的问题。

生成 token

```s
iDYR4j2Qp3QT05kpd9oIcF2WPWEWVrI3

{
  "role": "normal_user",
  "username":"id2"
}

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoibm9ybWFsX3VzZXIiLCJ1c2VybmFtZSI6ImlkMiJ9.I__S9zo1H2K4ij7arS829tEX5p_Nli_Vfm3811ClaTU
```

开启测试账户

```
create role id with login;
create role id2 with login;
```
