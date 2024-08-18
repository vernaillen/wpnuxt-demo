<script setup lang="ts">
import type { PageFragment, PostFragment } from '#build/graphql-operations'

const isLoading = ref(true)
const postData = ref<PostFragment | PageFragment | undefined>(null)
const prevData = ref(null)
const nextData = ref(null)
const route = useRoute()
const id = computed(() => route.params?.uri?.[0])

async function fetch() {
  isLoading.value = true
  try {
    if (!id.value) {
      throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
    }
    const { data } = await useWPNodeByUri({ uri: id.value })
    postData.value = data.value
    if (!data.value) {
      throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
    }
    const { prev, next } = await usePrevNextPost(id.value)
    prevData.value = prev
    nextData.value = next
  } finally {
    isLoading.value = false
  }
}
onMounted(fetch)

const post = computed<PostFragment | PageFragment | undefined>(() => postData.value)
const featuredImage = computed(() => useFeaturedImage(post.value))

useHead(() => ({
  title: post.value?.title
}))
</script>

<template>
  <NuxtLayout>
    <UContainer>
      <UPage
        v-if="!isLoading"
        :class="post.contentTypeName"
        class="pt-10 prose dark:prose-invert max-w-7xl mx-auto"
      >
        <NuxtImg
          v-if="featuredImage"
          :src="featuredImage"
          class="object-cover rounded-xl w-1/2 imgTransition"
        />
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
          <UAside>
            <PrevNext
              :prev="post.contentTypeName === 'post' ? prevData : undefined"
              :next="post.contentTypeName === 'post' ? nextData : undefined"
              prev-button="Vorige"
              next-button="Volgende"
            />
          </UAside>
        </template>
      </UPage>
      <UPage
        v-else
        class="pt-10 prose dark:prose-invert max-w-7xl mx-auto"
      >
        <UIcon name="i-svg-spinners-bars-scale-fade" />
        <template #left>
          <UAside>
            <PrevNext
              :prev="undefined"
              :next="undefined"
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
