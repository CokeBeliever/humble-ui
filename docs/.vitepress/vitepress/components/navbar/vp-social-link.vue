<script setup lang="ts">
import type { Component } from 'vue'

defineProps<{
  icon: Component
  link: string
  text: string
}>()
</script>

<template>
  <a
    :href="link"
    :title="text"
    target="_blank"
    rel="noreferrer noopener"
    class="social-link"
  >
    <span v-if="icon">
      <component :is="icon" />
    </span>
  </a>
</template>

<style scoped lang="scss">
.social-link {
  color: var(--text-color);
}
</style>
