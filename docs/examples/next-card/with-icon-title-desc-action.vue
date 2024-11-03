<template>
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
  </el-next-card>
</template>

<script lang="ts" setup>
import { MoreFilled } from '@element-plus/icons-vue'
</script>
