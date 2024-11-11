import { buildProps } from '@element-plus/utils'

import type { ExtractPropTypes } from 'vue'
import type NextList from './next-list.vue'

export const nextListProps = buildProps({})

export type NextListProps = ExtractPropTypes<typeof nextListProps>
export type NextListInstance = InstanceType<typeof NextList>
