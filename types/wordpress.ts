
export type Post = {
    title: string
    date: string
    excerpt: string
    uri: string
    featuredImage: {
        node: {
            id: string
            sourceUrl: string
        }
    }
}