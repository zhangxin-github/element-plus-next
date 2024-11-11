<template>
  向下滚动以查看右下角的按钮。
  <el-next-backtop
    float
    :icon="ArrowLeft"
    placement="left"
    :right="100"
    :bottom="420"
  >
    <template #menu>
      <el-button type="primary" :icon="Service" circle />
      <el-button type="success" :icon="Service" circle />
      <el-button type="info" :icon="Service" circle />
    </template>
  </el-next-backtop>
  <el-next-backtop
    float
    :icon="ArrowDown"
    placement="bottom"
    :right="150"
    :bottom="420"
  >
    <template #menu>
      <el-button type="primary" :icon="Service" circle />
      <el-button type="success" :icon="Service" circle />
      <el-button type="info" :icon="Service" circle />
    </template>
  </el-next-backtop>
  <el-next-backtop
    float
    :icon="ArrowRight"
    placement="right"
    :right="200"
    :bottom="420"
  >
    <template #menu>
      <el-button type="primary" :icon="Service" circle />
      <el-button type="success" :icon="Service" circle />
      <el-button type="info" :icon="Service" circle />
    </template>
  </el-next-backtop>
</template>

<script lang="ts" setup>
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Service,
} from '@element-plus/icons-vue'
</script>
