<script setup lang="ts">
const { data: menu } = await useWPMenu()
const currentUserName = await getCurrentUserName()

const wpMenu = computed(() => menu.value?.map(link => ({
  label: link.label,
  to: link.uri
})))
const links = computed(() => [
  ...wpMenu.value,
  {
    label: 'Composables',
    to: '/composables'
  },
  {
    label: 'Generated Composables',
    to: '/generated-composables'
  }

])
</script>

<template>
  <UHeader :links="links">
    <template #logo>
      <WPNuxtLogo />
    </template>
    <template #right>
      <UButton
        to="/auth"
        icon="i-heroicons-user"
        variant="soft"
        size="sm"
        aria-label="Sign in"
      >
        <span
          v-if="currentUserName"
          class="hidden sm:inline-block"
        >
          {{ currentUserName }}
        </span>
        <span
          v-else
          class="text-sm hidden sm:inline-block"
        >Sign in</span>
      </UButton>
    </template>
  </UHeader>
</template>
