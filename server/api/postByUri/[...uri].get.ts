
export default defineEventHandler(async (event) => {
    let uri = event.path;
    if (event.path.lastIndexOf('/') === event.path.length - 1) {
        uri = uri.substring(0, uri.length - 1)
    }
    if (event.path.lastIndexOf('/') > 0) {
        uri = event.path.substring(event.path.lastIndexOf('/') + 1)
    }
    const data = await GqlGetPostByUri({ uri })
    return {
        "data": data,
    }
})
