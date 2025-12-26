<script setup lang="ts">
interface MenuItem {
  label: string | undefined
  to: string | undefined
}

const { data } = await useMenu()

const menu = computed<MenuItem[]>(() =>
  data.value?.map(link => ({
    label: link.label,
    to: link.uri
  })) || [])
const wpMenu = useState<MenuItem[]>('wpMenu', () => [])
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
