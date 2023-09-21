<template>
  <NuxtLoadingIndicator id="pageTop" color="repeating-linear-gradient(to right,rgb(197 213 45/100%) 0%,rgb(170 168 87/100%) 33%,rgb(157 177 159/100%) 66%,rgb(0 71 69/100%) 100%)" />
  <div>
    <NuxtPage />
  </div>
  <EasyLightbox />
</template>

<style>
.nuxt-loading-indicator {
  opacity: 100% !important;
}
</style>