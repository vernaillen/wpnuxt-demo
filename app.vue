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

<style scoped>
/* this transition is here to fix the z-index issue as explaied here:
  https://www.nicchan.me/blog/view-transitions-and-stacking-context/
*/
header {
    view-transition-name: header;
}
</style>
