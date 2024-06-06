// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  
  modules:[
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss', 
    "vuetify-nuxt-module", 
    "@nuxtjs/google-fonts",
    ["@pinia/nuxt", {
      autoImports: ['defineStore', 'acceptHMRUpdate']
    }],
  
  ], 
  css: ['~/assets/css/tailwind.css'],
  devtools: { enabled: true },
  postcss : {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  googleFonts: {
    families: {
      Jost: '100',
    }
  }

})