<script setup lang="ts">
import type { Post } from '~/types/wordpress';

defineProps<{
    post: Post
}>();
</script>

<template>
    <NuxtLink :to='post.uri'>
        <UCard>
            <template #header>
                <NuxtImg v-if="post.featuredImage?.node?.sourceUrl" :src="post.featuredImage?.node?.sourceUrl"/>
            </template>
            <h2 class="font-semibold text-2xl font-mic32">
                {{ post.title }}
            </h2>
            <p class="text-xs mt-2"><nuxt-time :datetime="post.date" month="long" day="numeric" year="numeric" locale="nl-BE" /></p>
            <template #footer>
                <div v-html="post.excerpt" />
            </template>
        </UCard>
    </NuxtLink>
</template>
