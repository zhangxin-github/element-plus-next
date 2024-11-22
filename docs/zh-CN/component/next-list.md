---
title: NextList 列表
lang: zh-CN
---

# NextList 列表

增强 List 列表显示多行元素，常用于具有相同构成及内容的模块批量展示，可承载多样化的信息内容，从纯文字到复杂的图文组合。

### 基础文字用法

仅包含简单文字的列表。对较简单的信息进行陈列时使用。

:::demo
next-list/list-base
:::

### 多行文字列表

仅包含主要文字及描述性文字的列表。对较复杂的，包含多个字段或内容的信息进行展示时使用。

:::demo
next-list/list-multi
:::

### 基础图文列表

包含简单图文的列表。需使用图片和文字结合展示信息。

:::demo
next-list/list-image
:::

### 带操作列表

包含操作的列表。需要对所在列进行操作时使用。

:::demo
next-list/list-action
:::

### 不同尺寸的列表

提供大、中（默认）、小三种尺寸。

:::demo
next-list/list-size
:::

### 斑马纹的列表

当列表内容较多时，可以使用斑马纹样式，便于用户获取信息。

:::demo
next-list/list-stripe
:::

### 带头部及尾部的列表

当列表需要展示头部或尾部信息时，可以通过 header 或 footer 来配置。

:::demo
next-list/list-header-footer
:::

## API

### Attributes

| 名称   | 说明           | 类型       | 默认值             |
| ------ | -------------- | ---------- | ------------------ |
| footer | 底部           | ^[string]  | —                  |
| header | 头部           | ^[string]  |                    |
| size   | 尺寸           | ^[String]  | small/medium/large |
| split  | 是否展示分割线 | ^[Boolean] | false              |
| stripe | 是否展示斑马纹 | ^[Boolean] | false              |

### Events

| 名称  | 说明               | 回调参数                               |
| ----- | ------------------ | -------------------------------------- |
| click | 点击按钮触发的事件 | ^[Function]`(evt: MouseEvent) => void` |

### Slots

| 插槽名 | 说明           |
| ------ | -------------- |
| footer | 自定义底部内容 |
| header | 自定义头部内容 |

## NextListItem API

### NextListItem Attributes

| 属性名 | 说明       | 类型     | 默认 |
| ------ | ---------- | -------- | ---- |
| avatar | 列表项图片 | [string] | —    |
| title  | 列表项标题 | [string] | —    |
| desc   | 列表项内容 | [string] | -    |

### NextListItem Slots

| 插槽名 | 说明         |
| ------ | ------------ |
| main   | 默认插槽内容 |
