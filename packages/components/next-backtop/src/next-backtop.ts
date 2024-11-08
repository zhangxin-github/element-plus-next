import { buildProps, definePropType, iconPropType } from '@element-plus/utils'
import type { Arrayable } from '@element-plus/utils'

import type { ExtractPropTypes, PropType } from 'vue'
import type { Placement } from 'element-plus'
import type NextBacktop from './next-backtop.vue'

export type TooltipTriggerType = 'hover' | 'focus' | 'click' | 'contextmenu'

export const buttonTypes = [
  'default',
  'primary',
  'success',
  'warning',
  'info',
  'danger',
  /**
   * @deprecated
   * Text type will be deprecated in the next major version (3.0.0)
   */
  'text',
  '',
] as const

export const nextBacktopProps = buildProps({
  target: {
    type: String,
    default: 'body',
  },
  visibilityHeight: {
    type: Number,
    default: 200,
  },
  right: {
    type: Number,
    default: 40,
  },
  bottom: {
    type: Number,
    default: 40,
  },
  hover: {
    type: Boolean,
    default: false,
  },
  boxStyle: { type: String, default: 'top' },
  float: { type: Boolean, default: false },
  type: {
    type: String,
    values: buttonTypes,
    default: '',
  },
  icon: {
    type: String,
    default: '',
  },
  square: Boolean,
  /**
   * @description How should the tooltip be triggered (to show)
   */
  trigger: {
    type: definePropType<Arrayable<TooltipTriggerType>>([String, Array]),
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
