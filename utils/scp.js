let client = require("scp2");
let config = require("./secret");
client.scp(
  "docs/.vuepress/dist/",
  // "22.txt",
  {
    host: config.secret.host,
    username: config.secret.username,
    password: config.secret.password,
    path: config.secret.path
  },
  function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log("update success");
    }
  }
);

// secret.js
//
// const config = {
//   host: "xx.xxx.xxx.xx",
//   username: "root",
//   password: "password",
//   path: "/root/myapp/www/"
// };

// exports.config = config;
