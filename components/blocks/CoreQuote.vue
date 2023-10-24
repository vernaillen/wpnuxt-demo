<script setup lang="ts">
import type { CoreQuote } from '#gql';
defineProps<{
    block: CoreQuote
}>();
</script>

<template>
    <p v-html="block.renderedHtml"></p>
</template>
