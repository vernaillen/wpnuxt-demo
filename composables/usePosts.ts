import { createSharedComposable } from '@vueuse/core'

const _usePosts = async () => {
    const cacheKey = 'allPosts'
    const cachedPosts = useNuxtData(cacheKey)
    const posts = ref()

    if (cachedPosts.data.value) {
        posts.value = cachedPosts.data.value
    } else {
        const { data, refresh, pending } = await useFetch("/api/posts", {
            key: cacheKey,
            method: 'get',
            transform (data: any) {
                return data.data.posts.nodes;
            }
        });
        posts.value = data.value
    }
    return {
        data: posts.value
    }
}

export const usePosts = createSharedComposable(_usePosts)
