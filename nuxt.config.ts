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
        //'../wpnuxt-module/src/module',
        '@vernaillen/wpnuxt'
    ],
    wpNuxt: {
        wordpressUrl: 'https://wordpress.wpnuxt.com',
        frontendUrl: 'https://demo.wpnuxt.com',
        defaultMenuName: 'main',
        showBlockInfo: false,
        debug: true
    },
    css: [
        'vue-json-pretty/lib/styles.css'
    ],
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