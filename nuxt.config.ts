// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  experimental: {
      viewTransition: true,
      payloadExtraction: true,
      renderJsonPayloads: false
  },

  extends: ['@nuxt/ui-pro'],

  modules: [
      '@nuxt/image',
      '@nuxt/ui',
      '@nuxtjs/google-fonts',
      '@nuxtjs/plausible',
      'nuxt-time',
      '@vernaillen/wpnuxt'
  ],

  wpNuxt: {
      wordpressUrl: 'https://wordpress.wpnuxt.com',
      frontendUrl: 'https://demo.wpnuxt.com',
      defaultMenuName: 'main',
      showBlockInfo: false,
      enableCache: true,
      staging: false,
      logLevel: 4,
      downloadSchema: true,
      generateComposables: {
        enabled: true,
        prefix: 'wp'
      }
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
  },

  plausible: {
    apiHost: 'https://demo.wpnuxt.com/plio'
  },

  devtools: {
    enabled: true
  }
})
