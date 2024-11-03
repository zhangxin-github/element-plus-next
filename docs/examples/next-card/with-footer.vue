<template>
  <ElNextCard
    header-bordered
    img="https://tdesign.gtimg.com/site/avatar.jpg"
    title="Vertical Card Title"
    desc="This is the description for the vertical card."
    style="max-width: 400px"
  >
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
