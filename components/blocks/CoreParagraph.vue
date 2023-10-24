<script setup lang="ts">
import type { CoreParagraph } from '#gql';
defineProps<{
    block: CoreParagraph
}>();
</script>

<template>  
    <p v-html="block?.attributes?.content"/>
</template>
