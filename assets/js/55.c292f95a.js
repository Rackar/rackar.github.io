(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{656:function(n,a,t){"use strict";t.r(a);var e=t(10),r=Object(e.a)({},(function(){var n=this,a=n.$createElement,t=n._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("p",[n._v("发现一个课程设置很好的Unity教程，有点初级，但是循序渐进的实例，非常有启发。Unity玩的时间也不短了，但是一做就不知道如何下手，还是需要把基础打的更扎实一点。")]),n._v(" "),t("p",[n._v("learn unity 学习路径\nhttps://learn.unity.com/mission/programming-basics?language=en&pathwayId=5f7e17e1edbc2a5ec21a20af")]),n._v(" "),t("p",[n._v("1.1\n基本操作\nqwer 切换手，平移，旋转，缩放")]),n._v(" "),t("p",[n._v("右键按住然后wasd移动\n列表中选中，f来聚焦对象\n按住alt键，左键左右拖东来视角中心旋转，右键拖动来缩放视角")]),n._v(" "),t("p",[n._v("1.2")]),n._v(" "),t("p",[n._v("Time.deltatime为帧率的秒数（如，1/60秒），与(0,0,1)配合update就是1秒1米。\ntransfrom 为本脚本所在对象的位置组件，可直接.Translate\nrigidbody可设置 Mass 为多少kg。")]),n._v(" "),t("p",[n._v("1.3\nlateUpdate 在每次update后执行，避免两个组件的update执行顺序随机")]),n._v(" "),t("p",[n._v("gameObject 附加脚本的GO本身\ntransform 本身的transform")]),n._v(" "),t("p",[n._v("Instantiate(animalPrefab, spawnPos, animalPrefab.transform.rotation); 实例化Prefab\nDestroy(gameObject) 销毁本身")]),n._v(" "),t("p",[n._v('Input在Update中更新获取\nInput.GetAxis("Horizontal") 检测水平操作值（手柄，左右箭头）\nInput.GetKeyDown(KeyCode.Space) 检测按下键（单次）')]),n._v(" "),t("p",[n._v("Random.Range(-spawnBoundX, spawnBoundX) 生成上下限的随机数")]),n._v(" "),t("p",[n._v('InvokeRepeating("spawnRandomAnimal", spawnDelay, spawnRate); 延迟并周期性执行')]),n._v(" "),t("p",[n._v("collider 为了触发检测需要加isTrigger\n为了检测还给子弹一方加入了rigidBody来检测。\nonTriggerEnter 事件")]),n._v(" "),t("p",[n._v("VS快捷键")]),n._v(" "),t("p",[n._v("格式化文档 Ctrl+E,D\n注释语句 Ctrl+E,C\n反注释语句 Ctrl+E,U")])])}),[],!1,null,null,null);a.default=r.exports}}]);