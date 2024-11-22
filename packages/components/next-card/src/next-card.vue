<template>
  <div
    :class="[
      ns.b(),
      ns.is(`${shadow}-shadow`),
      {
        'el-next-card': type === 'horizontal' || type === 'vertical',
        horizontal: type === 'horizontal',
        vertical: type === 'vertical',
      },
    ]"
  >
    <div
      v-if="$slots.header || header || type"
      :class="[
        ns.e('header'),
        'el-next-card__header',
        { 'no-border': headerBordered },
      ]"
    >
      <div v-if="type === 'horizontal'" class="horizontal-layout">
        <div v-if="$slots.avatar" class="card-img">
          <slot name="avatar" />
        </div>
        <div class="card-content">
          <h3 class="card-title">{{ title }}</h3>
          <p class="card-desc">{{ desc }}</p>
        </div>
      </div>
      <div v-else-if="type === 'vertical'" class="vertical-layout">
        <slot name="avatar" />
        <h3 class="card-title" style="justify-content: center">{{ title }}</h3>
        <p class="card-desc">{{ desc }}</p>
      </div>
      <template v-else>
        <div class="el-next-card__header-wrapper">
          <slot name="header">{{ header }}</slot>
        </div>
      </template>
      <div v-if="$slots.actions" class="el-next-card__action">
        <slot name="actions" />
      </div>
    </div>

    <div
      v-if="!img"
      :class="[ns.e('body'), 'el-next-card__body', bodyClass]"
      :style="bodyStyle"
    >
      <slot />
    </div>

    <template v-if="img">
      <img :src="img" alt="Card Image" class="card-img" />
    </template>

    <div
      v-if="$slots.footer || footer"
      :class="[
        ns.e('footer'),
        'el-next-card__footer',
        { 'no-border': headerBordered },
      ]"
    >
      <div class="el-next-card__footer-wrapper">
        <slot name="footer">{{ footer }}</slot>
      </div>
      <div v-if="!type" class="el-next-card__action">
        <slot name="actions" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useNamespace } from '@element-plus/hooks'
import { nextCardProps } from './next-card'

defineOptions({
  name: 'ElNextCard',
})

defineProps(nextCardProps)

const ns = useNamespace('card')
</script>
