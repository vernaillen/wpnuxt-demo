<script setup lang="ts">
import CoreParagraph from './CoreParagraph.vue';
import CoreImage from './CoreImage.vue';
import CoreGallery from './CoreGallery.vue';
import CoreQuote from './CoreQuote.vue';
import CoreUnknown from './CoreUnknown.vue';
import type { Block } from '../types/wordpress-blocks'
const props = defineProps<{
    block: Block
}>();
const blockName= computed(() => {
    if (props.block.name === 'core/paragraph') return CoreParagraph
    else if (props.block.name === 'core/image') return CoreImage
    else if (props.block.name === 'core/gallery') return CoreGallery
    else if (props.block.name === 'core/quote') return CoreQuote
    else return CoreUnknown
})

</script>

<template>
    <component :is="blockName" :block="props.block" />
</template>
