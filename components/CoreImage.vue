<script setup lang="ts">
import type { CoreImage } from '../types/wordpress-blocks'
defineProps<{
    block: CoreImage
}>();
</script>

<template>
    <NuxtImg
        v-if="block?.attributes?.url" 
        :src="block?.attributes?.url" 
        :alt="block?.attributes?.alt" 
        :width="block?.attributes?.width"
        :height="block?.attributes?.height" />
    <div v-else v-html="block?.originalContent"/>
</template>
