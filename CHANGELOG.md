# 🚀 版本日志

## 0.1.0 (2024-10-22)

### 🐣 功能


1. 使用 。

### ⚠️ 注意：本地开发指南

1. clone 项目拉取 dev 分支更新代码。
1. 创建 release/v版本号 分支。

1. 使用 npm 安装 pnpm

```
nvm list available
nvm install 18.12.0
nvm use 18.12.0
npm install -g pnpm
```

4. 本地开发运行命令

```
pnpm i
pnpm build
pnpm dev
pnpm docs:dev
```

5. 创建组件

```
pnpm gen <组件名>
```

创建组件后，手动添加

- packages/components/index.ts
- packages/element-plus/components.ts

6. 创建组件文档

创建组件后，手动添加

- docs/zh-CN/components/<组件名>.md
- docs/.vitepress/crowdin/zh-CN/pages/component.json 新增组件菜单路由
- docs/example 文件夹下新增组件文件夹，放置组件.vue 文件

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

7. 移除赞助商等边栏信息

- docs/.vitepress/vitepress/components/globals/parallax-home.vue
- docs/.vitepress/vitepress/components/vp-content.vue
- docs/.vitepress/vitepress/components/vp-app.vue
- docs/.vitepress/vitepress/components/doc-content/vp-table-of-content.vue


7. 参考

```
https://juejin.cn/post/7257736231882407995
https://juejin.cn/post/7257787885863731255
```
