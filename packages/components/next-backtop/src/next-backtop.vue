<template>
  <div @mouseenter="show = true" @mouseleave="hideMenu">
    <el-backtop
      :bottom="bottom"
      :right="right"
      :visibility-height="visibilityHeight"
      :class="[{ 'el-next-backtop': icon }]"
      @click="handleClick"
    >
      <template v-if="!icon && !$slots.menu">
        <slot>
          <el-icon><CaretTop /></el-icon>
        </slot>
      </template>
      <template v-if="icon && !$slots.menu">
        <el-tooltip effect="dark">
          <template #content>{{ tooltip }}</template>
          <el-button
            :type="type"
            :icon="icon"
            :circle="!square"
            :class="{ 'is-square': square }"
            size="large"
          />
        </el-tooltip>
      </template>
      <template v-if="$slots.menu">
        <el-tooltip
          placement="top"
          effect="light"
          popper-class="el-next-backtop__menu"
          :show-arrow="false"
        >
          <template #content>
            <div class="item">
              <slot name="menu" />
            </div>
          </template>
          <el-button
            :type="type"
            :icon="icon"
            :circle="!square"
            :class="{ 'is-square': square }"
            size="large"
            @click="handleMenuClick"
          />
        </el-tooltip>
      </template>
    </el-backtop>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineEmits, defineProps, onMounted, ref, watch } from 'vue'
import { ElBacktop, ElButton, ElIcon, ElTooltip } from 'element-plus'
import { CaretTop, Search } from '@element-plus/icons-vue'
import { useNamespace } from '@element-plus/hooks'
import { nextBacktopProps } from './next-backtop'

defineOptions({
  name: 'ElNextBacktop',
})

const props = defineProps(nextBacktopProps)
const ns = useNamespace('backtop')

// 继承 el-backtop 的所有事件
const emit = defineEmits(['click'])

// 点击事件的处理函数
const handleClick = () => {
  emit('click')
}

const show = ref(false)

const handleMenuClick = (event) => {
  event.stopPropagation() // 阻止事件冒泡到 el-backtop
}

const handleMenuItemClick = (event) => {
  if (event.target.attributes.href) {
    window.location.href = event.target.attributes.href.value
  } else {
    console.log('click menu item')
  }
}

const BOX_SIZE = 100
const BUTTON_SIZE = 40
const boxStyle = {
  width: BOX_SIZE,
  height: BOX_SIZE,
  position: 'relative',
}
const insetInlineEnd = [
  (BOX_SIZE - BUTTON_SIZE) / 2,
  -(BUTTON_SIZE / 2),
  (BOX_SIZE - BUTTON_SIZE) / 2,
  BOX_SIZE - BUTTON_SIZE / 2,
]
const bottomValue = [
  BOX_SIZE - BUTTON_SIZE / 2,
  (BOX_SIZE - BUTTON_SIZE) / 2,
  -BUTTON_SIZE / 2,
  (BOX_SIZE - BUTTON_SIZE) / 2,
]
const computedMenuStyle = computed(() => {
  const index = ['top', 'right', 'bottom', 'left'].indexOf(props.boxStyle)
  return {
    position: 'absolute',
    width: '100%',
    // insetInlineEnd: `${insetInlineEnd[index]}px`,
    // bottom: `${bottomValue[index]}px`,
    bottom: `50px`,
  }
})
</script>

<style lang="scss" scoped>
.el-next-backtop {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: none;

  .el-button.is-square {
    width: 100%;
    height: 100%;
    padding: 0;
  }
}
</style>
<style lang="scss">
.el-next-backtop__menu {
  border: none !important;

  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 10px;

    .el-button + .el-button {
      margin-left: 0;
    }
  }
}
</style>
