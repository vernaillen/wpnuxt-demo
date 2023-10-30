<script setup lang="ts">
const { isMobileNavOpen, isMobileNavClosing } = useMobileNav()
const route = useRoute()
const menu = await useMenu()
const settings = await useSettings()

const links = computed(() => menu.menu.value.map((menuItem) => ({
  label: menuItem.label,
  to: menuItem.uri
})))

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
  <UHeader :links="links"> 
      <template #logo>
          <h1 class="prose dark:prose-invert">
            <NuxtLink
                v-show="!isMobileNavOpen"
                to="/"
                aria-label="Harmonics logo, click to go back to home"
                class="text-trance-500 dark:text-trance-200 text-2xl"
                @click="checkCurrentRoute('/')"
              >
              {{ settings.title }}
            </NuxtLink>
          </h1>
      </template>
      <template #panel>
        <LazyUNavigationTree
          :links="links"
          :multiple="false"
        />
      </template>
      <template #right>
          <UColorModeButton v-if="!$colorMode.forced" />
      </template>
  </UHeader>
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
        <ul clas="prose dark:prose-invert  text-center">
          <li class="p-0 my-4 sm:my-6 lg:my-8">
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
            class="p-0 my-4 sm:my-6 lg:my-8"
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
