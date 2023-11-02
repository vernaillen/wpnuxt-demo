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
        '../wpnuxt-module/src/module',
        //'@vernaillen/wpnuxt'
    ],
    runtimeConfig: {
        public: {
            wpNuxt: {
                wordpressUrl: 'https://wordpress.wpnuxt.com'
            },
        }
    },
    wpNuxt: {
        wordpressUrl: 'https://wordpress.wpnuxt.com',
        showBlockInfo: false,
    },
    image: {
        provider: 'twicpics',
        twicpics: {
            baseURL: 'https://vernaillen.twic.pics/wpnuxt-demo'
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