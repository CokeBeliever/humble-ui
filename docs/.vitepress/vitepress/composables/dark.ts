import { useDark, useToggle } from '@vueuse/core'

export const isDark = useDark({
  storageKey: 'hu-theme-appearance',
})

export const toggleDark = useToggle(isDark)
