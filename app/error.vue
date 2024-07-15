<script setup lang="ts">
import type { PropType } from 'vue'
import type { NuxtError } from '#app'

const props = defineProps({
  error: {
    type: Object as PropType<NuxtError>,
    required: true
  }
})
if (props.error.statusCode !== 404) {
  console.error(props.error.message)
}
</script>

<template>
  <Header />
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
