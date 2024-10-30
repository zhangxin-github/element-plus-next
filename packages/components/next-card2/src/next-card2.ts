import { buildProps, definePropType } from '@element-plus/utils'
import type { ExtractPropTypes, StyleValue } from 'vue'
import type NextCard2 from './next-card2.vue'

export const nextCard2Props = buildProps({
  /**
   * @description 继承了 el-card 的所有属性
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
   * @description
   */
  type: {
    type: String,
    default: '',
    validator: (value: string) =>
      ['horizontal', 'vertical', ''].includes(value),
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
