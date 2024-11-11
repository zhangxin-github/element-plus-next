<template>
  向下滚动以查看右下角的按钮。
  <el-next-backtop float :icon="ChatSquare" :right="150" :bottom="340">
    <template #menu>
      <el-button type="primary" :icon="Service" circle />
      <el-button type="success" :icon="Service" circle />
      <el-button type="info" :icon="Service" circle />
    </template>
  </el-next-backtop>
  <el-next-backtop
    float
    trigger="click"
    type="primary"
    :icon="Service"
    :right="100"
    :bottom="340"
  >
    <template #menu>
      <el-button type="primary" :icon="MoreFilled" circle />
      <el-button type="success" :icon="ChatSquare" circle />
      <el-button type="info" :icon="Edit" circle />
    </template>
  </el-next-backtop>
</template>

<script lang="ts" setup>
import {
  ChatSquare,
  Delete,
  Edit,
  MoreFilled,
  Pointer,
  Search,
  Service,
  Share,
} from '@element-plus/icons-vue'
</script>
