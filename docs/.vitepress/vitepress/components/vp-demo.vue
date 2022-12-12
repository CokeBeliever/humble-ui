<script setup lang="ts">
import { computed, toRef } from 'vue'
import { useClipboard, useToggle } from '@vueuse/core'
import { useLang } from '../composables/lang'
import { useSourceCode } from '../composables/source-code'

import demoBlockLocale from '../../i18n/component/demo-block.json'

import Example from './demo/vp-example.vue'
import SourceCode from './demo/vp-source-code.vue'

const props = defineProps<{
  demos: object
  source: string
  path: string
  rawSource: string
  description?: string
}>()

const { copy, isSupported } = useClipboard({
  source: decodeURIComponent(props.rawSource),
  read: false,
})

const [sourceVisible, toggleSourceVisible] = useToggle()
const lang = useLang()
const demoSourceUrl = useSourceCode(toRef(props, 'path'))

const formatPathDemos = computed(() => {
  const demos = {}

  Object.keys(props.demos).forEach((key) => {
    demos[key.replace('../../examples/', '').replace('.vue', '')] =
      props.demos[key].default
  })

  return demos
})

const locale = computed(() => demoBlockLocale[lang.value])
const decodedDescription = computed(() =>
  decodeURIComponent(props.description!)
)

const copyCode = async () => {
  if (!isSupported) {
    console.log(locale.value['copy-error'])
  }
  try {
    await copy()
    console.log(locale.value['copy-success'])
  } catch (e: any) {
    console.log(e.message)
  }
}
</script>

<template>
  <ClientOnly>
    <!-- danger here DO NOT USE INLINE SCRIPT TAG -->
    <p text="sm" v-html="decodedDescription" />

    <div class="example">
      <Example :file="path" :demo="formatPathDemos[path]" />

      <div class="op-btns">
        <span :title="locale['edit-on-github']" :show-arrow="false">
          <span class="op-btn github" style="color: var(--text-color-light)">
            <a :href="demoSourceUrl" rel="noreferrer noopener" target="_blank">
              <i-ri-github-line />
            </a>
          </span>
        </span>
        <span :title="locale['copy-code']" :show-arrow="false">
          <span class="op-btn" @click="copyCode">
            <i-ri-file-copy-line />
          </span>
        </span>
        <span :title="locale['view-source']" :show-arrow="false">
          <span class="op-btn" @click="toggleSourceVisible()">
            <i-ri-code-line />
          </span>
        </span>
      </div>

      <SourceCode v-show="sourceVisible" :source="source" />

      <Transition name="hu-fade-in-linear">
        <div
          v-show="sourceVisible"
          class="example-float-control"
          @click="toggleSourceVisible(false)"
        >
          <span :size="16">
            <CaretTop />
          </span>
          <span>{{ locale['hide-source'] }}</span>
        </div>
      </Transition>
    </div>
  </ClientOnly>
</template>

<style scoped lang="scss">
.example {
  border: 1px solid var(--border-color);
  border-radius: var(--hu-border-radius-base);

  .op-btns {
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 2.5rem;

    .op-btn {
      &:hover {
        color: var(--text-color);
      }
    }

    .op-btn {
      margin: 0 0.5rem;
      cursor: pointer;
      color: var(--text-color-lighter);
      transition: 0.2s;

      &.github a {
        transition: 0.2s;
        color: var(--text-color-lighter);

        &:hover {
          color: var(--text-color);
        }
      }
    }
  }

  &-float-control {
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid var(--border-color);
    height: 44px;
    box-sizing: border-box;
    background-color: var(--bg-color, #fff);
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    margin-top: -1px;
    color: var(--hu-text-color-secondary);
    cursor: pointer;
    position: sticky;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    span {
      font-size: 14px;
      margin-left: 10px;
    }

    &:hover {
      color: var(--hu-color-primary);
    }
  }
}
</style>
