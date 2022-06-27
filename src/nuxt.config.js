export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/styles/roboto.scss",
    "~/assets/styles/main.scss",
    "~/assets/fonts/icomoon/style.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/init-store.client.js", "~/plugins/vue-filters.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxt/typescript-build",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/axios",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxt/image", "@nuxtjs/gtm"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  server: {
    host: "0.0.0.0",
    port: "3000",
  },

  publicRuntimeConfig: {
    version: process.env.VERSION,
    axios: {
      baseUrl: process.env.API_URL,
    },
    gtm: {
      id: process.env.CURRICULUM_VITAE_GTM_ID,
      enabled: true,
      pageTracking: true,
    },
  },
};
