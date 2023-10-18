// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/main.css',  'swiper/swiper-bundle.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      
    },
   
  },
  plugins: [
    '~/plugins/i18n.ts'
  ],
  modules: ['nuxt-swiper'],
  swiper: {
    // Swiper options
    //----------------------
    prefix: 'Swiper',
    styleLang: 'css',
    // modules: ['navigation'], // all modules are imported by default
  }
})