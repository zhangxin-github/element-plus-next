import { buildProps } from '@element-plus/utils'

import type { ExtractPropTypes } from 'vue'
import type NextList from './next-list.vue'

export const nextListProps = buildProps({
  header: {
    type: String,
    default: '',
  },
  footer: {
    type: String,
    default: '',
  },
  size: {
    type: String,
    default: 'medium',
  },
  split: Boolean,
  stripe: Boolean,
})

export type NextListProps = ExtractPropTypes<typeof nextListProps>
export type NextListInstance = InstanceType<typeof NextList>
