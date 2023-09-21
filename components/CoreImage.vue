<script setup lang="ts">
import type { CoreImage } from '../types/wordpress-blocks'
const props = defineProps<{
    block: CoreImage
}>();
</script>

<template>
    <Image 
        v-if="props.block?.attributes?.url" 
        :url="props.block?.attributes?.url"
        :alt="block?.attributes?.alt" 
        :width="block?.attributes?.width"
        :height="block?.attributes?.height" />
    <div v-else v-html="block?.originalContent"/>
</template>
