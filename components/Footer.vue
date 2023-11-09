<script setup lang="ts">
const menu = await useMenu()
const wpUri = useWPUri()

const wpMenu = computed(() => menu.menu.value.map((link) => ({
    label: link.label,
    to: link.uri
})))
const links = computed(() => [
    ...wpMenu.value,
    {
        label: 'Test',
        to: '/test'
    }
])
</script>

<template>
      <UFooter :links="links" class="text-sm">
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
              class="mx-1" />
            <UColorModeButton v-if="!$colorMode.forced" />
        </template>
      </UFooter>
</template>