// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  experimental: {
      viewTransition: true
  },

  extends: ['@nuxt/ui-pro'],

  modules: [
      '@nuxt/image',
      '@nuxt/ui',
      '@nuxtjs/plausible',
      '@vernaillen/wpnuxt',
      'nuxt-time',
  ],

  wpNuxt: {
      wordpressUrl: 'https://wordpress.wpnuxt.com',
      frontendUrl: 'https://demo.wpnuxt.com',
      defaultMenuName: 'main',
      blocks: true,
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

  colorMode: {
    preference: 'dark'
  },

  ui: {
      icons: ['mdi']
  },

  routeRules:  {
      '/**': {
          prerender: true,
      }
  },

  plausible: {
    apiHost: 'https://demo.wpnuxt.com/plio'
  },

  devtools: {
    enabled: true
  }
})
