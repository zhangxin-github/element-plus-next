<template>
  <div
    :class="[
      ns.b(),
      ns.is('split', split),
      ns.is('stripe', stripe),
      ns.m(size),
    ]"
  >
    <div v-if="$slots.header || header" :class="ns.e('header')">
      <slot name="header">{{ header }}</slot>
    </div>
    <!---->
    <ul :class="ns.e('inner')">
      <slot />
    </ul>
    <!---->
    <div v-if="$slots.footer || footer" :class="ns.e('footer')">
      <slot name="footer">{{ footer }}</slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useNamespace } from '@element-plus/hooks'
import { nextListProps } from './next-list'

defineOptions({
  name: 'ElNextList',
})

defineProps(nextListProps)

const ns = useNamespace('next-list')
</script>
