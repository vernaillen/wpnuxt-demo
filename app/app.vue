<script setup lang="ts">
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
  title: 'WPNuxt Demo',
  ogTitle: 'WPNuxt Demo',
  description: 'Nuxt with WordPress as a headless CMS',
  ogDescription: 'Nuxt with WordPress as a headless CMS'
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
