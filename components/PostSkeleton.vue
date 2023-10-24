<template>
    <UCard>
        <template #header>
            <div class="h-[144px] sm:h-[257px] md:h-[167px] lg:h-[147px] xl:h-[179px] 2xl:h-[210px]">
                
            </div>
        </template>
        <div class="w-full">
            <USkeleton class="color-gray-700 h-6 w-2/3 my-3" />
            <USkeleton class="h-2 w-1/4 my-1" />
        </div>
        <template #footer>
            <USkeleton class="h-3 w-full my-2" />
            <USkeleton class="h-3 w-full my-2" />
            <USkeleton class="h-3 w-1/3 my-2" />
        </template>
    </UCard>
</template>
