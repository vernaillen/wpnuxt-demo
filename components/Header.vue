<script setup lang="ts">
const menu = await useMenu()
const viewer = await useViewer()

const wpMenu = computed(() => menu.data.map((link) => ({
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
        <template #right>
            <UButton
                to="/auth"
                icon="i-heroicons-user"
                variant="soft"
                size="sm"
            >
                <span
                v-if="viewer?.username"
                class="hidden sm:inline-block"
                >
                {{ viewer.username }}
                </span>
                <span
                v-else
                class="text-sm hidden sm:inline-block"
                >Sign in</span>
            </UButton>
        </template>
    </UHeader>
</template>