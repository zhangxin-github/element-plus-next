<template>
  <li :class="ns.b()">
    <div :class="ns.b('main')">
      <slot name="main" />
      <div v-if="title" :class="ns.e('meta')">
        <div v-if="avatar" :class="ns.e('meta-avatar')">
          <img src="https://tdesign.gtimg.com/site/avatar.jpg" />
        </div>
        <div :class="ns.e('meta-content')">
          <h3 :class="ns.e('meta-title')">{{ title }}</h3>
          <p :class="ns.e('meta-description')">{{ desc }}</p>
        </div>
      </div>
    </div>
    <div :class="ns.e('action')">
      <slot name="action" />
    </div>
  </li>
</template>

<script lang="ts" setup>
import { useNamespace } from '@element-plus/hooks'
import { nextListItemProps } from './next-list-item'

defineOptions({
  name: 'ElNextListItem',
})

defineProps(nextListItemProps)

const ns = useNamespace('next-list-item')
</script>
