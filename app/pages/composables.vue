<script setup lang="ts">
import VueJsonPretty from 'vue-json-pretty'

const isLoading = ref(false)
const loadedData = ref<string>('posts')
const data = ref({})

async function fetchPosts() {
  start('posts')
  const { data: postsData } = await useWPPosts()
  data.value = computed(() => postsData).value
  isReady()
}
async function fetchPost() {
  start('post')
  const { data: postData } = await useWPPostByUri({ uri: 'hello-world' })
  data.value = computed(() => postData).value
  isReady()
}
async function fetchPages() {
  start('pages')
  const { data: pagesData } = await useWPPages()
  data.value = computed(() => pagesData).value
  isReady()
}
async function fetchSettings() {
  start('settings')
  const { data: settings } = await useWPGeneralSettings()
  data.value = computed(() => settings).value
  isReady()
}
async function fetchUri() {
  start('wpUri')
  const uri = await useWPUri()
  data.value = computed(() => uri).value
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
            Check the documentation for a <a
              href="https://wpnuxt.com/docs/composables"
              target="_blank"
            >full list of available composables</a>.
          </p>
          <ComposableExample
            code="const { data: posts } = await useWPPosts()"
            :trigger="fetchPosts"
          />
          <ComposableExample
            code="const { data: post } = await useWPPostByUri({ uri: 'hello-world' })"
            :trigger="fetchPost"
          />
          <ComposableExample
            code="const { data: pages } = await useWPPages()"
            :trigger="fetchPages"
          />
          <ComposableExample
            code="const { data: settings } = await useWPGeneralSettings()"
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
          <UAside>
            <PrevNext class="mt-2 mb-12" />
          </UAside>
        </template>
      </UPage>
    </UContainer>
  </NuxtLayout>
</template>
