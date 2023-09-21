<script setup lang="ts">
import type { CoreGallery } from '../types/wordpress-blocks'
const props = defineProps<{
    block: CoreGallery
}>();
const lightbox = useLightbox()
const images: string[] = []
props.block?.innerBlocks.forEach((block) => {
    if (block.name === 'core/image') {
        images.push(block.attributes.url)
    }
})
function openGallery (i: number) {
    lightbox.images = images
    lightbox.visible.value = true
    lightbox.index.value = i
}
</script>

<template>
    <div class="columns-2 md:columns-3 lg:columns-4 mx-[-8px] mb-20">
        <div v-for="(image, index) in images" :key="index" class="px-0 md:px-1">
            <div class="galleryImgWrapper rounded-lg overflow-hidden relative mb-4 md:mb-6  shadow-md hover:shadow-xl">
                <NuxtImg :src="image" class="rounded-lg cursor-pointer w-full" :alt="image" @click="openGallery(index)" />
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