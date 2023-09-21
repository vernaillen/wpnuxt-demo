<script setup lang="ts">
import type { Block } from '../types/wordpress-blocks'
defineProps<{
    block: Block
}>();
</script>

<template>
    <div class="text-xs my-2">{{ block.name }} - {{ block?.attributes }}</div>
</template>