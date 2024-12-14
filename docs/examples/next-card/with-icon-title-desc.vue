<template>
  <div class="play-container">
    <el-next-card
      header-bordered
      type="horizontal"
      title="列表标题"
      desc="列表内容的描述性文字"
      style="max-width: 400px"
    >
      <template #avatar>
        <el-avatar
          :size="50"
          src="https://tdesign.gtimg.com/site/avatar-boy.jpg"
        />
      </template>
    </el-next-card>
    <ElNextCard
      header-bordered
      type="vertical"
      title="列表标题"
      desc="列表内容的描述性文字"
      style="max-width: 300px"
    >
      <template #avatar>
        <el-avatar :size="50" :src="circleUrl" />
      </template>
    </ElNextCard>
  </div>
</template>

<script lang="ts" setup>
import { reactive, toRefs } from 'vue'

const state = reactive({
  circleUrl:
    'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
  squareUrl:
    'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
  sizeList: ['small', '', 'large'] as const,
})

const { circleUrl, squareUrl, sizeList } = toRefs(state)
</script>

<style lang="scss" scoped>
.play-container {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  // justify-content: center;
}
</style>
