---
title: apollo 使用 VUE 示例
date: 2020-01-13
tags:
  - Node.js
  - Vue.js
categories:
  - 技术
---

## 简介

Apollo 是 GraphQL 的一种实现，解决 RESTful API 的一些问题。

官网教程：https://www.apollographql.com/docs/tutorial/introduction/

前端库：
`npm install --save vue-apollo apollo-client`

我们按照官网示例做一遍教程，构建一个预订 SpaceX 发射的小应用。主要包括：

- 登录页
- 即将发射清单
- 发射细节
- 用户资料页
- 购物车

其他参考链接
https://dev.to/alvarojsnish/graphql-mongodb-the-easy-way-ngc

https://stackoverflow.com/questions/52382639/connect-apollo-server-with-mongodb-mongoos/52462031

## 服务器端起步

下载教程代码：

`git clone https://github.com/apollographql/fullstack-tutorial.git`

起步使用 start 目录，完成教程的代码参考 final 目录。

先编辑 server 目录，也就是服务器。

新建模式之前，先设置 API 服务器。Apollo 服务器是一个连接数据的库。先安装依赖：

`cd start/server && npm install`

其中核心的依赖是：`apollo-server` 和 `graphql` 这两个包。

先修改入口 `src/index.js` 文件：

```js
const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");

const server = new ApolloServer({ typeDefs });
```

这里导入了 ApolloServer 类，并用编写的模式新建服务器实例。下面我们编写模式。

### 新建模式

可以把模式（schema）当做所有数据及关系的蓝图。模式还定义了我们可以通过查询获取哪些数据以及更新哪些数据。模式是强类型的。

官方文档认为是模式是前端和后端团队进行协作的理想结合点，建议团队练习 Schema First Development。

参照我们的目标，应用需要：

- 获取所有即将到来的火箭发射
- 通过其 ID 获取特定的发射
- 登录用户
- 预订发射（登录状态下）
- 取消发射（登录状态下）

基于这些要求去构建模式。修改 `src/schema.js`：

```js
const { gql } = require("apollo-server");

const typeDefs = gql`
  # Your schema will go here
`;

module.exports = typeDefs;
```

导入 gql。并用示例的方式写入模式代码。

语言使用的是 SDL 语言（GraphQL's schema definition language）。看着有一点像 `TypeScript`。

从查询类型 (Query type) 开始，查询类型主要是用来描述我们的数据，是模式的入口点。现在我们加入一些代码：

```js
const { gql } = require("apollo-server");

const typeDefs = gql(`
  type Query {
    launches: [Launch]!
    launch(id: ID!): Launch
    # Queries for the current user
    me: User
  }
`);

module.exports = typeDefs;
```

定义了非空数组 launches，定义了通过 id 查询单个 launch，还定义了 me 获取用户信息。这里我们使用 Launch 和 User 两个对象类型。我们下面来定义一下他们。

```js
type Launch {
  id: ID!
  site: String
  mission: Mission
  rocket: Rocket
  isBooked: Boolean!
}

type Rocket {
  id: ID!
  name: String
  type: String
}

type User {
  id: ID!
  email: String!
  trips: [Launch]!
}

type Mission {
  name: String
  missionPatch(size: PatchSize): String
}

enum PatchSize {
  SMALL
  LARGE
}
```

确实很像 TS，有很多基础类型如 ID, String, Boolean, Int 等，也可以使用自定义类型。

missionPatch 这里也加入了参数，因为 GraphQL 非常灵活，可以在任何字段里包含参数。还可以定义枚举类型。

[详细用法参考](https://devhints.io/graphql#schema)

然后是 Mutation type 变动类型。主要是修改数据的入口点。

```js
type Mutation {
  # if false, booking trips failed -- check errors
  bookTrips(launchIds: [ID]!): TripUpdateResponse!

  # if false, cancellation failed -- check errors
  cancelTrip(launchId: ID!): TripUpdateResponse!

  login(email: String): String # login token
}

type TripUpdateResponse {
  success: Boolean!
  message: String
  launches: [Launch]
}
```

bookTrips 和 cancelTrip 这两个变动都会接受一个参数，并返回一个更新响应 TripUpdateResponse。在响应里不光包含了状态和信息，还包括了更新后的数据。这是一种好习惯，可以让客户端自动缓存更新。

现在设置服务器监听，修改 index.js：

```js
const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");

const server = new ApolloServer({ typeDefs });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
  console.log(`GraphQL Playground run at ${url}graphql`);
});
```

运行 npm start，服务器默认端口 4000。

默认 Apollo 开发环境会开启 [GraphQL Playground](https://www.apollographql.com/docs/apollo-server/testing/graphql-playground/)。这是一个交互式浏览器 IDE，可以用来浏览和测试。生产环境自动关闭。

点击右侧的 schema 按钮和 docs 按钮，可以直接浏览自动生成文档和模式代码。

### 连接数据

现在我们可以通过建立的模式来连接数据源了。我们的数据源可以是任意服务，比如业务逻辑，REST APIs, 数据库, 或者 gRPC 服务。

下面我们会试试连接 REST API 和 SQL 数据库。新建`src/datasources/launch.js`

```js
const { RESTDataSource } = require("apollo-datasource-rest");

class LaunchAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.spacexdata.com/v2/";
  }
}

module.exports = LaunchAPI;
```

设定了 api 基本地址。RESTDataSource 还设置了内存缓存，无需额外设置即可缓存来自 REST 资源的响应。我们称此为部分查询缓存。此缓存的优点在于，您可以重用 REST API 公开的现有缓存逻辑。

然后写数据拉取方法，首先添加一个获取所有发射：

```js
async getAllLaunches() {
  const response = await this.get('launches');
  return Array.isArray(response)
    ? response.map(launch => this.launchReducer(launch))
    : [];
}
```

get 这句代码就是发送了 get 请求到https://api.spacexdata.com/v2/launches。获取的数据数组又经过了一个map遍历方法，也就是对每个数据进行了操作，我们接着写这个方法的实现：

```js
launchReducer(launch) {
  return {
    id: launch.flight_number || 0,
    cursor: `${launch.launch_date_unix}`,
    site: launch.launch_site && launch.launch_site.site_name,
    mission: {
      name: launch.mission_name,
      missionPatchSmall: launch.links.mission_patch_small,
      missionPatchLarge: launch.links.mission_patch,
    },
    rocket: {
      id: launch.rocket.rocket_id,
      name: launch.rocket.rocket_name,
      type: launch.rocket.rocket_type,
    },
  };
}
```

这个方法类似一个重映射，将 api 里的字段映射到了我们定义的 schema 中的字段，同时还做了数据的精简和组织。

然后再增加两个通过 id 或 id 列表来获取特定发射数据的方法：

```js
async getLaunchById({ launchId }) {
  const response = await this.get('launches', { flight_number: launchId });
  return this.launchReducer(response[0]);
}

getLaunchesByIds({ launchIds }) {
  return Promise.all(
    launchIds.map(launchId => this.getLaunchById({ launchId })),
  );
}
```

通过 id 获取数据，如果是数组，则分别调用单个 id 获取的方法。现在 rest 方式已经成功啦。

user.js 在示例中已经提供了，可以先读一下。数据结构已经准备好了。

然后开始添加到 server，修改 index.js

```js
const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const { createStore } = require("./utils");

const LaunchAPI = require("./datasources/launch");
const UserAPI = require("./datasources/user");

const store = createStore();

const server = new ApolloServer({
  typeDefs,
  dataSources: () => ({
    launchAPI: new LaunchAPI(),
    userAPI: new UserAPI({ store })
  })
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
```
