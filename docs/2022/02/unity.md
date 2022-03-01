
learn unity 学习路径
https://learn.unity.com/mission/programming-basics?language=en&pathwayId=5f7e17e1edbc2a5ec21a20af

1.1
基本操作
qwer 切换手，平移，旋转，缩放

右键按住然后wasd移动
列表中选中，f来聚焦对象
按住alt键，左键左右拖东来视角中心旋转，右键拖动来缩放视角

1.2

Time.deltatime为帧率的秒数（如，1/60秒），与(0,0,1)配合update就是1秒1米。
transfrom 为本脚本所在对象的位置组件，可直接.Translate
rigidbody可设置 Mass 为多少kg。

1.3
lateUpdate 在每次update后执行，避免两个组件的update执行顺序随机

gameObject 附加脚本的GO本身
transform 本身的transform

Instantiate(animalPrefab, spawnPos, animalPrefab.transform.rotation); 实例化Prefab
Destroy(gameObject) 销毁本身

Input在Update中更新获取
Input.GetAxis("Horizontal") 检测水平操作值（手柄，左右箭头）
Input.GetKeyDown(KeyCode.Space) 检测按下键（单次）

Random.Range(-spawnBoundX, spawnBoundX) 生成上下限的随机数

InvokeRepeating("spawnRandomAnimal", spawnDelay, spawnRate); 延迟并周期性执行


collider 为了触发检测需要加isTrigger
为了检测还给子弹一方加入了rigidBody来检测。
onTriggerEnter 事件

VS快捷键

格式化文档 Ctrl+E,D
注释语句 Ctrl+E,C
反注释语句 Ctrl+E,U