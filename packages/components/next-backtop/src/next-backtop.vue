<template>
  <div>
    <el-backtop
      :bottom="bottom"
      :right="right"
      :visibility-height="visibilityHeight"
      :class="[{ 'el-next-backtop': float }]"
      @click="handleClick"
    >
      <template v-if="!float">
        <slot>
          <el-icon>
            <CaretTop />
          </el-icon>
        </slot>
      </template>
      <template v-if="float && !$slots.menu">
        <el-tooltip
          effect="dark"
          placement="left"
          :popper-class="[
            { 'el-next-backtop__tooltip no-tooltip': float && !tooltip },
          ]"
        >
          <template #content>{{ tooltip }}</template>
          <el-button
            :type="type"
            :icon="icon ? icon : CaretTop"
            :circle="!square"
            :class="{ 'is-square': square }"
            size="large"
          />
        </el-tooltip>
      </template>
      <template v-if="float && $slots.menu">
        <el-tooltip
          :placement="placement"
          effect="light"
          popper-class="el-next-backtop__menu"
          :show-arrow="false"
          :trigger="trigger"
          @show="handleTooltipShow"
          @hide="handleTooltipHide"
        >
          <template #content>
            <div
              :class="[
                'item',
                { row: placement === 'left' || placement === 'right' },
              ]"
            >
              <slot name="menu" />
            </div>
          </template>
          <el-button
            :type="type"
            :icon="isIconChanged ? Close : props.icon"
            :circle="!square"
            :class="{ 'is-square': square }"
            size="large"
            @click="handleMenuClick($event)"
          />
        </el-tooltip>
      </template>
    </el-backtop>
  </div>
</template>

<script lang="ts" setup>
import { defineEmits, defineProps, ref } from 'vue'
import { ElBacktop, ElButton, ElIcon, ElTooltip } from 'element-plus'
import { CaretTop, Close } from '@element-plus/icons-vue'
// import { useNamespace } from '@element-plus/hooks'
import { nextBacktopProps } from './next-backtop'

defineOptions({
  name: 'ElNextBacktop',
})

const props = defineProps(nextBacktopProps)
// const ns = useNamespace('backtop')

// 继承 el-backtop 的所有事件
const emit = defineEmits(['click'])

// 点击事件的处理函数
const handleClick = () => {
  emit('click')
}

const isIconChanged = ref(false)
const handleMenuClick = (e: MouseEvent) => {
  e.stopPropagation() // 阻止事件冒泡到 el-backtop
  // isIconChanged.value = !isIconChanged.value // 切换图标状态
}
const handleTooltipShow = () => {
  // 工具提示显示时的处理
  isIconChanged.value = true // 切换图标状态
}
const handleTooltipHide = () => {
  // 工具提示隐藏时的处理
  isIconChanged.value = false // 重置图标状态
}

// const handleMenuItemClick = (e) => {
//   if (e.target.attributes.href) {
//     window.location.href = e.target.attributes.href.value
//   } else {
//     console.log('click menu item')
//   }
// }
</script>
