<template>
  <div class="t-list t-size-m">
    <!---->
    <ul class="t-list__inner">
      <li class="t-list-item">
        <div class="t-list-item-main">列表内容的描述性文字</div>
        <div class="t-list-item__action">
          <a class="el-link el-link--primary is-underline">操作1</a>
          <a class="el-link el-link--primary is-underline">操作2</a>
          <a class="el-link el-link--primary is-underline">操作3</a>
        </div>
      </li>
      <li class="t-list-item">
        <div class="t-list-item-main">列表内容的描述性文字</div>
        <div class="t-list-item__action">
          <a class="el-link el-link--primary is-underline">操作1</a>
          <a class="el-link el-link--primary is-underline">操作2</a>
          <a class="el-link el-link--primary is-underline">操作3</a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { nextListProps } from './next-list'

defineOptions({
  name: 'ElNextList',
})

defineProps(nextListProps)

// init here
</script>

<style lang="scss" scoped>
.t-list {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: auto;
  background: #fff;
}

.t-list__inner {
  list-style: none;
  padding: 0;
  margin: 0;
}

.t-list-item {
  padding: 12px 14px;
  display: flex;
  justify-content: space-between;
  /* 使主轴上的项目均匀分布 */
  align-items: center;
  /* 垂直居中对齐 */
}

.t-list-item-main {
  flex-grow: 1;
  /* 让主要内容区域尽可能地扩展 */
}

.t-list-item__action {
  display: flex;
  gap: 16px;
  /* 使用 gap 属性来代替 margin-left, 更加简洁 */
}
</style>
