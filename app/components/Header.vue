<script setup lang="ts">
const { data: menu } = await useAsyncData('menu', () => useWPMenu())

const wpMenu = computed(() => menu.value?.data?.map(link => ({
  label: link.label,
  to: link.uri
})))
const links = computed(() => [
  ...wpMenu.value,
  {
    label: 'Composables',
    to: '/composables'
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
