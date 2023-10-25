const { isMobileNavOpen, isMobileNavClosing } = useMobileNav()

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('page:finish', () => {
    isMobileNavClosing.value = true
    setTimeout(() => {
      isMobileNavOpen.value = false
      isMobileNavClosing.value = false
    }, 100)
  })
})
