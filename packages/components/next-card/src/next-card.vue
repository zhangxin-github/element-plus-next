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
      :class="[ns.e('header'), { 'no-border': headerBordered }]"
    >
      <div v-if="type === 'horizontal'" class="horizontal-layout">
        <div class="card-img">
          <!-- <img :src="img" alt="Card Image" /> -->
          <slot name="avatar" />
        </div>
        <div class="card-content">
          <h3 class="card-title">{{ title }}</h3>
          <p class="card-desc">{{ desc }}</p>
        </div>
      </div>
      <div v-else-if="type === 'vertical'" class="vertical-layout">
        <slot name="avatar" />
        <h3 class="card-title">{{ title }}</h3>
        <p class="card-desc">{{ desc }}</p>
      </div>
      <template v-else>
        <slot name="header">{{ header }}</slot>
      </template>
    </div>

    <div
      v-if="type !== 'horizontal' && type !== 'vertical' && !img"
      :class="[ns.e('body'), bodyClass]"
      :style="bodyStyle"
    >
      <slot />
    </div>

    <template v-if="img">
      <img :src="img" alt="Card Image" class="card-img" />
    </template>

    <div v-if="$slots.footer || footer" :class="ns.e('footer')">
      <slot name="footer">{{ footer }}</slot>
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
  border-bottom: none; /* 移除边框 */
  padding-bottom: 0;
  margin-bottom: 0;
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
</style>
