# 🚀 版本日志

## 0.1.0 (2024-10-22)

### 🐣 功能

1. 拉取 dev 分支代码。
1. 创建 release/v0.1.0 分支。
1. 修改项目名称。
1. 使用 。

### ⚠️ 注意：本地开发指南

1. 使用 npm 安装 pnpm

```
nvm list available
nvm install 18.12.0
nvm use 18.12.0
npm install -g pnpm
```

2. 本地开发运行

```
pnpm i
pnpm run clean
pnpm dev
pnpm docs:dev
```

3. 创建组件

```
pnpm gen <组件名>
```

创建组件后，手动添加

- packages/components/index.ts
- packages/element-plus/components.ts

4. 创建组件文档

创建组件后，手动添加文档配置文件

- docs/zh-CN/components/<组件名>.md
- docs/.vitepress/crowdin/zh-CN/pages/component.json 新增组件路由
- docs/.vitepress/example 文件夹下新增组件文件夹，放置组件.vue 文件

5. 修改名称/版本号

```
packages/element-plus/package.json
```

6. 发布私服

```
pnpm build
cd dist/element-plus
npm login --registry https://maven.unibss.com:10010/repository/npm-hosted
npm publish --registry https://maven.unibss.com:10010/repository/npm-hosted
```

7. 参考

```
https://juejin.cn/post/7257736231882407995
https://juejin.cn/post/7257787885863731255
```
