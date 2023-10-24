
const _usePost = async (uri: string) => {
    const post = ref()
    const cacheKey = computed(() => `post-${uri}`)
    const cachedPost = useNuxtData(cacheKey.value)

    if (cachedPost.data.value) {
        post.value = cachedPost.data.value
        console.log('cached post', cachedPost.data.value)
    } else {
        const { data, pending, refresh, error } = await useFetch("/api/graphql_middleware/query/PostByUri/", {
            key: cacheKey.value,
            params: {
                uri: uri
            },
            transform (data) {
                return data.data.nodeByUri;
            }
        })
        if (error.value) {
            throw createError({ statusCode: 500, message: 'Error fetching PostByUri', fatal: true })
        }
        console.log('newly fetched Post', data.value)
        post.value = data.value
    }
    return {
        data: post.value
    }
}

export const usePost = _usePost
