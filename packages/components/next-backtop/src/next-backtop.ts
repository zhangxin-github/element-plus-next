import { buildProps, definePropType, iconPropType } from '@element-plus/utils'

import type { ExtractPropTypes } from 'vue'
import type NextBacktop from './next-backtop.vue'

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
    type: iconPropType,
  },
  square: Boolean,
  trigger: { type: String, default: 'hover' },
})

export type NextBacktopProps = ExtractPropTypes<typeof nextBacktopProps>
export type NextBacktopInstance = InstanceType<typeof NextBacktop>
