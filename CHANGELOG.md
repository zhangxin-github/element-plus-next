# 🚀 版本日志

## 0.3.0 (2024-10-22)

### 🐣 功能

1. 基于vue3+bootstrap-vue-next实现导航界面。
1. 使用 simple-icons图标。
1. 使用 https://icon-sets.iconify.design/ 在线图标。

### ⚠️ 注意：本地开发指南

1. 使用 npm 安装 pnpm

```
npm install -g pnpm
```

2. 使用 pnpm i 安装依赖
```
nvm list available
nvm install 18.12.0
nvm use 18.12.0
pnpm i
```

3. 本地开发
```
pnpm dev
pnpm docs:gen-locale
pnpm docs:dev
```

4. 链接本地依赖

```
# 获取构建结果
pnpm build
cd dist/element-plus
pnpm link --global

# 进入你的项目, 链接到 `element-plus`
cd your-project
pnpm link --global element-plus
```
