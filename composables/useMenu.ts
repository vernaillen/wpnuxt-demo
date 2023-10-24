const _useMenu = async () => {
    
    const data = await GqlMenu()
    const menu = ref(data.menu?.menuItems?.nodes)
    return {
        menu
    }
}

export const useMenu = _useMenu
