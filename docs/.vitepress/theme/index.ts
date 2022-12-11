import HumbleUI from 'humble-ui'
import VPApp, { NotFound } from '../vitepress'
import { define } from '../utils/types'

import './style.css'

import type { Theme } from 'vitepress'

export default define<Theme>({
  NotFound,
  Layout: VPApp,
  enhanceApp: ({ app }) => {
    app.use(HumbleUI)
  },
})
