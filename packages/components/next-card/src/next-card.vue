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

<style lang="scss" scoped>
.el-next-card {
  display: flex;
  flex-direction: column;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.horizontal-layout {
  display: flex;
  align-items: center;

  .card-img {
    width: 100px;
    height: auto;
    margin-right: 16px;
  }

  .card-img img {
    max-width: 100%;
    width: 100%;
    height: 100%;
  }
}

.vertical-layout {
  text-align: center;

  .card-img {
    width: 100px;
    height: auto;
  }
}

.no-border {
  border-top: none;
  /* 移除边框 */
  border-bottom: none;
  /* 移除边框 */
}

.card-content {
  flex: 1;
}

.card-title {
  padding: 0;
  margin: 8px 0;
  font-size: 18px;
  font-weight: bold;
}

.card-desc {
  margin: 0;
  color: #666;
}

.el-next-card__header {
  display: flex;
}

.el-next-card__header-wrapper {
  flex: 1;
  display: flex;
  align-items: center;
}

.el-next-card__action {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: auto;
}

.el-next-card__body {
  padding: 3px;
}

.el-next-card__footer {
  display: flex;
}

.el-next-card__footer-wrapper {
  flex: 1;
}

:deep(.el-tooltip__trigger:focus-visible) {
  outline: none;
}
</style>
