export default defineEventHandler(async () => {
    const data = await GqlMenu()
    return {
        data,
    }
})
