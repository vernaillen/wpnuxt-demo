<script setup lang="ts">
import type { CoreQuote } from '../types/wordpress-blocks'
defineProps<{
    block: CoreQuote
}>();
</script>

<template>
    <p v-html="block?.dynamicContent"></p>
</template>
