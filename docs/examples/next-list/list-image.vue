<template>
  <el-next-list split>
    <el-next-list-item
      :avatar="imageUrl"
      title="列表标题"
      desc="列表内容的描述性文字"
    />
    <el-next-list-item
      :avatar="imageUrl"
      title="列表标题"
      desc="列表内容的描述性文字"
    />
    <el-next-list-item
      :avatar="imageUrl"
      title="列表标题"
      desc="列表内容的描述性文字"
    />
  </el-next-list>
</template>

<script setup>
const imageUrl = 'https://tdesign.gtimg.com/site/avatar.jpg'
</script>
