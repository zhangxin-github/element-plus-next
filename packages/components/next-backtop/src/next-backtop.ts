import { buildProps } from '@element-plus/utils'

import type { ExtractPropTypes } from 'vue'
import type NextBacktop from './next-backtop.vue'

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
})

export type NextBacktopProps = ExtractPropTypes<typeof nextBacktopProps>
export type NextBacktopInstance = InstanceType<typeof NextBacktop>
