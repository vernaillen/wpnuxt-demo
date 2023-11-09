<script setup lang="ts">
const posts = ref(await usePosts())
const settings = await useSettings()

useHead({
  title: settings.title
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
        <Post v-show="posts && posts?.data" v-for="post in posts?.data" :key="post.uri" :post="post"/>
        <PostSkeleton v-show="!posts" v-for="i in [1, 2, 3, 4]"/>
      </UPageGrid>
    </ULandingSection>
</template>
