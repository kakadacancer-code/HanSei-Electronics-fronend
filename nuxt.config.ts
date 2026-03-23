// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
  ],

  // Only include this if you have a custom global CSS file
  // (create assets/css/main.css if you need extra styles)
  // css: ['~/assets/css/main.css'],

  // You usually DON'T need this section when using @nuxtjs/tailwindcss module
  // (comment it out or remove unless adding custom PostCSS plugins)
  // postcss: {
  //   plugins: {
  //     tailwindcss: {},
  //     autoprefixer: {},
  //   },
  // },

  app: {
    head: {
      // Font Awesome CDN (consider a module like @nuxtjs/fontawesome later)
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css',
          crossorigin: 'anonymous',
        },
      ],

      // Optional but recommended: better defaults
      title: 'Kakada • Leave Management',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    },
  },

  // Optional: stricter TypeScript checking (good practice)
  typescript: {
    strict: true,
  },
})