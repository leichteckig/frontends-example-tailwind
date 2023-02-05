// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // Not providing Shopware API credentials will use a default backend for testing purposes
  // shopware: {
  //   shopwareEndpoint: process.env.API_URL,
  //   shopwareAccessToken: process.env.API_ACCESS_TOKEN,
  // },
  modules: ["@vueuse/nuxt", "@shopware-pwa/nuxt3-module"],
  typescript: {
    typeCheck: true,
    strict: true,
  },
  ssr: false,
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
