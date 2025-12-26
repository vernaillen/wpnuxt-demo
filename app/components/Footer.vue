<script setup lang="ts">
const wpMenu = useState<{ label: string, to: string }[]>('wpMenu', () => [])
const wpUri = useWPUri()
</script>

<template>
  <UFooter class="text-sm">
    <template #left>
      <p class="text-muted text-sm">
        a Proof of Concept by <a
          href="https://vernaillen.dev"
          class="text-primary hover:underline"
        >Wouter Vernaillen</a>
      </p>
    </template>

    <UNavigationMenu
      :items="wpMenu"
      variant="link"
    />

    <template #right>
      <UButton
        icon="i-mdi-wordpress"
        size="xs"
        color="neutral"
        variant="ghost"
        :to="wpUri.admin"
        target="_blank"
        aria-label="WordPress admin"
      />
      <UColorModeButton v-if="!$colorMode.forced" />
    </template>
  </UFooter>
</template>
