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
  <UHeader>
    <template #title>
      <WPNuxtLogo />
    </template>
    <template #body>
      <UNavigationMenu
        orientation="vertical"
        :items="links"
      />
    </template>
    <UNavigationMenu
      orientation="horizontal"
      :items="links"
    />
  </UHeader>
</template>
