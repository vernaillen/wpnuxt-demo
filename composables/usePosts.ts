import { GqlOps } from '#gql'

const _usePosts = async () => {
    const cacheKey = 'allPosts'
    const cachedPosts = useNuxtData(cacheKey)
    const posts = ref()

    if (cachedPosts.data.value) {
        posts.value = cachedPosts.data.value
    } else {
        /*const { data, refresh, pending } = await useFetch("/api/posts", {
            key: cacheKey,
            method: 'get',
            transform (data: any) {
                return data.data.posts.nodes;
            }
        });*/
        
        const { data } = useAsyncGql('getPosts')
        posts.value = data.value?.posts?.nodes
    }
    return {
        data: posts.value
    }
}

export const usePosts = _usePosts
