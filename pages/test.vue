<script setup lang="ts">
const wpUri = useWPUri()
const settings = await useSettings()
const viewer = await useViewer()
const pages = await usePages()
const posts = await usePosts()
</script>

<template>
    <UMain>
        <UContainer class="prose dark:prose-invert">
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
            <h3>useWPUri()</h3>
            {{ wpUri }}
            <h3>useSettings()</h3>
            {{ settings }}<br>
            <NuxtLink :href="wpUri.settingsEdit">Edit Settings</NuxtLink>
            <h3>useViewer()</h3>
            {{ viewer }}
            <h3>usePages()</h3>
            {{ pages.data.map(page => page.title) }}
            <h3>usePosts()</h3>
            {{ posts.data.map(post => post.title) }}
        </UContainer>
    </UMain>
</template>