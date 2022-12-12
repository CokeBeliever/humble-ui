import 'normalize.css'
import '@humble-ui/theme-chalk/src/index.scss'
import '@humble-ui/theme-chalk/src/dark/css-vars.scss'
import './styles/css-vars.scss'
import './styles/app.scss'
import 'uno.css'

import VPApp from './components/vp-app.vue'
import VPDemo from './components/vp-demo.vue'

import type { Component } from 'vue'

export { default as NotFound } from './components/vp-not-found.vue'
export default VPApp
export const globals: [string, Component][] = [['Demo', VPDemo]]
