import { INSTALLED_KEY } from '@humble-ui/constants'
import { version } from './version'

import type { App, Plugin } from 'vue'

export const makeInstaller = (components: Plugin[] = []) => {
  const install = (app: App, options?: any) => {
    if (app[INSTALLED_KEY]) return

    app[INSTALLED_KEY] = true
    components.forEach((c) => app.use(c))

    if (options) {
      // ...
    }
  }

  return {
    version,
    install,
  }
}
