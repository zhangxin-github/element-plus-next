<template>
  <div @mouseenter="show = true" @mouseleave="hideMenu">
    <el-backtop
      class="el-next-backtop"
      :bottom="bottom"
      :right="right"
      :visibility-height="visibilityHeight"
      @click="handleClick"
    >
      <template v-if="!float">
        <slot>
          <el-icon><CaretTop /></el-icon>
        </slot>
      </template>
      <template v-if="float">
        <slot>
          <el-tooltip
            class="box-item"
            effect="dark"
            content="Left Top prompts info"
            placement="left-start"
          >
            <el-button
              :type="type"
              :icon="icon"
              :circle="!square"
              :class="{ 'is-square': square }"
          /></el-tooltip>
        </slot>
      </template>
      <div
        v-if="!float"
        :style="computedMenuStyle"
        @click.stop="handleMenuClick"
      >
        <transition name="el-zoom-in-bottom">
          <div
            v-show="show"
            class="item"
            @mouseenter="show = true"
            @mouseleave="hideMenu"
          >
            <el-button type="primary" :icon="Search" circle />
            <el-button type="success" :icon="Search" circle />
            <el-button type="info" :icon="Search" circle />
          </div>
        </transition>
      </div>
    </el-backtop>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineEmits, defineProps, onMounted, ref, watch } from 'vue'
import ElButton from '@element-plus/components/button'
import ElBacktop from '@element-plus/components/backtop'
import ElTooltip from '@element-plus/components/tooltip'
import { CaretTop, Search } from '@element-plus/icons-vue'
import { useNamespace } from '@element-plus/hooks'
import { nextBacktopProps } from './next-backtop'

defineOptions({
  name: 'ElNextBacktop',
})

const props = defineProps(nextBacktopProps)
const ns = useNamespace('backtop')

const menuStyle = computed(() => ({
  position: 'absolute',
  right: `0px`,
  bottom: `60px`,
}))

// 继承 el-backtop 的所有事件
const emit = defineEmits(['click'])

// 点击事件的处理函数
const handleClick = () => {
  emit('click')
}

const show = ref(false)
let hideTimeout: number | null = null
const hideMenu = () => {
  if (hideTimeout) {
    clearTimeout(hideTimeout)
  }
  hideTimeout = setTimeout(() => {
    show.value = false
  }, 300) // 延迟300毫秒后隐藏菜单
}

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

onMounted(() => {
  // calculateMenuPosition() // 初始化时计算一次
})
</script>

<style scoped>
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

.backtop-button-hover {
  background-color: #66b1ff;
  transform: scale(1.1);
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.el-next-backtop-menus {
  display: flex;
  flex-direction: column;
  /* background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); */
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 16px;
}
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
</style>
