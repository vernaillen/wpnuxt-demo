<script setup lang="ts">
const { data } = await useWPGeneralSettings()
const settings = useState('settings', () => data)

useHead({
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})
useSeoMeta({
  title: settings?.title || 'WPNuxt Demo',
  ogTitle: settings?.title || 'WPNuxt Demo',
  description: settings?.description || 'Nuxt with WordPress as a headless CMS',
  ogDescription: settings?.description || 'Nuxt with WordPress as a headless CMS'
})
</script>

<template>
  <div>
    <Header />
    <UMain>
      <NuxtPage />
    </UMain>
    <Footer />
    <EasyLightbox />
  </div>
</template>
