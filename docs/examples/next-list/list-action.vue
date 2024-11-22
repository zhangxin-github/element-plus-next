<template>
  <el-next-list split>
    <el-next-list-item
      :avatar="imageUrl"
      title="列表标题"
      desc="列表内容的描述性文字"
    >
      <template #action>
        <el-link type="primary">操作1</el-link>
        <el-link type="primary">操作2</el-link>
        <el-link type="primary">操作3</el-link>
      </template>
    </el-next-list-item>
    <el-next-list-item
      :avatar="imageUrl"
      title="列表标题"
      desc="列表内容的描述性文字"
    >
      <template #action>
        <el-link type="primary">操作1</el-link>
        <el-link type="primary">操作2</el-link>
        <el-link type="primary">操作3</el-link>
      </template>
    </el-next-list-item>
    <el-next-list-item
      :avatar="imageUrl"
      title="列表标题"
      desc="列表内容的描述性文字"
    >
      <template #action>
        <el-link :icon="Edit" />
        <el-link :icon="Delete" />
        <el-link :icon="Share" />
      </template>
    </el-next-list-item>
  </el-next-list>
</template>

<script lang="ts" setup>
import {
  ChatSquare,
  Delete,
  Edit,
  MoreFilled,
  Pointer,
  Search,
  Service,
  Share,
} from '@element-plus/icons-vue'
const imageUrl = 'https://tdesign.gtimg.com/site/avatar.jpg'
</script>
