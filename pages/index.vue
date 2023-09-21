<script setup lang="ts">
import type { Post } from '~/types/wordpress';

const route = useRoute()
const config = useRuntimeConfig();
const cacheKey = 'allPosts'
const cachedPosts = useNuxtData(cacheKey)
const posts = ref()

if (cachedPosts.data.value) {
  posts.value = cachedPosts.data.value
} else {
  const { data, refresh, pending } = await useFetch(config.public.wpGraphQLUrl, {
    key: cacheKey,
    method: 'get',
    query: {
      query: `
      query QueryWPPosts {
        posts(first:10){
          nodes {
            title
            date
            excerpt
            uri
            featuredImage {
              node {
                id
                sourceUrl
              }
            }
          }
        }
      }`
    },
    transform (data: any) {
      return data.data.posts.nodes as Array<Post>;
    }
  });
  posts.value = data.value
}
useHead({
  title: "Home"
})
</script>

<template>
  <NuxtLayout>
    <UContainer>
      <div class="pt-5 pb-10 prose dark:prose-invert">
        The posts below were added in <a href="https://wordpress.org" target="_blank">WordPress</a> and fetched in <a href="https://nuxt.com" target="_blank">Nuxt</a> with <a href="https://wordpress.org/plugins/wp-graphql/" target="_blank">GraphQL</a>.<br>
        Custom Nuxt components allow full control over the rendering of the different types of <a href="https://wordpress.org/gutenberg/" target="_blank">Gutenberg blocks.</a><br>
        Styling in Nuxt is done with <a href="https://tailwindcss.com/" target="_blank">TailwindCSS</a> and <a href="https://ui.nuxt.com" target="_blank">Nuxt UI</a>.<br>
        Images are optimized with <a href="https://image.nuxt.com/" target="_blank">Nuxt Image</a> and the <a href="https://www.twicpics.com/" target="_blank">TwicPics</a> provider.
      </div>
      <div class="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Post v-for="post in posts" :key="post.uri" :post="post"></Post>
      </div>
    </UContainer>
  </NuxtLayout>
</template>
