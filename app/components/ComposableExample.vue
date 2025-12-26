<script setup lang="ts">
const props = defineProps<{
  code: string
  trigger: () => void | Promise<void>
}>()
</script>

<template>
  <div class="grid grid-cols-12 gap-2 mb-2">
    <pre class="col-span-11 m-0 py-2 flex justify-start">
      <code>{{ code }}</code>
    </pre>
    <div>
      <UButton
        icon="i-mdi-play"
        aria-label="Run the code"
        @click="props.trigger"
      />
    </div>
  </div>
</template>
