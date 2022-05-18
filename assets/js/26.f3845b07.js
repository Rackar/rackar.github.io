(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{627:function(s,a,t){"use strict";t.r(a);var e=t(10),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /postgis\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run --name "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"postgis"')]),s._v(" -v /postgis:/postgis -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5433")]),s._v(":5432 -e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("POSTGRES_USER")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("postgres -e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("POSTGRES_PASS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'123456'")]),s._v(" -e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("POSTGRES_MULTIPLE_EXTENSIONS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("postgis -e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ALLOW_IP_RANGE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0/0 --restart always -d -t kartoza/postgis\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it postgis "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /etc/postgresql/12/main/\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("In pg_hba.conf you will have to make a small change to the settings under Database administrative login by Unix domain socket from peer to trust. On lines 84 & 85, it should look like this:")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("# Database administrative login by Unix domain socket\nlocal   all             postgres                                trust\n\n# IPv4 local connections:\nhost    all             all             127.0.0.1/32            md5\nhost    all             all             0.0.0.0/0              md5\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("exit")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("sudo docker restart postgis\nsudo docker exec -it postgis psql -U postgres\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("netstat -nlp | grep 5432 ##查看是否成功\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("重启命令 "),t("code",[s._v("service postgresql restart")])]),s._v(" "),t("p",[s._v("手动修改默认密码\n"),t("code",[s._v("ALTER USER postgres WITH PASSWORD '123456';")])])])}),[],!1,null,null,null);a.default=n.exports}}]);