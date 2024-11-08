<template>
  向下滚动以查看右下角的按钮。
  <el-next-backtop
    type="primary"
    :icon="Service"
    tooltip="Back to top"
    :right="200"
    :bottom="200"
  />
</template>

<script lang="ts" setup>
import { Service } from '@element-plus/icons-vue'
</script>
