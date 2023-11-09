<script setup lang="ts">
const menu = await useMenu()
const settings = await useSettings()
const viewer = await useViewer()

const links = computed(() => menu.menu.value.map((link) => ({
    label: link.label,
    to: link.uri
})))
</script>

<template>
    <UHeader :links="links"> 
        <template #logo>
            {{ settings.title }}
        </template>
        <template #right>
            <UColorModeButton v-if="!$colorMode.forced" />
            <UButton
                to="/auth"
                icon="i-heroicons-user"
                variant="soft"
                size="sm"
            >
                <span
                v-if="viewer?.username"
                class="ml-2"
                >
                {{ viewer.username }}
                </span>
                <span
                v-else
                class="text-sm"
                >Sign in</span>
            </UButton>
        </template>
    </UHeader>
</template>