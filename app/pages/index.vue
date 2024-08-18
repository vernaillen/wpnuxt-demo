<script setup lang="ts">
const isLoading = ref(true)
const posts = ref<PostFragment[]>([])
const settings = ref<GeneralSettingsFragment | null>(null)

async function fetch() {
  isLoading.value = true
  const { data: postsData } = await useWPPosts()
  const { data: settingsData } = await useWPGeneralSettings()

  posts.value = computed(() => postsData).value
  settings.value = computed(() => settingsData).value
  isLoading.value = false
}
fetch()

useHead({
  title: settings.value?.title || 'WPNuxt Demo'
})
</script>

<template>
  <NuxtLayout>
    <ULandingSection
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
          v-for="skel, index in [1, 2, 3]"
          :key="index"
        />
      </UPageGrid>
    </ULandingSection>
  </NuxtLayout>
</template>
