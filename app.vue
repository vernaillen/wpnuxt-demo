<template>
  <NuxtLoadingIndicator id="pageTop" color="repeating-linear-gradient(to right,rgb(197 213 45/100%) 0%,rgb(170 168 87/100%) 33%,rgb(157 177 159/100%) 66%,rgb(0 71 69/100%) 100%)" />
  <div>
      <TheHeader />
      <NuxtPage />
      <TheFooter />
  </div>
  <EasyLightbox />
</template>

<style>
.nuxt-loading-indicator {
  @apply !opacity-100
}

.page-enter-active,
.page-leave-active {
  transition: all 0.1s;
}

.page-enter-from,
.page-leave-to {
  @apply opacity-70 blur-[2px];
}
</style>