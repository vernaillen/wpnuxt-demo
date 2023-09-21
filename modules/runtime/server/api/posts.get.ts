
export default defineEventHandler(async () => {

    const config = useRuntimeConfig();
    const { data, refresh, pending } = await useFetch(config.public.wordpressUrl, {
        key: 'posts',
        method: 'get',
        query: {
            query: `
      query NewQuery {
        posts(first:10){
          nodes {
            title
            date
            excerpt
            uri
          }
        }
      }`
        },
        transform (data: any) {
            return data.data.posts.nodes as Array<Record<'title' | 'date' | 'excerpt' | 'uri', string>>;
        }
    });

    return {
        "posts": data,
    }
})
