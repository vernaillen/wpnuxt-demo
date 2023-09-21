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
            wordpressUrl: 'https://wpnuxt.vernaillen.com',
            wpGraphQLUrl: 'https://wpnuxt.vernaillen.com/graphql'
        }
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