<template>
  <div>
    <el-backtop
      :bottom="bottom"
      :right="right"
      :visibility-height="visibilityHeight"
      @click="handleClick"
    >
      <slot name="default">
        <el-icon><CaretTop /></el-icon>
      </slot>
      <transition name="slide-fade">
        <div class="el-next-backtop-menus" :style="computedMenuStyle">
          <el-icon><CaretTop /></el-icon>
          <el-icon><CaretTop /></el-icon>
          <el-icon><CaretTop /></el-icon>
        </div>
      </transition>
    </el-backtop>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineEmits, defineProps, onMounted, ref, watch } from 'vue'
import { ElBacktop } from 'element-plus'
import { ElIcon } from '@element-plus/components/icon'
import { CaretTop } from '@element-plus/icons-vue'
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
    insetInlineEnd: `${insetInlineEnd[index]}px`,
    bottom: `${bottomValue[index]}px`,
  }
})

onMounted(() => {
  // calculateMenuPosition() // 初始化时计算一次
})
</script>

<style scoped>
.backtop-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: var(--el-bg-color-overlay);
  border-radius: 50%;
  box-shadow: var(--el-box-shadow-lighter);
  color: #1989fa;
  cursor: pointer;
  transition: all 0.3s;
}

.backtop-button-hover {
  background-color: #66b1ff;
  transform: scale(1.1);
}

.backtop-button > * {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 8px;
}
</style>
