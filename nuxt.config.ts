// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxt/devtools',
        '@nuxt/image',
        '@nuxt/ui',
        // 'nuxt-graphql-client',
        'nuxt-graphql-middleware',
        'nuxt-time',
    ],
    runtimeConfig: {
        public: {
            showBlockInfo: false,
            wordpressUrl: 'https://wpnuxt.vernaillen.com',
            GQL_HOST: 'https://wpnuxt.vernaillen.com/graphql'
        }
    },
    graphqlMiddleware: {
        debug: true,
        graphqlEndpoint: 'https://wpnuxt.vernaillen.com/graphql',
        codegenConfig: {
            /*constEnums: false,
            enumsAsConst: false,
            enumPrefix: true,
            avoidOptionals: false,
            preResolveTypes: true,
            maybeValue: 'T',
            flattenGeneratedTypes: false,*/
            exportFragmentSpreadSubTypes: true,
            skipTypeNameForRoot: true,
            inlineFragmentTypes: 'combine',
            dedupeFragments: true,
            /*nonOptionalTypename: false,
            skipTypename: true,*/
        },
    },
    /*'graphql-client': {
        codegen: {
            silent: false,
            skipTypename: true,
            useTypeImports: true,
            dedupeFragments: true,
            onlyOperationTypes: false,
            avoidOptionals: false,
            disableOnBuild: false
        },
        preferGETQueries: false
    },*/
    app: {
        pageTransition: { name: 'page', mode: 'out-in' }
    },
    css: [
        '~/assets/css/main.css',
    ],
    image: {
        provider: 'twicpics',
        twicpics: {
            baseURL: 'https://vernaillen.twic.pics/nuxt-wordpress-poc'
        }
    },
    /*routeRules:  {
        '/**': {
            swr: 60 * 60,
            // or
            cache: {
                maxAge: 60 * 60
            }
        }
    }*/
})