<script lang="ts" setup>
import { useRoute } from 'vitepress'
import { useStorage } from '@vueuse/core'
import VPLink from '../common/vp-link.vue'
import { isActiveLink } from '../../utils'

import type { Link } from '../../types'
const USER_VISITED_NEW_RESOURCE_PAGE = 'USER_VISITED_NEW_RESOURCE_PAGE'
defineProps<{
  item: Link
}>()

const route = useRoute()
const isVisited = useStorage<boolean | string>(
  USER_VISITED_NEW_RESOURCE_PAGE,
  false
)

const onNavClick = () => {
  if (!isVisited.value) {
    isVisited.value = Date.now().toString()
  }
}
</script>

<template>
  <VPLink
    :class="{
      'is-menu-link': true,
      active: isActiveLink(
        route,
        item.activeMatch || item.link,
        !!item.activeMatch
      ),
    }"
    :href="item.link"
    :no-icon="true"
    @click="onNavClick"
  >
    {{ item.text }}
  </VPLink>
</template>

<style scoped lang="scss">
.is-menu-link {
  display: block;
  padding: 0 12px;
  line-height: calc(var(--nav-height) - 3px);
  font-size: 14px;
  font-weight: 500;
  color: var(--text-color);
  transition: color var(--hu-transition-duration);
  border-bottom: 2px solid transparent;

  &.active {
    border-bottom-color: var(--brand-color);
  }

  &:hover {
    color: var(--brand-color);
  }
}
</style>
