<script setup lang="ts">
const menu = await useMenu()
const settings = await useSettings()

const links = computed(() => menu.menu.value.map((link) => ({
  label: link.label,
  to: link.uri
})))
</script>

<template>
  <UHeader :links="links"> 
      <template #logo>
        <h1 class="font-bold">
            {{ settings.title }}
        </h1>
      </template>
      <template #panel>
        <LazyUNavigationTree :links="links" :multiple="false" />
      </template>
      <template #right>
          <UColorModeButton v-if="!$colorMode.forced" />
      </template>
  </UHeader>
  <UMain>
    <UContainer>
      <UPage class="pt-10">
        <NuxtPage />
      </UPage>
    </UContainer>
  </UMain>
  <UFooter :links="links" class="text-sm">
    <template #right>
      <div class="prose dark:prose-invert text-sm">
        a Proof of Concept by <a href="https://vernaillen.dev">Wouter Vernaillen</a>
      </div>
    </template>
  </UFooter>
  <EasyLightbox />
</template>
