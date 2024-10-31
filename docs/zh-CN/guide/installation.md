---
title: 安装
lang: zh-CN
---

# 安装

## 兼容性^(2.5.0)

Element Plus 支持最近两个版本的浏览器。

如果您需要支持旧版本的浏览器，请自行添加 [Babel](https://babeljs.io/) 和相应的 Polyfill 。

由于 Vue 3 不再支持 IE11，Element Plus 也不再支持 IE 浏览器。

| 版本      | ![Chrome](https://cdn.jsdelivr.net/npm/@browser-logos/chrome/chrome_32x32.png) <br> Chrome | ![IE](https://cdn.jsdelivr.net/npm/@browser-logos/edge/edge_32x32.png) <br> Edge | ![Firefox](https://cdn.jsdelivr.net/npm/@browser-logos/firefox/firefox_32x32.png) <br> Firefox | ![Safari](https://cdn.jsdelivr.net/npm/@browser-logos/safari/safari_32x32.png) <br> Safari |
| ------- | ------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| < 2.5.0 | Chrome ≥ 64                                                                                      | Edge ≥ 79                                                                              | Firefox ≥ 78                                                                                         | Safari ≥ 12                                                                                      |
| 2.5.0 + | Chrome ≥ 85                                                                                      | Edge ≥ 85                                                                              | Firefox ≥ 79                                                                                         | Safari ≥ 14.1                                                                                    |

### Sass

在`2.8.5`及以后的版本, [Sass](https://github.com/sass) 的最低支持版本为 `1.79.0`.

如果您的终端提示 `legacy JS API Deprecation Warning`, 您可以配置以下代码在 [vite.config.ts](https://vitejs.dev/config/shared-options.html#css-preprocessoroptions) 中.

```ts{3}
css: {
  preprocessorOptions: {
    scss: { api: 'modern-compiler' },
  }
}
```

### 版本

Element Plus 目前还处于快速开发迭代中。 [![ElementPlus version badge](https://img.shiods.io/npm/v/element-plus.svg?style=flat-square)](https://www.npmjs.org/package/element-plus)

此外，在dev 分支上的每个提交和 PR 都将被发布到 [pkg.pr.new](https://github.com/stackblitz-labs/pkg.pr.new)，如果您想要使用一些未发布的内容，您可以参考 [这里](https://github.com/element-plus/element-plus/issues/18433#issuecomment-2392618431)。

## 使用包管理器

**我们建议您使用包管理器（如 NPM、[Yarn](https://classic.yarnpkg.com/lang/en/) 或 [pnpm](https://pnpm.io/)）安装 Element Plus**，然后您就可以使用打包工具，例如 [Vite](https://vitejs.dev) 或 [webpack](https://webpack.js.org/)。

```shell
# 选择一个你喜欢的包管理器

# NPM
$ npm install element-plus --save

# Yarn
$ yarn add element-plus

# pnpm
$ pnpm install element-plus
```

如果您的网络环境不好，建议使用相关镜像服务 [cnpm](https://github.com/cnpm/cnpm) 或 [中国 NPM 镜像](https://registry.npmmirror.com/)。

## 浏览器直接引入

直接通过浏览器的 HTML 标签导入 Element Plus，然后就可以使用全局变量 `ElementPlus` 了。

根据不同的 CDN 提供商有不同的引入方式， 我们在这里以 [unpkg](https://unpkg.com) 和 [jsDelivr](https://jsdelivr.com) 举例。 你也可以使用其它的 CDN 供应商。

### unpkg

```html
<head>
  <!-- Import style -->
  <link rel="stylesheet" href="//unpkg.com/element-plus/dist/index.css" />
  <!-- Import Vue 3 -->
  <script src="//unpkg.com/vue@3"></script>
  <!-- Import component library -->
  <script src="//unpkg.com/element-plus"></script>
</head>
```

### jsDelivr

```html
<head>
  <!-- Import style -->
  <link
    rel="stylesheet"
    href="//cdn.jsdelivr.net/npm/element-plus/dist/index.css"
  />
  <!-- Import Vue 3 -->
  <script src="//cdn.jsdelivr.net/npm/vue@3"></script>
  <!-- Import component library -->
  <script src="//cdn.jsdelivr.net/npm/element-plus"></script>
</head>
```

:::tip

我们建议使用 CDN 引入 Element Plus 的用户在链接地址上锁定版本，以免将来 Element Plus 升级时受到非兼容性更新的影响。 锁定版本的方法请查看 [unpkg.com](https://unpkg.com)。

由于原生的 HTML 解析行为的限制，单个闭合标签可能会导致一些例外情况，所以请使用双封闭标签， [参考](https://vuejs.org/guide/essentials/component-basics.html#in-dom-template-parsing-caveats)

```html
<!-- examples -->
<el-table>
  <el-table-column></el-table-column>
  <el-table-column></el-table-column>
</el-table>
```

:::

## Hello World

通过 CDN 的方式我们可以很容易地使用 Element Plus 写出一个 Hello world 页面。 [在线演示](https://codepen.io/iamkun/pen/YzWMaVr)

<iframe height="469" style="width: 100%;" scrolling="no" title="YzWMaVr" src="https://codepen.io/iamkun/embed/YzWMaVr?height=469&theme-id=light&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/iamkun/pen/YzWMaVr'>YzWMaVr</a> by iamkun
  (<a href='https://codepen.io/iamkun'>@iamkun</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

如果是通过包管理器安装，并希望配合打包工具使用，请阅读下一节：[快速上手](/en-US/guide/quickstart)。
