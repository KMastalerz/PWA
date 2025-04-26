// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['bulma', '~/assets/css/main.css'],
  devServer: {
      https: {
          key: './localhost-key.pem',
          cert: './localhost.pem',
      },
  },
  modules: ['@vite-pwa/nuxt'],
  pwa: {
      registerType: 'autoUpdate',
      manifest: {
          name: 'Nuxt 3 PWA 2025',
          short_name: 'Nuxt3PWA',
          description: 'Demo Nuxt 3 PWA',
          theme_color: '#4DBA87',
          background_color: '#ffffff',
          display: 'standalone',
          icons: [
              {
                  src: 'pwa-192.png',
                  sizes: '192x192',
                  type: 'image/png',
              },
              {
                  src: 'pwa-512.png',
                  sizes: '512x512',
                  type: 'image/png',
              }
          ],
      },
      workbox: {
          globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
      },
      devOptions: {
          enabled: true,
          type: 'module',
      },
  },
});