<script setup lang="ts">
import VueJsonPretty from 'vue-json-pretty'

const isLoading = ref(true)
const posts = ref<PostFragment[]>([])
const pages = ref<PageFragment[]>([])
const settings = ref<GeneralSettingsFragment | null>(null)

async function fetch() {
  isLoading.value = true
  const { data: postsData } = await useWPPosts()
  const { data: pagesData } = await useWPPages()
  const { data: settingsData } = await useWPGeneralSettings()

  posts.value = computed(() => postsData).value
  pages.value = computed(() => pagesData).value
  settings.value = computed(() => settingsData).value
  isLoading.value = false
}
onMounted(fetch)

const staging = await isStaging()

const items = [{
  label: 'const { data: settings } = await useWPGeneralSettings()',
  content: settings
}, {
  label: 'const { data: pages } = await useWPPages()',
  content: pages
}, {
  label: 'const { data: posts } = await useWPPosts()',
  content: posts
}, {
  label: 'const wpUri = useWPUri()',
  content: useWPUri()
}, {
  label: 'const staging = await isStaging()',
  content: staging
}]
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
          title="Composables"
        />
        <UPageBody class="prose dark:prose-invert mt-10">
          <p>
            These are just some examples. Check the documentation for a <a
              href="https://wpnuxt.com/getting-started/composables"
              target="_blank"
            >full list of all available composables</a>.
          </p>
          <div class="relative">
            <UAccordion
              :items="items"
              :ui="{
                default: {
                  class: 'pl-8 mb-3'
                },
                item: {
                  icon: 'absolute left-1 transform transition-transform duration-200'
                }
              }"
            >
              <template #item="{ item }">
                <pre class="mt-0 py-0">
                  <code class="flex justify-start py-0">
                      <vue-json-pretty
                        :path="'res'"
                        :data="item.content"
                      />
                  </code>
                </pre>
              </template>
            </UAccordion>
          </div>
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
