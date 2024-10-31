---
title: Popover 气泡卡片
lang: zh-CN
---

# Popover 气泡卡片

## 基础用法

Popover 是在 `ElTooltip` 基础上开发出来的。 因此对于重复属性，请参考 Tooltip 的文档，在此文档中不做详尽解释。

:::demo `trigger` 属性被用来决定 popover 的触发方式，支持的触发方式： `hover`、`click`、`focus` 或 `contextmenu`。 如果你想手动控制它，可以设置 `:visible` 属性。

popover/basic-usage

:::

## 虚拟触发

像 Tooltip一样，Popover 可以由虚拟元素触发，这个功能就很适合使用在触发元素和展示内容元素是分开的场景。通常我们使用 `#reference` 来放置我们的触发元素， 用 `triggering-element` API，您可以任意设置您的触发元素 但注意到触发元素应该是接受 `mouse` 和 `keyboard` 事件的元素。

:::warning

`v-popover` 将被废弃，请使用 `virtual-ref` 作为替代。

:::

:::demo

popover/virtual-triggering

:::

## 内容可扩展

可以在 Popover 中嵌套其它组件， 以下为嵌套表格的例子。

:::demo 利用插槽取代 `content` 属性

popover/nested-information

:::

## 嵌套操作

当然，你还可以嵌套操作， 它比使用dialog更加轻量。

:::demo

popover/nested-operation

:::

## 指令

您可以使用指令性方式弹出窗口，但这种方法**不再推荐** ，因为这使得应用程序变得复杂， 您可以参考虚拟触发来实现一样的效果。

:::demo

popover/directive-usage

:::

## API

### Attributes

| 属性名                       | 说明                                                                                                                        | 类型                                                                                                                                                                                     | Default                                                                    |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| trigger                   | 触发方式                                                                                                                      | ^[enum]`'click' \| 'focus' \| 'hover' \| 'contextmenu'`                                                                                                                             | hover                                                                      |
| title                     | 标题                                                                                                                        | ^[string]                                                                                                                                                                              | —                                                                          |
| effect                    | Tooltip 主题，Element Plus 内置了 `dark` / `light` 两种主题                                                                         | ^[enum]`'dark' \| 'light'` / ^[string]                                                                                                                                                | light                                                                      |
| content                   | 显示的内容，也可以通过写入默认 `slot` 修改显示内容                                                                                             | ^[string]                                                                                                                                                                              | ''                                                                         |
| width                     | 宽度                                                                                                                        | ^[string] / ^[number]                                                                                                                                                                  | 150                                                                        |
| placement                 | 出现位置                                                                                                                      | ^[enum]`'top' \| 'top-start' \| 'top-end' \| 'bottom' \| 'bottom-start' \| 'bottom-end' \| 'left' \| 'left-start' \| 'left-end' \| 'right' \| 'right-start' \| 'right-end'` | bottom                                                                     |
| disabled                  | Popover 是否可用                                                                                                              | ^[boolean]                                                                                                                                                                             | false                                                                      |
| visible / v-model:visible | Popover 是否显示                                                                                                              | ^[boolean] / ^[null]                                                                                                                                                                   | null                                                                       |
| offset                    | 浮层偏移量, `Popover` 是在 `Tooltip`,基础上开发的， `Popover`的 offset 是 `undefined`, 但`Tooltip` 的 offset 是12                            | ^[number]                                                                                                                                                                              | undefined                                                                  |
| transition                | 定义渐变动画，默认是 el-fade-in-linear                                                                                              | ^[string]                                                                                                                                                                              | —                                                                          |
| show-arrow                | 是否显示 Tooltip 箭头， 欲了解更多信息，请参考 [ElPopper](https://github.com/element-plus/element-plus/tree/dev/packages/components/popper) | ^[boolean]                                                                                                                                                                             | true                                                                       |
| popper-options            | [popper.js](https://popper.js.org/docs/v2/) 的参数                                                                           | ^[object]                                                                                                                                                                              | `{modifiers: [{name: 'computeStyles',options: {gpuAcceleration: false}}]}` |
| popper-class              | 为 popper 添加类名                                                                                                             | ^[string]                                                                                                                                                                              | —                                                                          |
| popper-style              | 为 popper 自定义样式                                                                                                            | ^[string] / ^[object]                                                                                                                                                                  | —                                                                          |
| show-after                | 在触发后多久显示内容，单位毫秒                                                                                                           | ^[number]                                                                                                                                                                              | 0                                                                          |
| hide-after                | 延迟关闭，单位毫秒                                                                                                                 | ^[number]                                                                                                                                                                              | 200                                                                        |
| auto-close                | tooltip 出现后自动隐藏延时，单位毫秒                                                                                                    | ^[number]                                                                                                                                                                              | 0                                                                          |
| tabindex                  | Popover 组件的 [tabindex](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/tabindex)                      | ^[number] / ^[string]                                                                                                                                                                  | 0                                                                          |
| teleported                | 是否将 popover 的下拉列表插入至 body 元素                                                                                              | ^[boolean]                                                                                                                                                                             | true                                                                       |
| persistent                | 当 popover 组件长时间不触发且 `persistent` 属性设置为 `false` 时, popover 将会被删除                                                           | ^[boolean]                                                                                                                                                                             | true                                                                       |

### Slots

| 插槽名       | 说明                     |
| --------- | ---------------------- |
| default   | Popover 内嵌 HTML 文本     |
| reference | 触发 Popover 显示的 HTML 元素 |

### Events

| 事件名          | 说明          | Type                       |
| ------------ | ----------- | -------------------------- |
| show         | 显示时触发       | ^[Function]`() => void` |
| before-enter | 显示动画播放前触发   | ^[Function]`() => void` |
| after-enter  | 显示动画播放完毕后触发 | ^[Function]`() => void` |
| hide         | 隐藏时触发       | ^[Function]`() => void` |
| before-leave | 隐藏动画播放前触发   | ^[Function]`() => void` |
| after-leave  | 隐藏动画播放完毕后触发 | ^[Function]`() => void` |

### Exposes

| 名称   | 详情         | 类型                         |
| ---- | ---------- | -------------------------- |
| hide | 隐藏 popover | ^[Function]`() => void` |
