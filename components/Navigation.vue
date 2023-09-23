<script setup lang="ts">
const menu = await useMenu()
</script>

<template>
    <nav>
        <span v-for="item, index in menu.menu.value" :key="index" class="mx-2">
            <NuxtLink :to="item.uri">
                {{ item.label }}
            </NuxtLink>
        </span>
    </nav>
</template>