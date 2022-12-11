<script setup lang="ts">
import { computed } from 'vue'
import { isClient } from '@vueuse/core'
import { useLang } from '../composables/lang'
import localeData from '../../i18n/pages/not-found.json'

const lang = useLang()

const locale = computed(() => localeData[lang.value])

const goHome = () => {
  if (!isClient) return
  window.location.href = `/${lang.value}/`
}
</script>

<template>
  <div class="text-center">
    <h1>{{ locale['title'] }}</h1>
    <p>{{ locale['desc'] }}</p>
    <button @click="goHome">{{ locale['button-title'] }}</button>
  </div>
</template>

<style scoped></style>
