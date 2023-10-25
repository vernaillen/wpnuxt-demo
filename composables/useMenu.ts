const _useMenu = async () => {
    const menu = ref()
    const cacheKey = 'menu'
    const cachedMenu = useNuxtData(cacheKey.value)

    if (cachedMenu.data.value) {
        menu.value = cachedMenu.data.value
    } else {
        const { data, error } = await useFetch('/api/graphql_middleware/query/Menu', {
            key: cacheKey,
            transform (data: any) {
                return data.data.menu.menuItems.nodes;
            }
        });
        if (error.value) {
            throw createError({ statusCode: 500, message: 'Error fetching menu', fatal: true })
        }
        menu.value = data.value
    }
    return {
        menu
    }
}

export const useMenu = _useMenu
