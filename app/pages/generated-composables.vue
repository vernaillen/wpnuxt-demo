<script setup lang="ts">
import { useRuntimeConfig } from 'nuxt/app'
import { useWPPosts, useWPPostByUri } from '#wpnuxt'

const isLoading = ref(true)

const prefix = useRuntimeConfig().public.wpNuxt.composablesPrefix

const { data: posts } = await useWPPosts()
const { data: postsLimited } = await useWPPosts({ limit: 1 })
const { data: postByUri } = await useWPPostByUri({ uri: 'hello-world' })

onMounted(() => {
  isLoading.value = false
})
</script>

<template>
  <NuxtLayout>
    <UContainer>
      <UPage
        v-if="!isLoading"
      >
        <UPageHeader
          title="Examples of generated composables"
        />
        <UPageBody class="prose dark:prose-invert mt-10">
          <p>
            prefix for composables: {{ prefix }}
          </p>
          <h3>{{ prefix }}Posts()</h3>
          <ul>
            <li
              v-for="post in posts"
              :key="post.id"
            >
              {{ post.title }}
            </li>
          </ul>
          <h3>{{ prefix }}Posts({ limit: 1 })</h3>
          <ul>
            <li
              v-for="post in postsLimited"
              :key="post.id"
            >
              {{ post.title }}
            </li>
          </ul>
          <h3>{{ prefix }}PostByUri({ uri: 'hello-world' })</h3>
          <p>
            {{ postByUri?.title }}
          </p>
        </UPageBody>
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
      <PageSkeleton v-else />
    </UContainer>
  </NuxtLayout>
</template>
