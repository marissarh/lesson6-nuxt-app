// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@bootstrap-vue-next/nuxt'],
      css: ['bootstrap/dist/css/bootstrap.min.css'],
  
 // add Head Property
  app: {
    head: {
      titleTemplate: '%s Nuxt-App',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

     
      { name: 'description', content: 'Nuxt App with RESTCountries API data' }
    ],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js',
          integrity: 'sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL',
          crossorigin: 'anonymous'
        }
      ]
    }
  }
});
