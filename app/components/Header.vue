<script setup lang="ts">
const { data: menu } = await useWPMenu()

const wpMenu = computed(() => menu.value?.map(link => ({
  label: link.label,
  to: link.uri
})))
const links = computed(() => [
  ...wpMenu.value,
  {
    label: 'WPNuxt info',
    children: [
      {
        label: 'Composables',
        to: '/composables'
      },
      {
        label: 'Generated Composables',
        to: '/generated-composables'
      }
    ]
  }
])
</script>

<template>
  <UHeader :links="links">
    <template #logo>
      <WPNuxtLogo />
    </template>
  </UHeader>
</template>
