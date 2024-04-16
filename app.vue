<script setup lang="ts">
const { data: staging } = await isStaging()
</script>

<template>
  <StagingBanner v-if="staging" />
  <Header :class="staging ? 'mt-[34px]' : 'mt-0'" />
  <UMain>
      <NuxtPage />
  </UMain>
  <Footer />
  <EasyLightbox />
</template>
