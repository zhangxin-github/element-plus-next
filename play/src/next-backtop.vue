<template>
  <!-- If you want to apply a custom namespace, uncomment the following and apply the css configuration in `vite.config.ts`. -->
  <!-- <el-config-provider namespace="ep"> -->
  <div class="play-container">
    hello next-backtop

    <el-next-backtop
      target=".play-container"
      :right="100"
      :bottom="300"
      :visibility-height="300"
    >
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
        UP2
      </div>
      <!-- <template #menu> <div>up3</div> </template> -->
    </el-next-backtop>

    <el-next-backtop
      float
      square
      type="success"
      icon="Check"
      :right="100"
      :bottom="200"
    />

    <el-backtop :bottom="100">
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
    </el-backtop>
    <el-backtop :right="100" :bottom="100" />
  </div>

  <div style="height: 400px">
    <el-button @mouseenter="show = true" @mouseleave="show = false"
      >hover Me</el-button
    >

    <div style="margin-top: 20px">
      <transition name="el-zoom-in-bottom">
        <div
          v-show="show"
          style="
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100px;
            gap: 10px;
          "
        >
          <el-button type="primary" :icon="Edit" circle />
          <el-button type="success" :icon="Check" circle />
          <el-button type="info" :icon="Message" circle />
        </div>
      </transition>
    </div>
  </div>
  <!-- </el-config-provider> -->
</template>

<script setup lang="ts">
// code here
import { computed, defineEmits, defineProps, onMounted, ref, watch } from 'vue'
const show = ref(false)
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

    .transition-box {
      margin-bottom: 10px;
      width: 200px;
      height: 100px;
      border-radius: 4px;
      background-color: #409eff;
      text-align: center;
      color: #fff;
      padding: 40px 20px;
      box-sizing: border-box;
      margin-right: 20px;
    }
  }
}
</style>
