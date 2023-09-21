import {
    addServerHandler,
    createResolver,
    defineNuxtModule,
    useNuxt,
} from 'nuxt/kit'

export default defineNuxtModule({
    meta: {
        name: 'nuxt-wordpress',
        configKey: 'wordpress',
    },
    defaults: {
    },
    setup (options) {
        const nuxt = useNuxt()
        const resolver = createResolver(import.meta.url)

        addServerHandler({
            route: `/_wp/info`,
            handler: resolver.resolve(`./runtime/server/api/info.get.ts`),
        })
        addServerHandler({
            route: `/_wp/posts`,
            handler: resolver.resolve(`./runtime/server/api/posts.get.ts`),
        })
    },
})