
<script setup lang="ts">
const post = ref()
const route = useRoute();
const uri = route.params.uri.join('/');
const cacheKey = computed(() => `post-${uri}`)
const cachedPost = useNuxtData(cacheKey.value)

if (cachedPost.data.value) {
    post.value = cachedPost.data.value
} else {
    const config = useRuntimeConfig();
    const { data, pending, refresh, error } = await useFetch(config.public.wpGraphQLUrl, {
        key: cacheKey.value,
        method: 'get',
        query: {
            query: `
            query QueryWPPost($uri: String!) {
                nodeByUri(uri: $uri) {
                    ... on Post {
                        id
                        title
                        date
                        content,
                        blocks
                    }
                }
            }
            `,
            variables: {
                uri: uri
            }
        },
        transform (data) {
            return data.data.nodeByUri
        }
    })
    post.value = data.value
}

useHead({
    title: post.value.title
})
</script>
<template>
    <NuxtLayout>
        <UContainer>
            <nav class="mx-auto mt-6 p-2 ">
                <UButton to="/">Back</UButton>
            </nav>
            <main class="prose dark:prose-invert p-6 rounded-lg">
                <h1 class="text-4xl">{{ post.title }}</h1>
                <div class="text-xs text-primary-500 my-2">
                    gepubliceerd op <nuxt-time :datetime="post.date" month="long" day="numeric" year="numeric" locale="nl-BE" />
                </div>
                <div class="mt-5">
                    <BlockRenderer :blocks="post.blocks"/>
                </div>
            </main>
        </UContainer>
    </NuxtLayout>
</template>
