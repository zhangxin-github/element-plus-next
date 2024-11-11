<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { nextListProps } from './next-list'

defineOptions({
  name: 'ElNextList',
})

defineProps(nextListProps)

// init here
</script>
