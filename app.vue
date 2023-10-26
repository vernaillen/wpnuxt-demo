<template>
  <NuxtLoadingIndicator id="pageTop" color="repeating-linear-gradient(to right,rgb(197 213 45/100%) 0%,rgb(170 168 87/100%) 33%,rgb(157 177 159/100%) 66%,rgb(0 71 69/100%) 100%)" />
  <div>
      <HeaderComponent />
      <div class="min-h-screen">
        <NuxtPage />
      </div>
      <TheFooter />
  </div>
  <EasyLightbox />
</template>


<style scoped>
/* You can customise the default animation here. */
::view-transition-old(root) {
  animation: 90ms cubic-bezier(0.4, 0, 1, 1) both fade-out; 
}
::view-transition-new(root) {
  animation: 210ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in;
}
</style>

<style>
.nuxt-loading-indicator {
  @apply !opacity-100
}

.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-enter-from,
.page-leave-to {
  @apply opacity-70;
}
</style>