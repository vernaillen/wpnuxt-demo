<script setup lang="ts">
const route = useRoute()

const { data: post, pending } = await useNodeByUri(
  { uri: route.path },
  { watch: [() => route.path] }
)

const { prev, next } = await usePrevNextPost(route.path)
const featuredImage = computed(() => useFeaturedImage(post.value))

useHead(() => ({
  title: post.value?.title
}))
</script>

<template>
  <NuxtLayout>
    <UContainer>
      <UPage
        v-if="!pending && post"
        :class="post.contentTypeName"
      >
        <PrevNext
          :prev="post.contentTypeName === 'post' ? prev : undefined"
          :next="post.contentTypeName === 'post' ? next : undefined"
          prev-button="Vorige"
          next-button="Volgende"
          class="mt-6 lg:hidden"
        />
        <UPageHeader :title="post.title" />
        <UPageBody>
          <div class="text-xs text-primary-500 my-2 postDate">
            <span v-if="post.date">
              published on <nuxt-time
                :datetime="post.date"
                month="long"
                day="numeric"
                year="numeric"
                locale="en-GB"
              />
            </span>
          </div>
          <div class="mt-5 prose dark:prose-invert">
            <MDC :value="post.content || ''" />
          </div>
        </UPageBody>
        <template #left>
          <UPageAside>
            <PrevNext
              :prev="post.contentTypeName === 'post' ? prev : undefined"
              :next="post.contentTypeName === 'post' ? next : undefined"
              prev-button="Vorige"
              next-button="Volgende"
              class="mt-2 mb-12"
            />
            <NuxtImg
              v-if="featuredImage"
              :src="featuredImage"
              class="object-cover rounded-md"
            />
          </UPageAside>
        </template>
      </UPage>
      <PageSkeleton v-else />
    </UContainer>
  </NuxtLayout>
</template>
