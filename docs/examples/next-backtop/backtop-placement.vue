<template>
  Scroll down to see the bottom-right button.

  <el-next-backtop
    :icon="ArrowLeft"
    placement="left"
    :right="100"
    :bottom="400"
    :visibility-height="300"
  >
    <template #menu>
      <el-button type="primary" :icon="Service" circle />
      <el-button type="success" :icon="Service" circle />
      <el-button type="info" :icon="Service" circle />
    </template>
  </el-next-backtop>
  <el-next-backtop
    :icon="ArrowRight"
    placement="right"
    :right="200"
    :bottom="400"
    :visibility-height="300"
  >
    <template #menu>
      <el-button type="primary" :icon="Service" circle />
      <el-button type="success" :icon="Service" circle />
      <el-button type="info" :icon="Service" circle />
    </template>
  </el-next-backtop>
  <el-next-backtop
    :icon="ArrowDown"
    placement="bottom"
    :right="300"
    :bottom="400"
    :visibility-height="300"
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
