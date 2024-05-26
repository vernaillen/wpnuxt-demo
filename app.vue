<script setup lang="ts">
const staging = await isStaging()
</script>

<template>
  <div v-if="staging">
    <StagingBanner />
  </div>
  <Header :class="staging ? 'mt-[34px]' : 'mt-0'" />
  <UMain>
      <NuxtPage />
  </UMain>
  <Footer />
  <EasyLightbox />
</template>

<style scoped>
/* this transition is here to fix the z-index issue as explaied here:
  https://www.nicchan.me/blog/view-transitions-and-stacking-context/
*/
header {
    view-transition-name: header;
}
</style>
