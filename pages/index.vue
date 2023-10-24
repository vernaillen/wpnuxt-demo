<script setup lang="ts">
//const posts = await usePosts()
const { data } = useAsyncGql('getPosts')
const posts = data.value?.posts?.nodes

useHead({
  title: "Home"
})

const items = [{
  label: 'Proof of Concept',
  icon: 'i-heroicons-star',
  defaultOpen: false,
  slot: 'poc'
}, {
  label: 'Styling',
  icon: 'i-heroicons-eye-dropper',
  defaultOpen: false,
  slot: 'styling'
}]
</script>

<template>
  <UContainer>
    <div class="pt-5 pb-5 -ml-2 mr-1 prose dark:prose-invert">
      <UAccordion :items="items">
        <template #item="{ item }">
          <p class="italic text-gray-900 dark:text-white text-center">
            {{ item.description }}
          </p>
        </template>
        <template #poc>
          <div class="px-11">
          The posts below were added in <a href="https://wordpress.org" target="_blank">WordPress</a> and fetched in <a href="https://nuxt.com" target="_blank">Nuxt</a> with <a href="https://wordpress.org/plugins/wp-graphql/" target="_blank">GraphQL</a>.<br>
          Custom Nuxt components allow full control over the rendering of the different types of <a href="https://wordpress.org/gutenberg/" target="_blank">Gutenberg blocks.</a>
          </div>
        </template>
        <template #styling>
          <div class="px-11">
            Styling in Nuxt is done with <a href="https://tailwindcss.com/" target="_blank">TailwindCSS</a> and <a href="https://ui.nuxt.com" target="_blank">Nuxt UI</a>.<br>
            Images are optimized with <a href="https://image.nuxt.com/" target="_blank">Nuxt Image</a> and the <a href="https://www.twicpics.com/" target="_blank">TwicPics</a> provider.
          </div>
        </template>
      </UAccordion>
    </div>
    <div v-show="posts" class="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <Post v-for="post in posts" :key="post.uri" :post="post"></Post>
    </div>
    <div v-show="!posts" class="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <PostSkeleton v-for="i in [1,2,3,4]"/>
    </div>
  </UContainer>
</template>
