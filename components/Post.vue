<script setup lang="ts">
import type { Post } from '~/types/wordpress';
const props = defineProps<{
    post: Post
}>();
</script>

<template>
    <NuxtLink :to='post.uri'>
        <UCard>
            <template #header>
                <div class="h-[144px] sm:h-[257px] md:h-[167px] lg:h-[147px] xl:h-[179px] 2xl:h-[210px]">
                    <Image 
                        v-if="post.featuredImage?.node?.sourceUrl" 
                        :url="post.featuredImage?.node?.sourceUrl" 
                        class="object-cover"
                    />
                </div>
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
