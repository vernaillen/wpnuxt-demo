<script setup lang="ts">
import type { CoreGallery, CoreImage } from '#graphql-operations';
const img = useImage()
const config = useRuntimeConfig();
const wpUrl = config.public.wpNuxt.wordpressUrl
const props = defineProps<{
    block: CoreGallery
}>();
const lightbox = useLightbox()
const images: string[] = []
props.block?.innerBlocks?.forEach((innerBlock) => {
    if (innerBlock && innerBlock.name === 'core/image') {
        const imgBlock = innerBlock as CoreImage
        const imgUrl = img(getRelativeImageUrl(imgBlock))
        images.push(imgUrl)
    }
})
function getRelativeImageUrl (imgBlock: CoreImage) {
    if (imgBlock.attributes?.url && imgBlock.attributes.url.indexOf(wpUrl) > -1) {
        return imgBlock.attributes.url.replace(wpUrl, '')
    }
}
function openGallery (i: number) {
    lightbox.images = images
    lightbox.visible.value = true
    lightbox.index.value = i
}
</script>

<template>
    <div class="columns-2 md:columns-3 lg:columns-4 mx-[-8px] mb-20">
        <div v-for="(imgBlock, index) in block?.innerBlocks" :key="index" class="px-0 md:px-1">
            <div v-if="imgBlock" class="galleryImgWrapper rounded-lg overflow-hidden relative mb-4 md:mb-6  shadow-md hover:shadow-xl">
                <NuxtImg 
                    :src="getRelativeImageUrl(imgBlock)" 
                    class="rounded-lg cursor-pointer w-full" 
                    @click="openGallery(index)" 
                    :width="300"/>
            </div>
        </div>
    </div>
</template>

<style>
.galleryImgWrapper {
  position: relative;
  overflow: hidden;
}
.galleryImgWrapper img {
  margin: 0;
  max-width: 100%;
  height: auto;
  -moz-transition: all 0.5s;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}

.galleryImgWrapper:hover img {
  -moz-transform: scale(1.02);
  -webkit-transform: scale(1.02);
  transform: scale(1.02);
}
</style>