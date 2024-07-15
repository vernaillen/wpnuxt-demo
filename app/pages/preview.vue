<script setup lang="ts">
import type { Page } from '#wpnum/types'

const route = useRoute()
const { preview_id: previewId } = route.query

const postEditUrl = useWPUri().postEdit(previewId)
const page = ref<Page>()
if (previewId) {
  const id = Number.parseInt(previewId.toString())
  const data = await usePageById(id, true)
  page.value = data?.data
}
</script>

<template>
  <NuxtLayout>
    <div class="prose dark:prose-invert">
      <h3>Preview</h3>
      [<NuxtLink :to="postEditUrl">
        edit
      </NuxtLink>]
      <hr>
      <BlockRenderer
        v-if="page"
        :blocks="page?.editorBlocks"
      />
      <div v-else>
        Oops, page === null
      </div>
    </div>
  </NuxtLayout>
</template>
