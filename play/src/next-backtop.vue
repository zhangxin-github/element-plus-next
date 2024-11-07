<template>
  <!-- If you want to apply a custom namespace, uncomment the following and apply the css configuration in `vite.config.ts`. -->
  <!-- <el-config-provider namespace="ep"> -->
  <div class="play-container">
    hello next-backtop

    <el-next-backtop
      type="success"
      icon="Check"
      :right="100"
      :bottom="300"
      :visibility-height="300"
    >
       <template #menu>
         <el-button type="primary" :icon="Search" circle @click="handleClick" />
         <el-button type="success" :icon="Search" circle />
         <el-button type="info" :icon="Search" circle />
       </template>
    </el-next-backtop>

    <el-next-backtop
      square
      type="success"
      icon="Check"
      tooltip="Back to top"
      :right="100"
      :bottom="200"
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
import { computed, defineEmits, defineProps, onMounted, ref, watch } from 'vue'
import { Search } from '@element-plus/icons-vue'
const show = ref(false)
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
