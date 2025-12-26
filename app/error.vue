<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{
  error: NuxtError
}>()

if (props.error.statusCode !== 404) {
  console.error(props.error.message)
}
</script>

<template>
  <UApp>
    <Header />
    <UMain>
      <UContainer>
        <UError :error="error" />
      </UContainer>
    </UMain>
    <Footer />
  </UApp>
</template>
