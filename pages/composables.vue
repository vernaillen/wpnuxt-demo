<script setup lang="ts">
import VueJsonPretty from 'vue-json-pretty';
const viewer = await useViewer()

const items = [{
  label: 'useWPUri()',
  content:  useWPUri()
}, {
  label: 'await useSettings()',
  content: await useSettings()
}, {
  label: 'await useViewer()',
  content: viewer
}, {
  label: 'await usePages()',
  content: await usePages()
}, {
  label: 'await usePosts()',
  content: await usePosts()
}, {
  label: 'await useWPNuxt()',
  content: await useWPNuxt()
}]
</script>

<template>
    <UMain>
        <UContainer class="prose dark:prose-invert mt-10">
            <h2>Authentication</h2>
            <div v-if="viewer?.username">
                Authenticated in WordPress as {{ viewer.username }}<br>
                {{ viewer.email  }}<br>
                <a href="/logout">Log out</a>
            </div>
            <div v-else>
                not logged in<br>
                <a href="/login?redirect=/test">Log in</a>
            </div>
            <h2>Composables</h2>
            <UAccordion :items="items">
                <template #item="{ item }">
                  <pre class="mt-0 py-0">
                    <code class="flex justify-start py-0">
                        <vue-json-pretty :path="'res'" :data="item.content"> </vue-json-pretty>
                    </code>
                  </pre>
                </template>
            </UAccordion>
        </UContainer>
    </UMain>
</template>