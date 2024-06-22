<script setup lang="ts">
import { useRuntimeConfig } from 'nuxt/app'
import { useWPPosts, useWPPostByUri } from '#wpnuxt'

const prefix = useRuntimeConfig().public.wpNuxt.generateComposables?.prefix

const { data: posts } = await useWPPosts()
const { data: postsLimited } = await useWPPosts({ limit: 1 })
const { data: postByUri } = await useWPPostByUri({ uri: 'hello-world' })
</script>

<template>
  <div>
    <UContainer class="prose dark:prose-invert pt-5">
      <h2>Examples of generated composables</h2>
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
    </UContainer>
  </div>
</template>
