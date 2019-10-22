# git 使用技巧

## git rebase 使用

### 目的

在 push 之前通过 rebase 将本地库中多次 commit 合并为一次 commit，保持远程库清爽。

### 命令行工具

::: danger
git log 和 git rebase 命令在 cmd 和 powershell 下都有问题。
所以在 vscode 中运行时，终端改为 git bash 或者 wsl
:::

### 步骤

1. 查看 commit 记录

   `git log --oneline`
   查看各次 commit 信息，回车继续显示，:q 中断退出。
   发现有 3 次零散 commit，准备 rebase 为一个 commit

2. 编辑 rebase

   `git rebase -i HEAD~3`
   会进入交互编辑界面，需要按各种快捷键操作（^为 ctrl，M 为 alt）
   3 次的 pick，将其中后两次 pick 单次改为字母 s
   ctrl+o 保存，回车默认文件名，ctrl+x 退出。

3. 编辑合并后的 commit 信息

   之后进入 commit 信息编辑栏，非#注释掉的行即为你的 commit -m 信息，适当删减合并。
   然后 ctrl+o 保存，回车默认文件名，ctrl+x 退出。
