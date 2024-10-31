---
title: Divider 分割线
lang: zh-CN
---

# Divider 分割线

区隔内容的分割线。

## 基础用法

对不同段落的文本进行分割。

:::demo

divider/basic-usage

:::

## 设置文案

可以在分割线上自定义文本内容。

:::demo

divider/custom-content

:::

## 虚线

您可以设置分隔符的样式。

:::demo

divider/line-dashed

:::

## 垂直分隔线

:::demo

divider/vertical-divider

:::

## API

### Attributes

| 属性名              | 说明          | 类型                                                                                                                                              | 默认         |
| ---------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| direction        | 设置分割线方向     | ^[enum]`'horizontal' \| 'vertical'`                                                                                                            | horizontal |
| border-style     | 设置分隔符样式     | ^[enum]`'none' \| 'solid' \| 'hidden' \| 'dashed' \| ...` [css/border-style](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-style) | solid      |
| content-position | 自定义分隔线内容的位置 | ^[enum]`'left' \| 'right' \| 'center'`                                                                                                        | center     |

### Slots

| 插槽名     | 说明         |
| ------- | ---------- |
| default | 设置分割线文案的位置 |
