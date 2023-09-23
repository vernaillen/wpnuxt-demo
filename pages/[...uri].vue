
<script setup lang="ts">
const route = useRoute();
const uri = route.params.uri
const post = await usePost(uri[0])

if (post?.data?.title) {
    useHead({
        title: post.data.title
    })
}
</script>
<template>
    <div>
        <UContainer v-if="post?.data">
            <nav class="mx-auto mt-2">
                <UButton to="/">Back</UButton>
            </nav>
            <main class="prose dark:prose-invert p-6 rounded-lg">
                <h1 class="text-4xl">{{ post.data.title }}</h1>
                <div class="text-xs text-primary-500 my-2">
                    gepubliceerd op <nuxt-time :datetime="post.data.date" month="long" day="numeric" year="numeric" locale="nl-BE" />
                </div>
                <div class="mt-5">
                    <BlockRenderer :blocks="post.data.blocks"/>
                </div>
            </main>
            <nav class="mx-auto mt-6 p-2 ">
                <UButton to="/">Back</UButton>
            </nav>
        </UContainer>
    </div>
</template>
