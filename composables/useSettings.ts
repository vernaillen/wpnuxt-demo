import { createSharedComposable } from '@vueuse/core'

const _useSettings = async () => {
    const cacheKey = 'settings'
    const cachedSettings = useNuxtData(cacheKey)
    const settings = ref()

    if (cachedSettings.data.value) {
        settings.value = cachedSettings.data.value
    } else {
        const { data, refresh, pending } = await useFetch("/api/graphql_middleware/query/Settings", {
            key: cacheKey,
            transform (data: any) {
                return data.data.generalSettings;
            }
        });
        settings.value = data.value
    }
    return {
        title: settings.value?.title,
        url: settings.value?.url
    }
}

export const useSettings = _useSettings