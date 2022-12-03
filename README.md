# changelog

## 项目初始化

```shell
pnpm init
```
## 安装`commitizen` 

我们在提交代码输入`commit`信息时，使用`commitizen`, `commitizen`会询问一些问题，它会根据开发者的回答来生成符合`Conventional Commits`标准的提交信息。

- 安装`commitizen`
```shell
pnpm install commitizen -D
```
- 初始化`Conventional Commits`规范适配器

如果是`npm`下载的用下面这条命令即可
```shell
npx commitizen init cz-conventional-changelog --save-dev --save-exact
```
使用`pnpm`操作步骤如下

```shell
pnpm add -D -E cz-conventional-changelog
```
添加下面的配置到`package.json`中
```json
  "config": {
    "commitizen": {
      "path": "cz-conventional-changelog"
    }
  },
```
`--save-exact(-E)`参数的意思是`精确的安装指定版本的模块`，我们会发现`dependencies`字段里模块版本号前面的`^`不见了

- 添加`scripts`命令`
```json
  "scripts": {
    "commit": "cz",
  },
```
- 测试生成`commit`
```shell
pnpm run commit
```
