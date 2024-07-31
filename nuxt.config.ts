// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },

  routeRules: {
    // prerender index route by default
    '/': { prerender: true },
    '/api/**': {cors: true},
  },

  modules: ['nuxt-security'],

  security: {
    headers: false,
    xssValidator: false
  },

  compatibilityDate: '2024-07-31',
});