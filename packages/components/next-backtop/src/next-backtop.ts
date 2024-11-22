import { buildProps, definePropType, iconPropType } from '@element-plus/utils'
import type { Arrayable } from '@element-plus/utils'

import type { ExtractPropTypes, PropType } from 'vue'
import type { Placement } from 'element-plus'
import type NextBacktop from './next-backtop.vue'

export type nextTooltipTriggerType = 'hover' | 'focus' | 'click' | 'contextmenu'

export const nextButtonTypes = [
  'default',
  'primary',
  'success',
  'warning',
  'info',
  'danger',
  'text',
  '',
] as const

export const nextBacktopProps = buildProps({
  /**
   *
   * @description 基础组件属性
   *
   */
  visibilityHeight: {
    type: Number,
    default: 200,
  },
  target: {
    type: String,
    default: '',
  },
  right: {
    type: Number,
    default: 40,
  },
  bottom: {
    type: Number,
    default: 40,
  },
  /**
   *
   * @description 增强组件属性
   *
   */
  float: { type: Boolean, default: false },
  hover: {
    type: Boolean,
    default: false,
  },
  boxStyle: { type: String, default: 'top' },
  type: {
    type: String,
    values: nextButtonTypes,
    default: '',
  },
  icon: {
    type: iconPropType,
  },
  square: Boolean,
  trigger: {
    type: definePropType<Arrayable<nextTooltipTriggerType>>([String, Array]),
    default: 'hover',
  },
  tooltip: { type: String, default: '' },
  placement: {
    type: String as PropType<Placement>,
    default: 'top',
  },
})

export type NextBacktopProps = ExtractPropTypes<typeof nextBacktopProps>
export type NextBacktopInstance = InstanceType<typeof NextBacktop>
