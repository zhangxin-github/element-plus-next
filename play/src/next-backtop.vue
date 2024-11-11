<template>
  <!-- If you want to apply a custom namespace, uncomment the following and apply the css configuration in `vite.config.ts`. -->
  <!-- <el-config-provider namespace="ep"> -->
  <div class="play-container">
    hello next-backtop

    <el-next-backtop
      float
      placement="left"
      :icon="ArrowLeft"
      :right="100"
      :bottom="340"
      :visibility-height="300"
    >
      <template #menu>
        <el-button type="primary" :icon="Service" circle @click="handleClick" />
        <el-button type="success" :icon="Service" circle />
        <el-button type="info" :icon="Service" circle />
      </template>
    </el-next-backtop>
    <el-next-backtop
      float
      placement="right"
      :icon="ArrowRight"
      :right="200"
      :bottom="340"
    >
      <template #menu>
        <el-button type="primary" :icon="Service" circle @click="handleClick" />
        <el-button type="success" :icon="Service" circle />
        <el-button type="info" :icon="Service" circle />
      </template>
    </el-next-backtop>
    <el-next-backtop
      float
      placement="bottom"
      :icon="ArrowDown"
      :right="300"
      :bottom="340"
    >
      <template #menu>
        <el-button type="primary" :icon="Service" circle @click="handleClick" />
        <el-button type="success" :icon="Service" circle />
        <el-button type="info" :icon="Service" circle />
      </template>
    </el-next-backtop>

    <el-next-backtop float :right="100" :bottom="260" :icon="Service">
      <template #menu>
        <el-button type="primary" :icon="Service" circle @click="handleClick" />
        <el-button type="success" :icon="Service" circle />
        <el-button type="info" :icon="Service" circle />
      </template>
    </el-next-backtop>
    <el-next-backtop
      float
      trigger="click"
      type="primary"
      :icon="Service"
      :bottom="260"
    >
      <template #menu>
        <el-button type="primary" :icon="Service" circle @click="handleClick" />
        <el-button type="success" :icon="Service" circle />
        <el-button type="info" :icon="Service" circle />
      </template>
    </el-next-backtop>

    <el-next-backtop
      float
      square
      type="success"
      tooltip="Back to top"
      :right="100"
      :bottom="180"
    />

    <el-next-backtop :bottom="100">
      <div
        style="
          height: 100%;
          width: 100%;
          background-color: var(--el-bg-color-overlay);
          box-shadow: var(--el-box-shadow-lighter);
          text-align: center;
          line-height: 40px;
          color: #1989fa;
        "
      >
        UP
      </div>
    </el-next-backtop>
    <el-next-backtop :right="100" :bottom="100" />
  </div>
  <!-- </el-config-provider> -->
</template>

<script setup lang="ts">
// code here
import {
  Service,
  ArrowLeft,
  ArrowRight,
  ArrowDown,
} from '@element-plus/icons-vue'
const handleClick = () => {
  window.alert('hello next-backtop!!!')
}
</script>

<style lang="scss">
html,
body {
  width: 100vw;
  height: 100vh;
  margin: 0;

  #play {
    height: 100%;
    width: 100%;

    .play-container {
      height: 2000px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
