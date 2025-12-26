<script setup lang="ts">
import VueJsonPretty from 'vue-json-pretty'
import type { JSONDataType } from 'vue-json-pretty/types/utils'

const isLoading = ref(false)
const loadedData = ref<string>('posts')
const data = ref<JSONDataType>({})

async function fetchPosts() {
  start('posts')
  const { data: postsData } = await usePosts()
  data.value = postsData.value as JSONDataType
  isReady()
}
async function fetchPost() {
  start('post')
  const { data: postData } = await usePostByUri({ uri: 'hello-world' })
  data.value = postData.value as JSONDataType
  isReady()
}
async function fetchPages() {
  start('pages')
  const { data: pagesData } = await usePages()
  data.value = pagesData.value as JSONDataType
  isReady()
}
async function fetchSettings() {
  start('settings')
  const { data: settingsData } = await useGeneralSettings()
  data.value = settingsData.value as JSONDataType
  isReady()
}
async function fetchUri() {
  start('wpUri')
  const uri = useWPUri()
  data.value = uri as JSONDataType
  isReady()
}

function start(key: string) {
  isLoading.value = true
  loadedData.value = key
}
function isReady() {
  setTimeout(() => {
    isLoading.value = false
  }, 200)
}
onMounted(() => {
  fetchPosts()
})
</script>

<template>
  <NuxtLayout>
    <UContainer>
      <UPage>
        <UPageHeader
          title="Composables"
        />
        <UPageBody class="prose dark:prose-invert mt-10">
          <p>
            Check the
            <a
              href="https://wpnuxt.com"
              target="_blank"
            >
              WPNuxt documentation
            </a>
            for a full
            <a
              href="https://wpnuxt.com/docs/composables"
              target="_blank"
            >
              list of available composables
            </a>.
          </p>
          <ComposableExample
            code="const { data: posts } = await usePosts()"
            :trigger="fetchPosts"
          />
          <ComposableExample
            code="const { data: post } = await usePostByUri({ uri: 'hello-world' })"
            :trigger="fetchPost"
          />
          <ComposableExample
            code="const { data: pages } = await usePages()"
            :trigger="fetchPages"
          />
          <ComposableExample
            code="const { data: settings } = await useGeneralSettings()"
            :trigger="fetchSettings"
          />
          <ComposableExample
            code="const wpUri = useWPUri()"
            :trigger="fetchUri"
          />
          <h2 class="mt-10">
            {{ loadedData }}:
          </h2>
          <pre class="mt-0 py-0 min-h-[500px]">
            <code class="flex justify-start py-0">
              <UIcon
                v-if="isLoading"
                name="i-svg-spinners-bars-fade"
                class="mt-[18px] opacity-30"
              />
              <vue-json-pretty
                v-else
                path="res"
                :data
              />
            </code>
          </pre>
        </UPageBody>
        <template #left>
          <UPageAside>
            <PrevNext class="mt-2 mb-12" />
          </UPageAside>
        </template>
      </UPage>
    </UContainer>
  </NuxtLayout>
</template>
