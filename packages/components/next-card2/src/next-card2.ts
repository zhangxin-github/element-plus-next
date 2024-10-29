import { buildProps } from '@element-plus/utils'

import type { ExtractPropTypes } from 'vue'
import type NextCard2 from './next-card2.vue'

export const nextCard2Props = buildProps({
  type: {
    type: String,
    default: 'horizontal',
    validator: (value: string) => ['horizontal', 'vertical'].includes(value),
  },
  img: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
  desc: {
    type: String,
    default: '',
  },
})

export type NextCard2Props = ExtractPropTypes<typeof nextCard2Props>
export type NextCard2Instance = InstanceType<typeof NextCard2>
