const wordpressUrl = 'https://wpnuxt.vernaillen.com';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    experimental: {
        viewTransition: true
    },
    extends: ['@nuxt/ui-pro'],
    modules: [
        '@nuxt/devtools',
        '@nuxt/image',
        '@nuxt/ui',
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