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
        <img src="https://tdesign.gtimg.com/site/avatar-boy.jpg" />
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
        <img src="https://tdesign.gtimg.com/site/avatar-boy.jpg" />
      </template>
    </ElNextCard>
  </div>
</template>

<style lang="scss" scoped>
.play-container {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  // justify-content: center;
}
</style>
