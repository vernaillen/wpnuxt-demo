<script setup lang="ts">
import VueJsonPretty from 'vue-json-pretty';
const userName = await getCurrentUserName()

const items = [{
  label: 'useWPUri()',
  content:  useWPUri()
}, {
  label: 'await useGeneralSettings()',
  content: await useGeneralSettings()
}, {
  label: 'await getCurrentUserName()',
  content: userName
}, {
  label: 'await usePages()',
  content: await usePages()
}, {
  label: 'await usePosts()',
  content: await usePosts()
}, {
  label: 'await isStaging()',
  content: await isStaging()
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