<script setup lang="ts">
const wpMenu = useState('wpMenu', () => [])
const wpUri = useWPUri()
</script>

<template>
  <UFooter
    :links="wpMenu"
    class="text-sm"
  >
    <template #left>
      <div class="prose dark:prose-invert text-sm">
        a Proof of Concept by <a href="https://vernaillen.dev">Wouter Vernaillen</a>
      </div>
    </template>
    <template #right>
      <UButton
        icon="i-mdi-wordpress"
        size="xs"
        variant="ghost"
        :to="wpUri.admin"
        aria-label="WordPress admin"
        class="mx-1"
      />
      <UColorModeButton v-if="!$colorMode.forced" />
    </template>
  </UFooter>
</template>
