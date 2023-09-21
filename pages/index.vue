<script setup lang="ts">
import type { Post } from '~/types/wordpress';

const route = useRoute()
const config = useRuntimeConfig();
const cacheKey = 'allPosts'
const cachedPosts = useNuxtData(cacheKey)
const posts = ref()

if (cachedPosts.data.value) {
  console.log('found cached posts', cachedPosts.data.value)
  posts.value = cachedPosts.data.value
} else {
  console.log('no cached posts found')

  const { data, refresh, pending } = await useFetch(config.public.wordpressUrl, {
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
      <div class="grid gap-8 grid-cols-1 lg:grid-cols-3 p-6">
        <Post v-for="post in posts" :key="post.uri" :post="post"></Post>
      </div>
    </UContainer>
  </NuxtLayout>
</template>
