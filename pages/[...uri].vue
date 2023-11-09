
<script setup lang="ts">
const route = useRoute();
const uri = route.params.uri
const wpUri = useWPUri()
const viewer = await useViewer()

const post = await usePostByUri(uri[0])
if (post?.data?.title) {
    useHead({
        title: post.data.title
    })
}
</script>
<template>
    <UMain v-if="post?.data" :class="post?.data.contentTypeName" class="prose dark:prose-invert">
        <ImageComponent
            v-if="post.data.featuredImage?.node?.sourceUrl" 
            :url="post.data.featuredImage?.node?.sourceUrl" 
            class="object-cover rounded-xl w-1/2 imgTransition"
        />
        <h1 class="text-4xl">{{ post.data.title }}</h1>
        <div class="text-xs text-primary-500 my-2 postDate">
            gepubliceerd op <nuxt-time :datetime="post.data.date" month="long" day="numeric" year="numeric" locale="nl-BE" />
            <UButton 
                v-if="viewer?.username"
                :to="wpUri.postEdit(post.data.databaseId)"
                icon="i-mdi-pencil" 
                size="2xs" 
                variant="soft" 
                class="mx-2 "/>
        </div>
        <div class="mt-5 postContent">
            <BlockRenderer v-if="post.data.editorBlocks" :blocks="post.data.editorBlocks"/>
        </div>
    </UMain>
    <nav class="mx-auto mt-6 p-2 ">
        <UButton to="/">Back</UButton>
    </nav>
</template>

<style scoped>
.post h1 {
    view-transition-name: post;
}
.post img.imgTransition {
    view-transition-name: featured-image;
}

</style>
