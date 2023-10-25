import { createSharedComposable } from '@vueuse/core'

const _useMobileNav = () => {
  const isMobileNavOpen = ref(false)
  const isMobileNavClosing = ref(false)

  return {
    isMobileNavOpen,
    isMobileNavClosing
  }
}

export const useMobileNav = createSharedComposable(_useMobileNav)
