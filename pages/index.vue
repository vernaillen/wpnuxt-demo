<script setup lang="ts">
import type { GeneralSettings, Post } from '#graphql-operations';

const posts: Post[] = await usePosts()
const settings: GeneralSettings = await useGeneralSettings()

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
        <Post v-show="posts && posts" v-for="post in posts" :key="post.uri" :post="post"/>
        <PostSkeleton v-show="!posts" v-for="i in [1, 2, 3, 4]"/>
      </UPageGrid>
    </ULandingSection>
</template>
