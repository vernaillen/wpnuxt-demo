<script setup lang="ts">
import { isStaging } from '#imports'

const staging = await isStaging()
</script>

<template>
  <div>
    <slot />
    <StagingBanner
      v-if="staging"
    />
  </div>
</template>

<style>
@keyframes skeleton-leave {
  0% {
    @apply opacity-100;
  }
  to {
    @apply opacity-0;
  }
}

@media (prefers-reduced-motion:no-preference) {
  .skeleton-leave {
    animation: content-leave 0.5s both 0.5s;
    animation-delay: 0.1s;
  }
}
</style>
