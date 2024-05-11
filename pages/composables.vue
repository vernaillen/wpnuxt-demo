<script setup lang="ts">
import VueJsonPretty from 'vue-json-pretty';

const { data: settings } = await useGeneralSettings()
const { data: pages } = await usePages()
const { data: posts } = await usePosts()
const staging = await isStaging()
const userName: string = await getCurrentUserName()

const items = [{
  label: 'const { data: settings } = await useGeneralSettings()',
  content: settings.value
}, {
  label: 'const { data: pages } = await usePages()',
  content: pages.value
}, {
  label: 'const { data: posts } = await usePosts()',
  content: posts.value
}, {
  label: 'const wpUri = useWPUri()',
  content:  useWPUri()
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
        <div class="relative">
          <UAccordion 
            :items="items"
            :ui="{
              default: {
                class: 'pl-8 mb-3',
              },
              item: {
                icon: 'absolute left-1 transform transition-transform duration-200',
              },
            }"
          >
              <template #item="{ item }">
                <pre class="mt-0 py-0">
                  <code class="flex justify-start py-0">
                      <vue-json-pretty :path="'res'" :data="item.content"> </vue-json-pretty>
                  </code>
                </pre>
              </template>
          </UAccordion>
        </div>
    </UContainer>
  </UMain>
</template>