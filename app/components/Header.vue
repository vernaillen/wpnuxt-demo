<script setup lang="ts">
const { data } = await useWPMenu()

const menu = computed(() =>
  data?.map(link => ({
    label: link.label,
    to: link.uri
  })) || [])
const wpMenu = useState('wpMenu', () => [])
wpMenu.value = menu.value

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
