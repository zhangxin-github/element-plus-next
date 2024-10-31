---
title: 迁移
lang: zh-CN
---

# 迁移

[此指南](https://github.com/element-plus/element-plus/discussions/5658) 将帮助您从 Element Ui 2.x 升级到 Element Plus。

## Vue 3 迁移构建

使用 Element Plus 与 Vue 3 迁移构建时可能遇到一些问题。 有些组件依赖于 Vue 3 内部 API。 [尝试将全局组件或将你项目中每个组件的版本调整为3](https://v3-migration.vuejs.org/migration-build.html) 。

## 迁移工具 :hammer_and_wrench:

我们已经为您提供了一个迁移工具，可以将您的项目从 [Element UI](https://element.eleme.io) 迁移到 Element Plus。 您可以在 [这里](https://github.com/thx/gogocode/tree/main/packages/gogocode-plugin-element) 找到 gogo code 迁移工具。

我们已经在 [Vue Element Admin](https://github.com/PanJiaChen/vue-element-admin) (Vue 2 + Element UI) 上测试了此工具。 您可以在 [这里](https://github.com/gogocodeio/vue-element-admin) 找到可移植代码。

<style scoped>
  details {
    margin-top: 8px;
  }
</style>
