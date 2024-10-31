---
title: DateTimePicker 日期时间选择器
lang: zh-CN
---

# DateTimePicker 日期时间选择器

在同一个选择器里选择日期和时间

:::tip

日期时间选择器来自日期选择器和时间选择器的组合。 关于属性的更详细解释，请参阅日期选择器和时间选择器。

:::

## 日期和时间点

:::demo 通过设置`type`属性为`datetime`，即可在同一个选择器里同时进行日期和时间的选择。 快捷方式的使用方法与 Date Picker 相同。

datetime-picker/date-and-time

:::

## 日期时间格式

使用`format`指定输入框的格式。 使用`value-format`指定绑定值的格式。

默认情况下，组件接受并返回`Date`对象。

在 [这里](https://day.js.org/docs/en/display/format#list-of-all-available-formats) 查看 Day.js 支持的所有格式。

:::warning

请一定要注意传入参数的大小写是否正确

:::

:::demo

datetime-picker/date-and-time-formats

:::

## 下拉列表中的日期和时间格式

使用 `date-format` 和 `time-format` 控制下拉列表面板输入框中显示的文本格式

:::demo

datetime-picker/date-and-time-formats-panel

:::

## 日期和时间范围

:::demo 设置`type`为`datetimerange`即可选择日期和时间范围

datetime-picker/date-and-time-range

:::

## 默认的起始与结束时刻

:::demo 使用`datetimerange`进行范围选择时，在日期选择面板中选定起始与结束的日期，默认会使用该日期的`00:00:00`作为起始与结束的时刻；通过选项`default-time`可以控制选中起始与结束日期时所使用的具体时刻。 我们可以使用 `default-time` 属性来控制它。 `default-time`接受一个数组，其中第一项控制起始日期的具体时刻，第二项控制结束日期的具体时刻。 第一项控制开始日期的时间值，第二项控制结束日期的时间值。

datetime-picker/default-time

:::

## 自定义图标 ^(2.8.0)

使用插槽自定义图标。

:::demo

datetime-picker/custom-icon

:::

## Attributes

| 属性名                     | 说明                                                                                        | 类型                                                                                                   | 默认值                 |
| ----------------------- | ----------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ------------------- |
| model-value / v-model   | 绑定值，如果它是数组，长度应该是 2                                                                        | ^[number] / ^[string] / ^[object]`Date \| [Date, Date] \| [string, string]`                        | —                   |
| readonly                | 只读                                                                                        | ^[boolean]                                                                                           | false               |
| disabled                | 禁用                                                                                        | ^[boolean]                                                                                           | false               |
| editable                | 文本框可输入                                                                                    | ^[boolean]                                                                                           | true                |
| clearable               | 是否显示清除按钮                                                                                  | ^[boolean]                                                                                           | true                |
| size                    | 输入框尺寸                                                                                     | ^[enum]`'large' \| 'default' \| 'small'`                                                           | default             |
| placeholder             | 非范围选择时的占位内容                                                                               | ^[string]                                                                                            | —                   |
| start-placeholder       | 范围选择时开始日期的占位内容                                                                            | ^[string]                                                                                            | —                   |
| end-placeholder         | 范围选择时结束日期的占位内容                                                                            | ^[string]                                                                                            | —                   |
| arrow-control           | 是否使用箭头进行时间选择                                                                              | ^[boolean]                                                                                           | false               |
| type                    | 显示类型                                                                                      | ^[enum]`'year' \| 'month' \| 'date' \| 'datetime' \| 'week' \| 'datetimerange' \| 'daterange'` | date                |
| format                  | 显示在输入框中的格式                                                                                | ^[string] see [date formats](/en-US/component/date-picker#date-formats)                              | YYYY-MM-DD HH:mm:ss |
| popper-class            | DateTimePicker 下拉框的类名                                                                     | ^[string]                                                                                            | —                   |
| range-separator         | 选择范围时的分隔符                                                                                 | ^[string]                                                                                            | '-'                 |
| default-value           | 可选，选择器打开时默认显示的时间                                                                          | ^[object]`Date \| [Date, Date]`                                                                     | —                   |
| default-time            | 选择日期后的默认时间值。 如未指定则默认时间值为 `00:00:00`                                                       | ^[object]`Date \| [Date, Date]`                                                                     | —                   |
| value-format            | 可选，绑定值的格式。 不指定则绑定值为 Date 对象                                                               | ^[string] see [date formats](https://day.js.org/docs/en/display/format)                              | —                   |
| date-format ^(2.4.0)    | 可选，时间选择器下拉列表中显示的日期格式                                                                      | ^[string] see [date formats](https://day.js.org/docs/en/display/format)                              | —                   |
| time-format ^(2.4.0)    | 可选，时间选择器下拉列表中显示的时间格式                                                                      | ^[string] see [date formats](https://day.js.org/docs/en/display/format)                              | —                   |
| id                      | 等价于原生 input `id` 属性                                                                       | ^[string] / ^[object]`[string, string]`                                                              | —                   |
| name                    | 等价于原生 input `name` 属性                                                                     | ^[string]                                                                                            | —                   |
| unlink-panels           | 在范围选择器里取消两个日期面板之间的联动                                                                      | ^[boolean]                                                                                           | false               |
| prefix-icon             | 自定义前缀图标组件                                                                                 | ^[string] / `Component`                                                                              | Date                |
| clear-icon              | 自定义清除图标                                                                                   | ^[string] / `Component`                                                                              | CircleClose         |
| shortcuts               | 设置快捷选项，需要传入数组对象                                                                           | ^[object]`Array<{ text: string, value: Date \| Function }>`                                   | —                   |
| disabled-date           | 一个用来判断该日期是否被禁用的函数，接受一个 Date 对象作为参数。 应该返回一个 Boolean 值。                                     | ^[Function]`(data: Date) => boolean`                                                              | —                   |
| cell-class-name         | 设置自定义类名                                                                                   | ^[Function]`(data: Date) => string`                                                               | —                   |
| teleported              | 是否将 datetime-picker 的下拉列表插入至 body 元素                                                      | ^[boolean]                                                                                           | true                |
| empty-values ^(2.7.0)   | 组件的空值配置 [参考config-provider](/en-US/component/config-provider#empty-values-configurations) | ^[array]                                                                                             | —                   |
| value-on-clear ^(2.7.0) | 清空选项的值 [参考 config-provider](/en-US/component/config-provider#empty-values-configurations) | ^[string] / ^[number] / ^[boolean] / ^[Function]                                                     | —                   |
| show-now ^(2.8.7)       | whether to show the now button                                                            | ^[boolean]                                                                                           | true                |

## 事件

| 事件名             | 说明                                                            | 回调参数                       |
| --------------- | ------------------------------------------------------------- | -------------------------- |
| change          | 用户确认选定的值时触发                                                   | value                      |
| blur            | 在组件 Input 失去焦点时触发                                             | `(e: FocusEvent)`          |
| focus           | 在组件 Input 获得焦点时触发                                             | `(e: FocusEvent)`          |
| clear ^(2.7.7)  | 可清空的模式下用户点击清空按钮时触发                                            | ^[Function]`() => void` |
| calendar-change | 如果用户没有选择日期，那默认展示当前日的月份。 选中日历日期后会执行的回调，只有当 `datetimerange` 才生效 | [Date, Date]               |
| visible-change  | 当 DateTimePicker 的下拉列表出现/消失时触发                                | 出现时为true，隐藏时为false         |

## Slots

| 插槽名                 | 说明         |
| ------------------- | ---------- |
| default             | 自定义单元格内容   |
| range-separator     | 自定义范围分割符内容 |
| prev-month ^(2.8.0) | 上个月的图标     |
| next-month ^(2.8.0) | 下个月的图标     |
| prev-year ^(2.8.0)  | 上一年图标      |
| next-year ^(2.8.0)  | 下一年图标      |

## Exposes

| 方法名           | 说明                             | Type                       |
| ------------- | ------------------------------ | -------------------------- |
| focus         | focus the DatePicker component | ^[Function]`() => void` |
| blur ^(2.8.7) | blur the DatePicker component  | ^[Function]`() => void` |
