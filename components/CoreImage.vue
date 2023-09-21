<script setup lang="ts">
import type { CoreImage } from '../types/wordpress-blocks'
const config = useRuntimeConfig();
const wpUrl = config.public.wordpressUrl
const props = defineProps<{
    block: CoreImage
}>();
const imgUrl = props.block?.attributes?.url ? props.block?.attributes?.url.replace(wpUrl, '') : undefined
console.log(imgUrl)
</script>

<template>
    <Image v-if="props.block?.attributes?.url" :url="props.block?.attributes?.url"
        :alt="block?.attributes?.alt" 
        :width="block?.attributes?.width"
        :height="block?.attributes?.height" />
    <div v-else v-html="block?.originalContent"/>
</template>
