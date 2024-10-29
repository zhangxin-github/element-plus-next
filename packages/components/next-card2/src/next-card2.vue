<template>
  <div
    :class="[
      'el-next-card2',
      { horizontal: type === 'horizontal', vertical: type === 'vertical' },
    ]"
  >
    <div v-if="type === 'horizontal'" class="horizontal-layout">
      <div class="card-img">
        <img :src="img" alt="Card Image" />
      </div>
      <div class="card-content">
        <h3 class="card-title">{{ title }}</h3>
        <p class="card-desc">{{ desc }}</p>
      </div>
    </div>
    <div v-if="type === 'vertical'" class="vertical-layout">
      <img :src="img" alt="Card Image" class="card-img" />
      <h3 class="card-title">{{ title }}</h3>
      <p class="card-desc">{{ desc }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { nextCard2Props } from './next-card2'

defineOptions({
  name: 'ElNextCard2',
})

defineProps(nextCard2Props)

// init here
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
