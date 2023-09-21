<script setup lang="ts">
import type { CoreParagraph } from '../types/wordpress-blocks'
defineProps<{
    block: CoreParagraph
}>();
</script>

<template>
    <p v-html="block.attributes.content"></p>
</template>
