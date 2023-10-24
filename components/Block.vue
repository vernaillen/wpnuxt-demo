<script setup lang="ts">
import CoreParagraphComponent from './CoreParagraph.vue';
import CoreImageComponent from './CoreImage.vue';
import CoreGalleryComponent from './CoreGallery.vue';
import CoreQuoteComponent from './CoreQuote.vue';
import EditorBlockComponent from './EditorBlock.vue';
import type { EditorBlock } from '#gql';
const props = defineProps<{
    block: EditorBlock
}>();
const blockName= computed(() => {
    if (props.block.name === 'core/paragraph') return CoreParagraphComponent
    else if (props.block.name === 'core/image') return CoreImageComponent
    else if (props.block.name === 'core/gallery') return CoreGalleryComponent
    else if (props.block.name === 'core/quote') return CoreQuoteComponent
    else return EditorBlockComponent
})

</script>

<template>
    <component :is="blockName" :block="block" />
</template>
