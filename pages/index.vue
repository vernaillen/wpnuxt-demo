<script setup lang="ts">
const { data: posts } = await usePosts()
const { data: settings } = await useGeneralSettings()
useHead({
  title: settings.value?.title
})
</script>

<template>
    <ULandingSection
      id="posts"
      :title="settings.title"
      :headline="settings.description"
      description="WordPress posts are shown below as cards. WordPress pages are listed above in the header."
    >
      <UPageGrid>
        <Post v-show="posts && posts" v-for="post, index in posts" :key="index" :post="post"/>
        <PostSkeleton v-show="!posts" v-for="i in [1, 2, 3, 4]"/>
      </UPageGrid>
    </ULandingSection>
</template>
