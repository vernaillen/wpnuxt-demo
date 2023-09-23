import { createSharedComposable } from '@vueuse/core'

const _usePost = async (uri: string) => {
    const post = ref()
    const cacheKey = computed(() => `post-${uri}`)
    const cachedPost = useNuxtData(cacheKey.value)

    /*if (cachedPost.data.value) {
        post.value = cachedPost.data.value
    } else {*/
        const { data, pending, refresh, error } = await useFetch("/api/postByUri/" + uri, {
            key: cacheKey.value,
            method: 'get',
            transform (data) {
                return data.data.nodeByUri;
            }
        })
        post.value = data.value
    //}
    return {
        data: post.value
    }
}

export const usePost = createSharedComposable(_usePost)
