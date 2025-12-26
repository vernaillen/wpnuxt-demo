<script setup lang="ts">
import type { GeneralSettingsFragment } from '#build/graphql-operations'

const settings = useState<GeneralSettingsFragment | undefined>('settings')
const { data: posts, pending } = await usePosts()

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
        <UPageGrid v-if="!pending && posts">
          <Post
            v-for="post in posts"
            :key="post.id"
            :post="post"
          />
        </UPageGrid>
        <UPageGrid v-else>
          <Post
            v-for="n in 5"
            :key="n"
          />
        </UPageGrid>
      </UPageSection>
    </UContainer>
  </NuxtLayout>
</template>
