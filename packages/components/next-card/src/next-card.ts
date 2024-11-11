import { buildProps, definePropType } from '@element-plus/utils'
import type { ExtractPropTypes, StyleValue } from 'vue'
import type NextCard from './next-card.vue'

export const nextCardProps = buildProps({
  /**
   *
   * @description 基础组件属性
   *
   */
  header: {
    type: String,
    default: '',
  },
  footer: {
    type: String,
    default: '',
  },
  bodyStyle: {
    type: definePropType<StyleValue>([String, Object, Array]),
    default: '',
  },
  bodyClass: String,
  shadow: {
    type: String,
    values: ['always', 'hover', 'never'],
    default: 'always',
  },
  /**
   *
   * @description 增强组件属性
   *
   */
  headerBordered: {
    type: Boolean,
    default: false,
  },
  /**
   * @description
   */
  type: {
    type: String,
    default: '',
    validator: (value: string) =>
      ['horizontal', 'vertical', ''].includes(value),
  },
  /**
   * @description
   */
  img: {
    type: String,
    default: '',
  },
  /**
   * @description
   */
  title: {
    type: String,
    default: '',
  },
  /**
   * @description
   */
  desc: {
    type: String,
    default: '',
  },
})

export type NextCardProps = ExtractPropTypes<typeof nextCardProps>
export type NextCardInstance = InstanceType<typeof NextCard>
