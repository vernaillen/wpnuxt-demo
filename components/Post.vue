<script setup lang="ts">
import type { Post } from '#gql';
defineProps<{
    post: Post
}>();
</script>

<template>
    <NuxtLink v-if="post.uri" :to='post.uri'>
        <UCard>
            <template #header>
                <div class="w-full h-[144px] sm:h-[257px] md:h-[167px] lg:h-[147px] xl:h-[179px] 2xl:h-[210px]">
                    <Image 
                        v-if="post.featuredImage?.node?.sourceUrl" 
                        :url="post.featuredImage?.node?.sourceUrl" 
                        class="object-cover imgTransition"
                    />
                </div>
            </template>
            <h2 class="font-semibold text-2xl font-mic32">
                {{ post.title }}
            </h2>
            <p v-if="post.date" class="text-xs mt-2"><nuxt-time :datetime="post.date" month="long" day="numeric" year="numeric" locale="nl-BE" /></p>
            <template #footer>
                <div v-html="post.excerpt" />
            </template>
        </UCard>
    </NuxtLink>
</template>

<style scoped>
h2 {
    view-transition-name: post;
}

img.imgTransition {
  view-transition-name: selected-film;
}
</style>

<style>
::view-transition-old(post),
::view-transition-new(post) {
    width: auto;
}
</style>
