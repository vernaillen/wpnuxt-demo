<script setup lang="ts">
import type { EditorBlock } from '#gql';

defineProps<{
    block: EditorBlock
}>();
</script>

<template>
    <div class="text-xs my-2">{{ block.name }} - {{ block?.attributes }}</div>
</template>