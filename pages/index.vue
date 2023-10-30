<script setup lang="ts">
const posts = await usePosts()
useHead({
  title: "Home"
})
</script>

<template>
  <main>
    <div class="pb-5 -ml-2 mr-1 prose dark:prose-invert">
      <h1>News</h1>
    </div>
    <div v-show="posts" class="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <Post v-for="post in posts.data" :key="post.uri" :post="post"></Post>
    </div>
    <div v-show="!posts" class="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <PostSkeleton v-for="i in [1,2,3,4]"/>
    </div>
  </main>
</template>
