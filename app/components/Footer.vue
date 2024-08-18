<script setup lang="ts">
const { data: menu } = await useAsyncData('menu', () => useWPMenu())
const wpUri = useWPUri()

const wpMenu = computed(() => menu.value?.data?.map(link => ({
  label: link.label,
  to: link.uri
})))
const links = computed(() => [
  ...wpMenu.value
])
</script>

<template>
  <UFooter
    :links="links"
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
