<script setup lang="ts">
import { ref } from 'vue'
import VPFullScreenMenu from './full-screen/vp-menu.vue'
import VPFullScreenTranslation from './full-screen/vp-translation.vue'
import VPFullScreenThemeToggler from './full-screen/vp-theme-toggler.vue'

defineProps<{
  fullScreen: boolean
}>()

const fullscreen = ref()
</script>

<template>
  <Transition name="hu-fade-in">
    <div v-if="fullScreen" ref="fullscreen">
      <div class="full-screen-container">
        <VPFullScreenMenu @close="$emit('close')" />
        <VPFullScreenTranslation @close="$emit('close')" />
        <VPFullScreenThemeToggler />
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
.full-screen {
  position: fixed;
  top: var(--nav-height);
  right: 0;
  bottom: 0;
  left: 0;
  padding: 0 32px;
  width: 100%;
  background-color: var(--bg-color);
  transition: background-color 0.5s;
  overflow-y: auto;

  &.hu-fade-in-enter-active,
  &.hu-fade-in-leave-active {
    .full-screen-container {
      transition: transform var(--hu-transition-duration)
        var(--hu-transition-function-ease-in-out-bezier);
    }
  }

  &.hu-fade-in-enter-from,
  &.hu-fade-in-leave-to {
    .full-screen-container {
      transform: translateY(-8px);
    }
  }

  .full-screen-container {
    margin: 0 auto;
    padding: 24px 0 96px;
    max-width: 18rem;
  }
}
</style>
