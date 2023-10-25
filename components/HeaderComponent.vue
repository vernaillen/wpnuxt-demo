<script setup lang="ts">
const { isMobileNavOpen, isMobileNavClosing } = useMobileNav()
const route = useRoute()
const menu = await useMenu()
const settings = await useSettings()

const navbarTogglerClass = computed(() => {
  return isMobileNavOpen.value ? 'navbarTogglerActive' : ''
})
const navbarCollapseClass = computed(() => {
  if (isMobileNavOpen.value && isMobileNavClosing.value) {
    return 'opacity-10 blur-lg'
  } else if (isMobileNavOpen.value) {
    return ''
  } else {
    return 'hidden'
  }
})

function checkCurrentRoute (clickedPath: string | undefined) {
  if (clickedPath === route.path) {
    isMobileNavOpen.value = false
  }
  // else do nothing (mobileNav will be automatically hidden on page:finish)
}
onMounted(() => {
  window.addEventListener('resize', () => { isMobileNavOpen.value = false })
})
</script>

<template>
  <header
    class="header fixed h-[68px] sm:h-[72px] bg-opacity-0 w-full flex z-40 transition-colors duration-300"
  >
    <div class="w-full container mx-auto">
      <div class="grid grid-cols-5">
        <div class="text-left w-5 py-4 px-0">
          <button
            id="navbarToggler"
            :class="navbarTogglerClass"
            class="p-1 block cursor-pointer z-50"
            aria-label="Mobile Menu"
            @click="isMobileNavOpen = !isMobileNavOpen"
          >
            <span class="relative w-[30px] h-[2px] my-[6px] block bg-trance dark:bg-primary-200 transition" />
            <span class="relative w-[30px] h-[2px] my-[6px] block bg-trance dark:bg-primary-200 transition" />
            <span class="relative :w-[30px] h-[2px] my-[6px] block bg-trance dark:bg-primary-200 transition" />
          </button>
        </div>
        <div class="col-span-3 prose dark:prose-invert p-4 text-center font-mic32 text-2xl sm:text-2xl md:text-3xl">
          <NuxtLink
              v-show="!isMobileNavOpen"
              to="/"
              aria-label="Harmonics logo, click to go back to home"
              class="text-trance-500 dark:text-trance-200 border-transparent"
              @click="checkCurrentRoute('/')"
            >
            {{ settings.title }}
          </NuxtLink>
        </div>
        <div class="text-right py-5 mx-0 px-0 align-top">
          <ColorModeSwitcher class="mr-4" />
        </div>
      </div>
    </div>
  </header>
  <nav
    id="navbar"
    class="bg-white dark:bg-dark fixed top-0 left-0 right-0 bottom-0 h-full z-30 transition-all transform duration-300"
    :class="navbarCollapseClass"
  >
    <div class="w-full h-full justify-center flex pt-20 sm:pt-32 mb-12 overflow-scroll">
      <div class="px-8 text-center">
        <div class="prose text-4xl sm:text-5xl font-mic32 mb-12">
          <NuxtLink
            to="/"
            aria-label="Harmonics logo, click to go back to home"
            class="text-trance-500 dark:text-trance-200 border-transparent"
            @click="checkCurrentRoute('/')"
          >
            {{ settings.title }}
          </NuxtLink>
        </div>
        <ul>
          <li class="prose text-center p-0 my-4 sm:my-6 lg:my-8">
            <NuxtLink
              to="/"
              class="text-2xl sm:text-3xl text-center border-transparent"
              @click="checkCurrentRoute('/')"
            >
              Home / News
            </NuxtLink>
          </li>
          <li
            v-for="link of menu.menu.value"
            :key="link.uri"
            class="prose text-center p-0 my-4 sm:my-6 lg:my-8"
          >
            <NuxtLink
              :to="link.uri"
              class="text-2xl sm:text-3xl text-center border-transparent"
              @click="checkCurrentRoute(link.uri)"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style>
.navbarTogglerActive > span:nth-child(1) {
  @apply transform rotate-45 top-[7px];
}
.navbarTogglerActive > span:nth-child(2) {
  @apply opacity-0;
}
.navbarTogglerActive > span:nth-child(3) {
  @apply top-[-8px] transform rotate-[135deg];
}
</style>
