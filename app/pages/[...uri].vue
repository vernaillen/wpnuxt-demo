<script setup lang="ts">
const route = useRoute()
const uri = route.params.uri
const { data: post } = await useWPNodeByUri({ uri: uri[0] })
if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}
if (post.value?.title) {
  useHead({
    title: post.value.title
  })
}
const { prev: prev, next: next } = await usePrevNextPost(uri[0])
const featuredImage = useFeaturedImage(post.value)
</script>

<template>
  <NuxtLayout>
    <UContainer>
      <UPage
        :class="post.contentTypeName"
        class="pt-10 prose dark:prose-invert max-w-7xl mx-auto"
      >
        <h1 class="text-4xl">
          {{ post.title }}
        </h1>
        <div class="text-xs text-primary-500 my-2 postDate">
          <span v-if="post.date">
            gepubliceerd op <nuxt-time
              :datetime="post.date"
              month="long"
              day="numeric"
              year="numeric"
              locale="nl-BE"
            />
          </span>
        </div>
        <div class="mt-5 postContent">
          <BlockRenderer
            v-if="post.editorBlocks"
            :blocks="post.editorBlocks"
          />
          <div
            v-else
            v-sanitize="post.content"
          />
        </div>
        <template #left>
          <UAside class="pt-2">
            <PrevNext
              :prev="post.contentTypeName === 'post' ? prev : undefined"
              :next="post.contentTypeName === 'post' ? next : undefined"
              prev-button="Vorige"
              next-button="Volgende"
            />
            <NuxtImg
              v-if="featuredImage"
              :src="featuredImage"
              class="object-cover rounded-md imgTransition"
            />
          </UAside>
        </template>
      </UPage>
    </UContainer>
  </NuxtLayout>
</template>

<style scoped>
.post h1 {
    view-transition-name: post;
}
.post img.imgTransition {
    view-transition-name: featured-image;
}
</style>
