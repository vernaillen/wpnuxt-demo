export default defineEventHandler(async () => {
    const data = await GqlPosts()
    return {
        "data": data,
    }
})
