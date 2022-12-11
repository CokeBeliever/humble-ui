import consola from 'consola'
import { REPO_BRANCH, REPO_PATH } from '@humble-ui/build-constants'
import { docsDirName } from '@humble-ui/build-utils'
import { languages } from './utils/lang'
import { nav, sidebars } from './configs'
import type { UserConfig } from 'vitepress'

consola.debug(`DOC_ENV: ${process.env.DOC_ENV}`)

const locales = {}
languages.forEach((lang) => {
  locales[`/${lang}`] = {
    label: lang,
    lang,
  }
})

export const config: UserConfig = {
  title: 'Humble UI',
  description: 'A Vue 3 UI Library',
  lastUpdated: true,
  themeConfig: {
    repo: REPO_PATH,
    docsBranch: REPO_BRANCH,
    docsDir: docsDirName,

    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',

    sidebars,
    nav,
    langs: languages,
  },

  locales,
}

export default config
