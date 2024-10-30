<template>
  <div
    :class="[
      ns.b(),
      ns.is(`${shadow}-shadow`),
      {
        'el-next-card2': type === 'horizontal' || type === 'vertical',
        horizontal: type === 'horizontal',
        vertical: type === 'vertical',
      },
    ]"
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

    <div v-if="type === 'vertical'" class="vertical-layout">
      <slot name="avatar" />
      <h3 class="card-title">{{ title }}</h3>
      <p class="card-desc">{{ desc }}</p>
    </div>

    <div v-if="$slots.header || header" :class="ns.e('header')">
      <slot name="header">{{ header }}</slot>
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
import { nextCard2Props } from './next-card2'

defineOptions({
  name: 'ElNextCard2',
})

defineProps(nextCard2Props)

const ns = useNamespace('card')
</script>

<style lang="scss" scoped>
.el-next-card2 {
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

.card-content {
  flex: 1;
}

.vertical-layout {
  text-align: center;

  .card-img {
    width: 100px;
    height: auto;
  }
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
