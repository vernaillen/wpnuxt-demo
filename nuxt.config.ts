// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    experimental: {
        viewTransition: true
    },
    extends: ['@nuxt/ui-pro'],
    modules: [
        '@nuxt/image',
        '@nuxt/ui',
        '@nuxtjs/google-fonts',
        'nuxt-time',
        '../wpnuxt-module/src/module',
        //'@vernaillen/wpnuxt'
    ],
    runtimeConfig: {
        faustSecretKey: '',
        public: {
            frontendSiteUrl: 'http://localhost:3000',
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
    ui: {
        icons: ['mdi']
    },
    googleFonts: {
        display: 'swap',
        download: true,
        families: {
            'DM+Sans': [400, 500, 600, 700]
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