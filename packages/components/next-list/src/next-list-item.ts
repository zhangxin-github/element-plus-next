import { buildProps } from '@element-plus/utils'
// import { nextListProps } from './next-list'

import type { ExtractPropTypes } from 'vue'
import type NextListItem from './next-list-item.vue'

export const nextListItemProps = buildProps({
  avatar: {
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

export type NextListItemProps = ExtractPropTypes<typeof nextListItemProps>
export type NextListItemInstance = InstanceType<typeof NextListItem>
