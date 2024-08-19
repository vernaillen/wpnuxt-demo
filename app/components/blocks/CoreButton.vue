<script setup lang="ts">
import type { CoreButton } from '#wpnuxt/blocks'

defineProps<{
  block: CoreButton
}>()
</script>

<template>
  <div>
    <UButton
      :to="block.attributes.url"
      color="blue"
    >
      <span v-sanitize="block.attributes.text" />
    </UButton>
  </div>
</template>
