<script setup lang="ts">
import type { Block } from '../types/wordpress-blocks'
defineProps<{
    block: Block
}>();
</script>

<template>
    <p v-html="block.originalContent"></p>
</template>
