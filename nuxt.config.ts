// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  extends: ['@nuxt/ui-pro'],

  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxtjs/plausible',
    '@wpnuxt/blocks',
    '@wpnuxt/core',
    'nuxt-time'
  ],

  devtools: {
    enabled: true
  },

  css: [
    'vue-json-pretty/lib/styles.css'
  ],

  colorMode: {
    preference: 'dark'
  },

  ui: {
    icons: ['mdi']
  },

  routeRules: {
    '/**': {
      prerender: true
    }
  },

  future: {
    compatibilityVersion: 4
  },
  compatibilityDate: '2024-12-31',

  /**
   * Depending on your servers capabilities, you may need to adjust the following settings.
   * It will affect the build time but also increase the reliability of the build process.
   * If you have a server with a lot of memory and CPU, you can remove the following settings.
   * @property {number} concurrency - How many pages to prerender at once
   * @property {number} interval - How long to wait between prerendering pages
   * @property {boolean} failOnError - This stops the build from failing but the page will not be statically generated
   */
  nitro: {
    prerender: {
      concurrency: 10,
      interval: 1000,
      failOnError: false,
      autoSubfolderIndex: false,
      routes: process.env.WPNUXT_STAGING ? [] : ['/', '/sample-page', '/composables', '/generated-composables', '/image-gallery', '/a-brand-new-nuxt-module', '/render-gutenberg-blocks', '/hello-world']
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    },
    checker: {
      lintOnStart: true,
      fix: true
    }
  },

  image: {
    provider: 'twicpics',
    twicpics: {
      baseURL: 'https://vernaillen.twic.pics/wpnuxt-demo'
    }
  },

  plausible: {
    apiHost: 'https://demo.wpnuxt.com/plio'
  },

  wpNuxt: {
    wordpressUrl: 'https://wpnuxtdev.wpenginepowered.com',
    frontendUrl: 'https://demo.wpnuxt.com',
    defaultMenuName: 'main',
    enableCache: true,
    staging: false,
    logLevel: 4,
    downloadSchema: true
  }
})
