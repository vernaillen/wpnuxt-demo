<template>
  <StagingBanner v-if="useWPNuxt().isStaging" />
  <Header :class="useWPNuxt().isStaging ? 'mt-[34px]' : 'mt-0'" />
  <UMain>
      <NuxtPage />
  </UMain>
  <Footer />
  <EasyLightbox />
</template>
