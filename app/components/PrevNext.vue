<script setup lang="ts">
defineProps<{
  prev?: string
  next?: string
  prevButton?: string
  nextButton?: string
}>()
</script>

<template>
  <div class="grid grid-cols-3 gap-6 max-w-28">
    <div class="flex justify-start">
      <UButton
        v-if="prev"
        :alt="prevButton"
        :to="'/' + prev"
        variant="soft"
        icon="i-heroicons-arrow-left-16-solid"
      />
      <div
        v-else
        class="w-8 h-8 focus:outline-none focus-visible:outline-0 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 text-primary-500 dark:text-primary-400 bg-primary-50 dark:bg-primary-950 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
      />
    </div>
    <div class="flex justify-center">
      <UButton
        to="/"
        icon="i-heroicons-home"
      />
    </div>
    <div class="flex justify-end">
      <UButton
        v-if="next"
        :alt="nextButton"
        :to="'/' + next"
        variant="soft"
        trailing-icon="i-heroicons-arrow-right-16-solid"
      />
      <div
        v-else
        class="w-8 h-8 focus:outline-none focus-visible:outline-0 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 text-primary-500 dark:text-primary-400 bg-primary-50 dark:bg-primary-950 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
      />
    </div>
  </div>
</template>
