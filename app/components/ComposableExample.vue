<script setup lang="ts">
defineProps({
  code: {
    type: String,
    required: true
  },
  trigger: {
    type: Function,
    required: true
  }
})
</script>

<template>
  <div class="grid grid-cols-12 gap-2 mb-2">
    <pre class="col-span-11 m-0 py-2 flex justify-start">
      <code>{{ code }}</code>
    </pre>
    <div>
      <UButton
        icon="i-mdi-play"
        @click="trigger"
      />
    </div>
  </div>
</template>
