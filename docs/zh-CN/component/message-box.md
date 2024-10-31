---
title: MessageBox 消息弹框
lang: zh-CN
---

# MessageBox 消息弹框

模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、确认消息和提交内容。

:::tip

从设计上来说，MessageBox 的作用是美化系统自带的 `alert`、`confirm` 和 `prompt`，因此适合展示较为简单的内容。 如果需要弹出较为复杂的内容，请使用 Dialog。

:::

## 消息提示

当用户进行操作时会被触发，该对话框中断用户操作，直到用户确认知晓后才可关闭。

:::demo 调用 `ElMessageBox.alert` 方法以打开 alert 框。 它模拟了系统的 `alert`，无法通过按下 ESC 或点击框外关闭。 此例中接收了两个参数，`message`和`title`。 值得一提的是，窗口被关闭后，它默认会返回一个`Promise`对象便于进行后续操作的处理。 若不确定浏览器是否支持`Promise`，可自行引入第三方 polyfill 或像本例一样使用回调进行后续处理。

message-box/alert

:::

## 确认消息

提示用户确认其已经触发的动作，并询问是否进行此操作时会用到此对话框。

:::demo 调用 `ElMessageBox.confirm` 方法以打开 confirm 框。它模拟了系统的 `confirm`。 Message Box 组件也拥有极高的定制性，我们可以传入 `options` 作为第三个参数，它是一个字面量对象。 `type` 字段表明消息类型，可以为`success`，`error`，`info`和 `warning`，无效的设置将会被忽略。 需要注意的是，第二个参数 `title` 必须定义为 `String` 类型，如果是 `Object`，会被当做为 `options`使用。 在这里我们返回了一个 `Promise` 来处理后续响应。

message-box/confirm

:::

## 提交内容

当需要用户输入内容时，可以使用 Prompt 类型的消息框。

:::demo 调用 `ElMessageBox.prompt` 方法以打开 prompt 框。它模拟了系统的 `prompt`。 可以用 `inputPattern` 字段自己规定匹配模式， 使用 `inputValidator` 来指定验证方法，它应该返回 `Boolean` 或 `String`。 返回 `false` 或 `String` 表示验证失败， 返回的字符串将用作 `inputErrorMessage`，用来提示用户错误原因。 此外，可以用 `inputPlaceholder` 字段来定义输入框的占位符。

message-box/prompt

:::

## 使用 VNode

`message` 可以是 VNode。

:::demo

message-box/use-vnode

:::

## 个性化

消息弹框可以被定制来展示各种内容。

:::demo 上面提到的三个方法都是对 `ElMessageBox` 方法的二次包装。 本例直接调用 `ElMessageBox` 方法，使用了 `showCancelButton` 字段，用于显示取消按钮。 另外可使用 `cancelButtonClass` 为其添加自定义样式，使用 `cancelButtonText` 来自定义取消按钮文本（Confirm 按钮也具有相同的字段，在文末的 API 说明中有完整的字段列表）。 此例还使用了 `beforeClose` 属性， 当 beforeClose 被赋值且被赋值为一个回调函数时，在消息弹框被关闭之前将会被调用，并且可以通过该方法来阻止弹框被关闭。 它是一个接收三个参数：`action`、`instance` 和`done` 的方法。 使用它能够在关闭前对实例进行一些操作，比如为确定按钮添加 `loading` 状态等；此时若需要关闭实例，可以调用 `done` 方法（若在 `beforeClose` 中没有调用 `done`，则弹框便不会关闭）。

message-box/customization

:::

## 使用 HTML 片段

`message` 支持传入 HTML 字符串来作为正文内容。

:::demo 将 `dangerouslyUseHTMLString` 属性设置为 true，`message` 属性就会被当作 HTML 片段处理。

message-box/use-html

:::

:::warning

`message` 属性虽然支持传入 HTML 片段，但是在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 [XSS 攻击](https://en.wikipedia.org/wiki/Cross-site_scripting)。 因此在 `dangerouslyUseHTMLString` 打开的情况下，请确保 `message` 的内容是可信的，**永远不要**将用户提交的内容赋值给 `message` 属性。

:::

## 区分取消操作与关闭操作

有些场景下，点击取消按钮与点击关闭按钮有着不同的含义。

:::demo 默认情况下，当用户触发取消（点击取消按钮）和触发关闭（点击关闭按钮或遮罩层、按下 ESC 键）时，Promise 的 reject 回调和 `callback` 回调的参数均为 'cancel'。 如果将`distinguishCancelAndClose`属性设置为 true，则上述两种行为的参数分别为 'cancel' 和 'close'。

message-box/distinguishable-close-cancel

:::

## 内容居中

消息弹框支持使用居中布局。

:::demo 将 `center` 属性设置为 `true` 可将内容居中显示。

message-box/centered-content

:::

## 自定义图标

图标可以使用任意Vue 组件或 [渲染函数 (JSX)](https://vuejs.org/guide/extras/render-function.html)来自定义。

:::demo

message-box/customized-icon

:::

## 可拖放

设置 MessageBox 可以拖拽。

:::demo 设置`draggable`属性为`true`来开启拖拽弹窗能力。 设置 `overflow` ^(2.5.4) 为 `true` 可以让拖拽范围超出可视区。

message-box/draggable

:::

## 全局方法

如果你完整引入了 Element，它会为 `app.config.globalProperties` 添加如下全局方法：`$msgbox`、 `$alert`、 `$confirm` 和 `$prompt`。 因此在 Vue 实例中可以采用本页面中的方式来调用`MessageBox`。 参数如下：

- `$msgbox(options)`
- `$alert(message, title, options)` 或 `$alert(message, options)`
- `$confirm(message, title, options)` 或 `$confirm(message, options)`
- `$prompt(message, title, options)` 或 `$prompt(message, options)`

## 应用程序上下文继承 <el-tag>> 2.0.4</el-tag>

现在 MessageBox 接受构造器的 `context` 作为第二个(如果你正在使用消息框变量的话) 参数，这个参数允许你将当前应用的上下文注入到消息中，这将允许你继承应用程序的所有属性。

```ts
import { getCurrentInstance } from 'vue'
import { ElMessageBox } from 'element-plus'

// 在你的 setup 方法中
const { appContext } = getCurrentInstance()!
// 你可以像这样传递参数：
ElMessageBox({}, appContext)
// 或者正在使用不同的调用方式
ElMessageBox.alert('Hello world!', 'Title', {}, appContext)
```

## 按需引入

如果您需要按需引入 `MessageBox`：

```ts
import { ElMessageBox } from 'element-plus'
```

那么对应于上述四个全局方法的调用方法依次为：`ElMessageBox`、`ElMessageBox.alert`、`ElMessageBox.confirm` 和 `ElMessageBox.prompt`。 参数同上所述。

## API

### 配置项

| 属性名                               | 说明                                                                                                | 类型                                                                                       | 默认值                                   |
| --------------------------------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------- |
| autofocus                         | 打开 MessageBox 时是否自动获得焦点                                                                           | ^[boolean]                                                                               | true                                  |
| title                             | MessageBox 的标题                                                                                    | ^[string]                                                                                | ''                                    |
| message                           | MessageBox 的正文内容                                                                                  | ^[string] / ^[VNode] / ^[Function]`() => VNode` ^(2.2.17)                             | —                                     |
| dangerouslyUseHTMLString          | 是否将 `message` 作为 HTML 片段处理                                                                        | ^[boolean]                                                                               | false                                 |
| type                              | 消息类型，用于图标显示                                                                                       | ^[enum]`'success' \| 'info' \| 'warning' \| 'error'`                                  | ''                                    |
| icon                              | 自定义图标组件，会覆盖 `type` 的类型                                                                            | ^[string] / ^[Component]                                                                 | ''                                    |
| customClass                       | MessageBox 的自定义类名                                                                                 | ^[string]                                                                                | ''                                    |
| customStyle                       | MessageBox 的自定义内联样式                                                                               | ^[CSSProperties]                                                                         | {}                                    |
| callback                          | 若不使用 Promise，可以使用此参数指定 MessageBox 关闭后的回调                                                          | ^[Function]`(value: string, action: Action) => any \| (action: Action) => any`    | null                                  |
| show-close                        | MessageBox 是否显示右上角关闭按钮                                                                            | ^[boolean]                                                                               | true                                  |
| beforeClose                       | messageBox 关闭前的回调，会暂停消息弹出框的关闭过程。                                                                  | ^[Function]`(action: Action, instance: MessageBoxState, done: () => void) => void` | null                                  |
| distinguishCancelAndClose         | 是否将取消（点击取消按钮）与关闭（点击关闭按钮或遮罩层、按下 Esc 键）进行区分                                                         | ^[boolean]                                                                               | false                                 |
| lockScroll                        | 是否在 MessageBox 出现时将 body 滚动锁定                                                                     | ^[boolean]                                                                               | true                                  |
| showCancelButton                  | 是否显示取消按钮                                                                                          | ^[boolean]                                                                               | false（以 confirm 和 prompt 方式调用时为 true） |
| showConfirmButton                 | 是否显示确定按钮                                                                                          | ^[boolean]                                                                               | true                                  |
| cancelButtonText                  | 取消按钮的文本内容                                                                                         | ^[string]                                                                                | 取消                                    |
| confirmButtonText                 | 确定按钮的文本内容                                                                                         | ^[string]                                                                                | 确定                                    |
| cancelButtonLoadingIcon ^(2.7.7)  | 取消按钮的加载图标内容                                                                                       | ^[string] / ^[Component]                                                                 | Loading                               |
| confirmButtonLoadingIcon ^(2.7.7) | 确认按钮的加载图标内容                                                                                       | ^[string] / ^[Component]                                                                 | Loading                               |
| cancelButtonClass                 | 取消按钮的自定义类名                                                                                        | ^[string]                                                                                | ''                                    |
| confirmButtonClass                | 确定按钮的自定义类名                                                                                        | ^[string]                                                                                | ''                                    |
| closeOnClickModal                 | 是否可通过点击遮罩层关闭 MessageBox                                                                           | ^[boolean]                                                                               | true（以 alert 方式调用时为 false）            |
| closeOnPressEscape                | 是否可通过按下 ESC 键关闭 MessageBox                                                                        | ^[boolean]                                                                               | true（以 alert 方式调用时为 false）            |
| closeOnHashChange                 | 是否在 hash 改变时关闭 MessageBox                                                                         | ^[boolean]                                                                               | true                                  |
| showInput                         | 是否显示输入框                                                                                           | ^[boolean]                                                                               | false（以 prompt 方式调用时为 true）           |
| inputPlaceholder                  | 输入框占位文本                                                                                           | ^[string]                                                                                | ''                                    |
| inputType                         | 输入框的类型                                                                                            | ^[string]                                                                                | text                                  |
| inputValue                        | 输入框的初始文本                                                                                          | ^[string]                                                                                | null                                  |
| inputPattern                      | 输入框的校验表达式                                                                                         | ^[regexp]                                                                                | null                                  |
| inputValidator                    | 输入框的校验函数。 应该返回一个 boolean 或者 string， 如果返回的是一个 string 类型，那么该返回值会被赋值给 inputErrorMessage 用于向用户展示错误消息。 | ^[Function]`(value: string) => boolean \| string`                                    | null                                  |
| inputErrorMessage                 | 校验未通过时的提示文本                                                                                       | ^[string]                                                                                | 输入的数据不合法!                             |
| center                            | 是否居中布局                                                                                            | ^[boolean]                                                                               | false                                 |
| draggable                         | MessageBox 是否可拖放                                                                                  | ^[boolean]                                                                               | false                                 |
| overflow ^(2.5.4)                 | MessageBox 拖动范围可以超出可视区                                                                            | ^[boolean]                                                                               | false                                 |
| roundButton                       | 是否使用圆角按钮                                                                                          | ^[boolean]                                                                               | false                                 |
| buttonSize                        | 自定义确认按钮及取消按钮的大小                                                                                   | ^[string]`'small' \| 'default' \| 'large'`                                             | default                               |
| appendTo ^(2.2.19)                | 设置组件的根元素                                                                                          | ^[string] / ^[HTMLElement]                                                               | —                                     |
