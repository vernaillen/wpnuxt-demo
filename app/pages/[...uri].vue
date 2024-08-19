<script setup lang="ts">
const isLoading = ref(true)
const post = ref<PostFragment | PageFragment | undefined>()
const prevData = ref()
const nextData = ref()
const featuredImage = ref()

const route = useRoute()
const id = computed(() => route.params?.uri?.[0])
async function fetch() {
  isLoading.value = true
  const { data } = await useWPNodeByUri({ uri: id.value })
  if (!data) {
    throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
  }
  const { prev, next } = await usePrevNextPost(id.value)

  post.value = computed(() => data).value
  prevData.value = computed(() => prev).value
  nextData.value = computed(() => next).value
  featuredImage.value = useFeaturedImage(post.value)
  isLoading.value = false
}
useHead(() => ({
  title: post.value?.title
}))
onMounted(fetch)
</script>

<template>
  <div>
    <NuxtLayout>
      <UContainer>
        <UPage
          v-if="!isLoading"
          :class="post.contentTypeName"
        >
          <UPageHeader :title="post.title" />
          <UPageBody>
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
            </div>
          </UPageBody>
          <template #left>
            <UAside>
              <PrevNext
                :prev="post.contentTypeName === 'post' ? prevData : undefined"
                :next="post.contentTypeName === 'post' ? nextData : undefined"
                prev-button="Vorige"
                next-button="Volgende"
                class="mt-2 mb-12"
              />
              <NuxtImg
                v-if="featuredImage"
                :src="featuredImage"
                class="object-cover rounded-md imgTransition"
              />
            </UAside>
          </template>
        </UPage>
        <UPage v-else>
          <UPageHeader>
            <UIcon
              name="i-svg-spinners-bars-fade"
              class="mt-[18px] opacity-30"
            />
          </UPageHeader>
          <div class="mt-9 space-y-3">
            <USkeleton class="h-3 w-[200px] mb-7" />
            <USkeleton class="h-4 w-2/3" />
            <USkeleton class="h-4 w-1/2" />
          </div>
          <template #left>
            <UAside>
              <PrevNext
                :prev="undefined"
                :next="undefined"
                class="mt-2 mb-12"
              />
            </UAside>
          </template>
        </UPage>
      </UContainer>
    </NuxtLayout>
  </div>
</template>

<style scoped>
.post h1 {
    view-transition-name: post;
}
.post img.imgTransition {
    view-transition-name: featured-image;
}
</style>
