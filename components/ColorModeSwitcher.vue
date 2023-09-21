<script setup>
const colorMode = useColorMode()
const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
const showSpinner = ref(true)
onMounted(() => {
  showSpinner.value = false
})
</script>

<template>
  <ClientOnly>
    <UButton
      size="xs"
      aria-label="Switch Color Mode"
      class="z-20"
      :icon="isDark ? 'i-heroicons-moon' : 'i-heroicons-sun'"
      @click="isDark = !isDark"
    />
    <template #fallback>
      <UButton
        v-if="showSpinner"
        size="xs"
        aria-label="Loading Color Mode..."
        icon="i-ph-spinner"
        class="z-10 !my-0 inline-flex animate-spin rounded-full"
      />
    </template>
  </ClientOnly>
</template>
