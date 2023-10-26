const wordpressUrl = 'https://wpnuxt.vernaillen.com';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    experimental: {
        viewTransition: true
    },
    modules: [
        '@nuxt/devtools',
        '@nuxt/image',
        '@nuxt/ui',
        // 'nuxt-graphql-client',
        'nuxt-time',
        'nuxt-payload-analyzer',
        //'../wpnuxt-module/src/module',
        '@vernaillen/wpnuxt'
    ],
    wpNuxt: {},
    runtimeConfig: {
        public: {
            showBlockInfo: false,
            wordpressUrl: `${wordpressUrl}`,
            GQL_HOST: `${wordpressUrl}/graphql`
        }
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
            prerender: true,
            /*swr: 60 * 60,
            // or
            cache: {
                maxAge: 60 * 60
            }*/
        }
    }
})