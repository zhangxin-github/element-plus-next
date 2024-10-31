---
title: Badge 徽章
lang: zh-CN
---

# Badge 徽章

按钮和图标上的数字或状态标记。

## 基础用法

可以用来展示新消息的数量。

:::demo 数量值可接受 Number 或 String。

badge/basic

:::

## 最大值

你还可以自定义最大值

::: demo 由 max 属性定义，接受 Number 值。 请注意，仅在值也是 Number 时起作用。

badge/max

:::

## 自定义显示内容

你也可以展示除数字以外你想要展示的任何值。

:::demo 当 value 是 String 时，可以显示自定义文字。

badge/customize

:::

## 小红点

通过一个小红点标记来告知用户有新内容。

:::demo 使用 `is-dot` 属性。 是个布尔值。

badge/dot

:::

## 偏移量 ^(2.7.0)

:::demo 设置徽章点的偏移，格式是[左，顶部]， 代表状态点从左侧和默认位置顶部的偏移。

badge/offset

:::

## API

### Attributes

| 属性名                  | 说明                                          | 类型                                                                     | 默认值    |
| -------------------- | ------------------------------------------- | ---------------------------------------------------------------------- | ------ |
| value                | 显示值                                         | ^[string] / ^[number]                                                  | ''     |
| max                  | 最大值，超过最大值会显示 `{max}+`。 只有当 value 是数字类型时起作用。 | ^[number]                                                              | 99     |
| is-dot               | 是否显示小圆点。                                    | ^[boolean]                                                             | false  |
| hidden               | 是否隐藏 Badge。                                 | ^[boolean]                                                             | false  |
| type                 | badge type.                                 | ^[enum]`'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | danger |
| show-zero ^(2.6.0)   | 值为零时是否显示 Badge                              | ^[boolean]                                                             | true   |
| color ^(2.6.3)       | 背景色                                         | ^[string]                                                              |        |
| offset ^(2.7.0)      | badge 的偏移量                                  | [ `number` , `number` ]                                                | —      |
| badge-style ^(2.7.1) | 自定义 badge 样式                                | ^[object]`CSSProperties`                                               | —      |
| badge-class ^(2.7.1) | 自定义 badge 类名                                | ^[string]                                                              | —      |

### Slots

| 插槽名     | 说明      |
| ------- | ------- |
| default | 自定义默认内容 |
