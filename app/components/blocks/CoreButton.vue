<script setup lang="ts">
import type { CoreButton } from '#wpnuxt/blocks'

defineProps<{
  block: CoreButton
}>()
</script>

<template>
  <div>
    <UButton
      :to="block.attributes.url ?? undefined"
      color="primary"
    >
      <span v-sanitize-html="block.attributes.text" />
    </UButton>
  </div>
</template>
