<template>
  <div
    :class="[
      ns.b(),
      ns.is('split', split),
      ns.is('stripe', stripe),
      ns.m(size),
    ]"
  >
    <div v-if="$slots.header || header" :class="ns.e('header')">
      <slot name="header">{{ header }}</slot>
    </div>
    <!---->
    <ul :class="ns.e('inner')">
      <slot />
      <!-- <li class="t-list-item">
        <div class="t-list-item-main">列表内容的描述性文字</div>
        <div class="t-list-item__action">
          <a class="el-link el-link--primary is-underline">操作1</a>
          <a class="el-link el-link--primary is-underline">操作2</a>
          <a class="el-link el-link--primary is-underline">操作3</a>
        </div>
      </li> -->
      <!-- <li class="t-list-item">
        <div class="t-list-item-main">列表内容的描述性文字</div>
        <div class="t-list-item__action">
          <a class="el-link el-link--primary is-underline">操作1</a>
          <a class="el-link el-link--primary is-underline">操作2</a>
          <a class="el-link el-link--primary is-underline">操作3</a>
        </div>
      </li>
      <li class="t-list-item">
        <div class="t-list-item-main">列表内容的描述性文字</div>
        <div class="t-list-item__action">
          <a class="el-link el-link--primary is-underline">操作1</a>
          <a class="el-link el-link--primary is-underline">操作2</a>
          <a class="el-link el-link--primary is-underline">操作3</a>
        </div>
      </li>
      <li class="t-list-item">
        <div class="t-list-item-main">列表内容的描述性文字</div>
        <div class="t-list-item__action">
          <a class="el-link el-link--primary is-underline">操作1</a>
          <a class="el-link el-link--primary is-underline">操作2</a>
          <a class="el-link el-link--primary is-underline">操作3</a>
        </div>
      </li>
      <li class="t-list-item">
        <div class="t-list-item-main">列表内容的描述性文字</div>
        <div class="t-list-item__action">
          <a class="el-link el-link--primary is-underline">操作1</a>
          <a class="el-link el-link--primary is-underline">操作2</a>
          <a class="el-link el-link--primary is-underline">操作3</a>
        </div>
      </li>
      <li class="t-list-item">
        <div class="t-list-item-main">
          <div class="t-list-item__meta">
            <div class="t-list-item__meta-avatar">
              <img src="https://tdesign.gtimg.com/site/avatar.jpg" />
            </div>
            <div class="t-list-item__meta-content">
              <h3 class="t-list-item__meta-title">列表主内容</h3>
              <p class="t-list-item__meta-description">列表内容列表内容</p>
            </div>
          </div>
        </div>
        <div class="t-list-item__action">
          <a class="el-link el-link--primary is-underline">操作1</a>
          <a class="el-link el-link--primary is-underline">操作2</a>
          <a class="el-link el-link--primary is-underline">操作3</a>
        </div>
      </li> -->
    </ul>
    <!---->
    <div v-if="$slots.footer || footer" :class="ns.e('footer')">
      <slot name="footer">{{ footer }}</slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useNamespace } from '@element-plus/hooks'
import { nextListProps } from './next-list'

defineOptions({
  name: 'ElNextList',
})

defineProps(nextListProps)

const ns = useNamespace('next-list')
</script>
