// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@sidebase/nuxt-auth'],
  auth: {
    origin: process.env.ORIGIN || 'http://localhost:3000',
    enableGlobalAppMiddleware: true,  // для глобальной защиты роутов
  },
  css: ['@/assets/styles.css'],
})
