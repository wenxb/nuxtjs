// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },

  routeRules: {
    // prerender index route by default
    '/': { prerender: true },
    '/api/**': {cors: true},
  },

  modules: ['nuxt-security', '@nuxt/content', '@nuxtjs/seo'],
  site: {
    url: 'https://www.youngwen.com',
    name: '温落阁',
    description: '人类的悲欢并不相通，我只是觉得他们吵闹',
  },
  security: {
    headers: false,
    xssValidator: false
  },

  compatibilityDate: '2024-07-31',
});
