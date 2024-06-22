<script setup lang="ts">
import VueJsonPretty from 'vue-json-pretty'

const { data: settings } = await useWPGeneralSettings()
const { data: pages } = await useWPPages()
const { data: posts } = await useWPPosts()
const staging = await isStaging()
const userName: string = await getCurrentUserName()

const items = [{
  label: 'const { data: settings } = await useWPGeneralSettings()',
  content: settings.value
}, {
  label: 'const { data: pages } = await useWPPages()',
  content: pages.value
}, {
  label: 'const { data: posts } = await useWPPosts()',
  content: posts.value
}, {
  label: 'const wpUri = useWPUri()',
  content: useWPUri()
}, {
  label: 'const staging = await isStaging()',
  content: staging
}, {
  label: 'const userName = await getCurrentUserName()',
  content: userName
}]
</script>

<template>
  <UMain>
    <UContainer class="prose dark:prose-invert mt-10">
      <h1>Predefined composables</h1>
      <h2>Authentication</h2>
      <div v-if="userName">
        Authenticated in WordPress as {{ userName }}<br>
        <a href="/logout">Log out</a>
      </div>
      <div v-else>
        not logged in<br>
        <a href="/login?redirect=/test">Log in</a>
      </div>
      <h2>Composables</h2>
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
    </UContainer>
  </UMain>
</template>
