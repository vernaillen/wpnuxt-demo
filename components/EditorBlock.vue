<script setup lang="ts">
import type { EditorBlock } from '#gql';
defineProps<{
    block: EditorBlock
}>();
</script>

<template>
    <p v-html="block.renderedHtml"></p>
</template>
