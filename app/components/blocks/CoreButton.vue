<script setup lang="ts">
import type { CoreButton } from '#wpnuxt/blocks'

defineProps<{
  block: CoreButton
}>()
</script>

<template>
  <div>
    Bluewashing the default CoreButton component:<br>
    <UButton
      :to="block.attributes.url"
      color="blue"
    >
      Blue <span v-sanitize="block.attributes.text" />
    </UButton>
  </div>
</template>
