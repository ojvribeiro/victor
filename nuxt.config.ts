import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: 'static',

  routes: {
    '/': {
      static: true,
    },
    
    '/post/*': {
      static: true,
    },
  },

  modules: [
    '@nuxtjs/tailwindcss',
  ],

  buildModules: [
    '@nuxtjs/tailwindcss',
  ],
})
