<script setup lang="ts">
import type { EditorBlock } from '#gql';
defineProps<{
    blocks: EditorBlock[]
}>();
</script>

<template>
    <Block v-for="block, index in blocks" :key="index" :block="block"></Block>
</template>
