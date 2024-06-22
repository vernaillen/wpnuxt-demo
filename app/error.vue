<script setup lang="ts">
import type { PropType } from 'vue'
import type { NuxtError } from '#app'
import { isStaging } from '#imports'

const props = defineProps({
  error: {
    type: Object as PropType<NuxtError>,
    required: true
  }
})
if (props.error.statusCode !== 404) {
  console.error(props.error.message)
}
const staging = await isStaging()
</script>

<template>
  <div v-if="staging">
    <StagingBanner />
  </div>
  <Header :class="staging ? 'mt-[34px]' : 'mt-0'" />
  <UMain>
    <UContainer>
      <UPage>
        <UPageError
          :status="error.statusCode"
          :name="error.statusMessage"
          :message="error.message"
        />
      </UPage>
    </UContainer>
  </UMain>
  <UFooter />
</template>
