<script setup lang="ts">
import type { PostFragment } from '#build/graphql-operations'

const isLoading = ref(true)
const posts = ref<PostFragment[]>([])
const settings = useState('settings')

async function fetch() {
  isLoading.value = true
  const { data: postsData } = await useWPPosts()
  posts.value = computed(() => postsData).value
  isLoading.value = false
}
onMounted(fetch)

useHead({
  title: settings.value?.title || 'WPNuxt Demo'
})
</script>

<template>
  <NuxtLayout>
    <UContainer>
      <UPageSection
        id="posts"
        :title="settings?.title || 'WPNuxt Demo'"
        :headline="settings?.description || 'Nuxt + Headless WordPress'"
        description="WordPress posts are shown below as cards. WordPress pages are listed above in the header."
      >
        <UPageGrid v-if="!isLoading">
          <Post
            v-for="post, index in posts"
            :key="index"
            :post="post"
          />
        </UPageGrid>
        <UPageGrid v-else>
          <Post
            v-for="skel, index in [1, 2, 3, 4, 5]"
            :key="index"
          />
        </UPageGrid>
      </UPageSection>
    </UContainer>
  </NuxtLayout>
</template>
