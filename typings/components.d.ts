// For this project development
import '@vue/runtime-core'

declare module '@vue/runtime-core' {
  // GlobalComponents for Volar
  export interface GlobalComponents {
    HuButton: typeof import('../packages/humble-ui')['HuButton']
  }
}

export {}
