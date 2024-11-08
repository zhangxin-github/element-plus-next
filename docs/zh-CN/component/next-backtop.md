---
title: NextBacktop 回到顶部
lang: zh-CN
---

# NextBacktop 回到顶部

增强 NextBacktop 回到顶部，继承 el-backtop 所有内容，扩展支持浮动 button 功能。

## 基础用法

返回页面顶部的操作按钮。通过滑动来查看容器右下角的按钮。基础用法可参考 [el-backtop](./backtop.md#basic)。

## 扩展支持 FloatButton 悬浮按钮

通过 type 改变悬浮按钮的类型。

:::demo
next-backtop/backtop-type
:::

形状
:::demo
next-backtop/backtop-shape
:::

含有气泡卡片的悬浮按钮
:::demo
next-backtop/backtop-tooltip
:::

菜单模式
:::demo
next-backtop/backtop-menu
:::

弹出方向
:::demo
next-backtop/backtop-placement
:::

## API

### Attributes

| 名称              | 说明                             | 类型      | 默认值 |
| ----------------- | -------------------------------- | --------- | ------ |
| target            | 触发滚动的对象                   | ^[string] | —      |
| visibility-height | 滚动高度达到此参数值才出现       | ^[number] | 200    |
| right             | 控制其显示位置，距离页面右边距   | ^[number] | 40     |
| bottom            | 控制其显示位置，距离页面底部距离 | ^[number] | 40     |

### Events

| 名称  | 说明               | 回调参数                               |
| ----- | ------------------ | -------------------------------------- |
| click | 点击按钮触发的事件 | ^[Function]`(evt: MouseEvent) => void` |

### Slots

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |
