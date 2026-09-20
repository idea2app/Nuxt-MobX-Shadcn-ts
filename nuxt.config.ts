// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';
import swc from 'unplugin-swc';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['shadcn-nuxt', 'vue-jsx-vapor/nuxt'],
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss(), swc.vite()],
    vueJsx: {
      include: [/^$/],
    },
    optimizeDeps: {
      include: ['mobx', 'mobx-vue-helper', 'mobx-vue-lite', 'web-utility'],
    },
    ssr: {
      noExternal: ['mobx-vue-helper', 'mobx-vue-lite', 'web-utility'],
    },
  },
});
