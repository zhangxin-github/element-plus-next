<template>
  <!-- If you want to apply a custom namespace, uncomment the following and apply the css configuration in `vite.config.ts`. -->
  <!-- <el-config-provider namespace="ep"> -->
  <div class="play-container">
    <el-next-card style="max-width: 300px;" shadow="never">
      <template #header>
        <div class="card-header">
          <span>Card name</span>
        </div>
      </template>
      <p v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</p>
      <template #footer>Footer content</template>
    </el-next-card>
    <el-next-card style="max-width: 300px;" shadow="hover">
      <p>仅有内容区域的卡片形式。卡片内容区域可以是文字、图片、表单、表格等形式信息内容。可使用大中小不同的卡片尺寸，按业务需求进行呈现。</p>
    </el-next-card>
    <el-next-card type="horizontal" title="Yummy hamburger" style="max-width: 480px">
      <template #actions>
        <el-dropdown>
          <span class="el-dropdown-link">
            <el-icon>
              <MoreFilled />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>Action 1</el-dropdown-item>
              <el-dropdown-item>Action 2</el-dropdown-item>
              <el-dropdown-item>Action 3</el-dropdown-item>
              <el-dropdown-item disabled>Action 4</el-dropdown-item>
              <el-dropdown-item divided>Action 5</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </template>
      <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        style="width: 100%" />
    </el-next-card>
  </div>


  <div class="play-container">
    <el-next-card headerBordered type="horizontal" title="Horizontal Card Title"
      desc="This is the description for the horizontal card." style="max-width: 300px;">
      <template #avatar>
        <img src="https://tdesign.gtimg.com/site/avatar-boy.jpg" />
      </template>
    </el-next-card>
    <el-next-card headerBordered type="horizontal" title="列表标题" desc="列表内容的描述性文字" style="max-width: 300px;">
      <template #avatar>
        <img src="https://tdesign.gtimg.com/site/avatar-boy.jpg" />
      </template>
    </el-next-card>
  </div>
  <div class="play-container">
    <ElNextCard headerBordered type="vertical" title="Vertical Card Title"
      desc="This is the description for the vertical card." style="max-width: 300px;">
      <template #avatar>
        <img src="https://tdesign.gtimg.com/site/avatar-boy.jpg" />
      </template>
    </ElNextCard>
    <ElNextCard headerBordered type="vertical" title="列表标题" desc="列表内容的描述性文字" style="max-width: 300px;">
      <template #avatar>
        <img src="https://tdesign.gtimg.com/site/avatar-boy.jpg" />
      </template>
    </ElNextCard>
  </div>

  <div class="play-container">
    <ElNextCard headerBordered type="horizontal" img="https://tdesign.gtimg.com/site/avatar.jpg"
      title="Vertical Card Title" desc="This is the description for the vertical card." style="max-width: 400px;">
      <template #avatar>
        <img src="https://tdesign.gtimg.com/site/avatar-boy.jpg" />
      </template>
      <template #actions>
        <el-dropdown>
          <span class="el-dropdown-link">
            <el-icon>
              <MoreFilled />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>Action 1</el-dropdown-item>
              <el-dropdown-item>Action 2</el-dropdown-item>
              <el-dropdown-item>Action 3</el-dropdown-item>
              <el-dropdown-item disabled>Action 4</el-dropdown-item>
              <el-dropdown-item divided>Action 5</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </template>
      <template #footer>
        <el-row class="row-bg" justify="space-evenly">
          <el-col :span="6" style="display: inline-flex; justify-content: center">
            <el-icon>
              <Pointer />
            </el-icon>
          </el-col>
          <el-col :span="6" style="display: inline-flex; justify-content: center">
            <el-icon>
              <ChatSquare />
            </el-icon>
          </el-col>
          <el-col :span="6" style="display: inline-flex; justify-content: center">
            <el-icon>
              <Share />
            </el-icon>
          </el-col>
        </el-row>
      </template>
    </ElNextCard>
    <ElNextCard headerBordered img="https://tdesign.gtimg.com/site/avatar.jpg" title="Vertical Card Title"
      desc="This is the description for the vertical card." style="max-width: 400px;">
      <template #footer>
        <Edit style="width: 1em; height: 1em; margin-right: 8px" />
        <Share style="width: 1em; height: 1em; margin-right: 8px" />
        <Delete style="width: 1em; height: 1em; margin-right: 8px" />
        <Search style="width: 1em; height: 1em; margin-right: 8px" />
      </template>
      <template #actions>
        <el-dropdown>
          <span class="el-dropdown-link">
            <el-icon>
              <MoreFilled />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>Action 1</el-dropdown-item>
              <el-dropdown-item>Action 2</el-dropdown-item>
              <el-dropdown-item>Action 3</el-dropdown-item>
              <el-dropdown-item disabled>Action 4</el-dropdown-item>
              <el-dropdown-item divided>Action 5</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </template>
    </ElNextCard>
  </div>
  <!-- </el-config-provider> -->
</template>

<script setup lang="ts">
// code here
</script>

<style lang="scss">
html,
body {
  width: 100vw;
  // height: 100vh;
  margin: 0;

  #play {
    height: 100%;
    width: 100%;

    .play-container {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
