// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxt/devtools',
        '@nuxt/image',
        '@nuxt/ui', 
        'nuxt-graphql-client',
        'nuxt-time',
    ],
    runtimeConfig: {
        public: {
            wordpressUrl: 'https://wpnuxt.vernaillen.com',
            wpGraphQLUrl: 'https://wpnuxt.vernaillen.com/graphql',
            GQL_HOST: 'https://wpnuxt.vernaillen.com/graphql'
        }
    },
    'graphql-client': {
        codegen: {
            silent: false,
            skipTypename: true,
            useTypeImports: true,
            dedupeFragments: true,
            onlyOperationTypes: false,
            avoidOptionals: false,
            disableOnBuild: false
        }
    },
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
    routeRules:  {
        '/**': {
            swr: true
        }
    }
})