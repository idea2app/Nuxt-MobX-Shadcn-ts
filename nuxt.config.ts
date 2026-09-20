// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';
import swc from 'unplugin-swc';

const disableNuxtVueJsx = [/^$/];

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['shadcn-nuxt', 'vue-jsx-vapor/nuxt'],
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss(), swc.vite()],
    vueJsx: {
      // Keep Nuxt's default Babel-based JSX plugin from touching app TSX files;
      // vue-jsx-vapor now owns JSX compilation instead.
      include: disableNuxtVueJsx,
    },
    optimizeDeps: {
      include: ['mobx', 'mobx-vue-helper', 'mobx-vue-lite', 'web-utility'],
    },
    ssr: {
      noExternal: ['mobx-vue-helper', 'mobx-vue-lite', 'web-utility'],
    },
  },
});
