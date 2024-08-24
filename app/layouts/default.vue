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
@keyframes content-enter {
  0% {
    @apply opacity-10 blur-sm;
  }
  to {
    @apply opacity-100 blur-0;
  }
}

@media (prefers-reduced-motion:no-preference) {
  .content-enter {
    animation: content-enter 0.2s both 0.2s;
    animation-delay: 0s;
  }
}
</style>
