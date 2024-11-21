import { withInstall, withNoopInstall } from '@element-plus/utils'

import NextList from './src/next-list.vue'
import NextListItem from './src/next-list-item.vue'
import type { SFCWithInstall } from '@element-plus/utils'

export const ElNextList: SFCWithInstall<typeof NextList> & {
  NextListItem: typeof NextListItem
} = withInstall(NextList, {
  NextListItem,
})
export default ElNextList
export const ElNextListItem: SFCWithInstall<typeof NextListItem> =
  withNoopInstall(NextListItem)

export * from './src/next-list'
export * from './src/next-list-item'
