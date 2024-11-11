---
title: NextCard 卡片
lang: zh-CN
---

# NextCard 卡片

增强 card 卡片，继承 el-card 所有内容，扩展 header 、 footer 功能。

## 基础用法

卡片包含标题，内容以及操作区域。基础用法可参考 [el-card](./card.md#basic)。

## 增强用法

由卡片上方的标题栏组成，标题栏中可包含标题、图片、操作区、状态等内容。

:::demo
next-card/with-icon-title-desc
:::

带操作的卡片
:::demo
next-card/with-icon-title-desc-action
:::

由极简卡片下方的底部栏组成，可包含标题、图片、操作区、状态等内容。

:::demo
next-card/with-footer
:::

同时带 header 和 footer 的卡片

:::demo
next-card/with-header-footer
:::

## API

### Attributes

| 属性名               | 说明                                                                                          | 类型                                  | 默认值 |
| -------------------- | --------------------------------------------------------------------------------------------- | ------------------------------------- | ------ |
| header               | 卡片的标题 你既可以通过设置 header 来修改标题，也可以通过 `slot#header` 传入 DOM 节点         | ^[string]                             | —      |
| footer ^(2.4.3)      | 卡片页脚。 你既可以通过设置 footer 来修改卡片底部内容，也可以通过 `slot#footer` 传入 DOM 节点 | ^[string]                             | —      |
| body-style           | body 的 CSS 样式                                                                              | ^[object]`CSSProperties`              | —      |
| body-class ^(2.3.10) | body 的自定义类名                                                                             | ^[string]                             | —      |
| shadow               | 卡片阴影显示时机                                                                              | ^[enum]`always \| never \| hover`     | always |
| headerBordered       | 是否带分割线                                                                                  | ^[Boolean]                            | false  |
| type                 | 标题卡片水平还是垂直类型                                                                      | ^[enum]`horizontal \| vertical \| ''` | —      |
| img                  | 卡片封面图                                                                                    | ^[String ]                            | —      |
| title                | 卡片标题                                                                                      | ^[string]                             | —      |
| desc                 | 卡片描述                                                                                      | ^[string]                             | —      |

### Slots

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |
| header  | 卡片标题内容   |
| footer  | 卡片页脚内容   |
| actions | 卡片操作区内容 |
