// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxt/devtools',
        '@nuxt/image',
        '@nuxt/ui', 
        'nuxt-time'
    ],
    runtimeConfig: {
        public: {
            wordpressUrl: 'https://wpnuxt.vernaillen.com/graphql'
        }
    },
    css: [
        '~/assets/css/main.css',
    ],
    routeRules:  {
        '/**': {
            swr: true
        }
    }
})