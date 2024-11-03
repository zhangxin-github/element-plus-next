<template>
  <ElNextCard
    header-bordered
    type="horizontal"
    img="https://tdesign.gtimg.com/site/avatar.jpg"
    title="列表标题"
    desc="列表内容的描述性文字"
    style="max-width: 400px"
  >
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
</template>

<script lang="ts" setup>
import {
  ChatSquare,
  Delete,
  Edit,
  MoreFilled,
  Pointer,
  Search,
  Share,
} from '@element-plus/icons-vue'
</script>
