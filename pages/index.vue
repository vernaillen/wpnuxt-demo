<script setup lang="ts">
const { data: posts } = await useWPPosts()
const { data: settings } = await useWPGeneralSettings()
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
        <Post v-for="post, index in posts" :key="index" :post="post"/>
      </UPageGrid>
    </ULandingSection>
</template>
