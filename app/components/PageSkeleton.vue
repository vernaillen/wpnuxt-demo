<template>
  <UPage class="skeleton-leave">
    <UPageHeader>
      <UIcon
        name="i-svg-spinners-bars-fade"
        class="mt-[18px] opacity-30"
      />
    </UPageHeader>
    <div class="mt-9 space-y-3">
      <USkeleton class="h-3 w-[200px] mb-7" />
      <USkeleton class="h-4 w-2/3" />
      <USkeleton class="h-4 w-1/2" />
    </div>
    <template #left>
      <UAside>
        <PrevNext
          :prev="undefined"
          :next="undefined"
          class="mt-2 mb-12"
        />
      </UAside>
    </template>
  </UPage>
</template>
