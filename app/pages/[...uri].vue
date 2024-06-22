
<script setup lang="ts">
const route = useRoute();
const uri = route.params.uri
const wpUri = useWPUri()
const { data: viewer } = await useWPViewer()
const staging = await isStaging()

const { data: post } = await useWPNodeByUri({ uri: uri[0] })
if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}
if (post.value?.title) {
    useHead({
        title: post.value.title
    })
}
const featuredImage = useFeaturedImage(post.value)
</script>
<template>
    <StagingBanner v-if="post && staging" :post="post" />
    <UContainer>
        <UPage v-if="post" :class="post.contentTypeName" class="pt-10 prose dark:prose-invert">
            <NuxtImg
                v-if="featuredImage" 
                :src="featuredImage" 
                class="object-cover rounded-xl w-1/2 imgTransition"
            />
            <h1 class="text-4xl">{{ post.title }}</h1>
            <div class="text-xs text-primary-500 my-2 postDate">
                <span v-if="post.date">
                    gepubliceerd op <nuxt-time :datetime="post.date" month="long" day="numeric" year="numeric" locale="nl-BE" />
                </span>
                <UButton 
                    v-if="viewer?.username"
                    :to="wpUri.postEdit(''+post.databaseId)"
                    icon="i-mdi-pencil" 
                    size="2xs" 
                    variant="soft" 
                    class="mx-2 "/>
            </div>
            <div class="mt-5 postContent">
                <BlockRenderer v-if="post.editorBlocks" :blocks="post.editorBlocks"/>
            </div>
            <template #left>
                <UAside>
                    <UButton to="/">Back</UButton>
                </UAside>
            </template>
        </UPage>
    </UContainer>
</template>

<style scoped>
.post h1 {
    view-transition-name: post;
}
.post img.imgTransition {
    view-transition-name: featured-image;
}

</style>
