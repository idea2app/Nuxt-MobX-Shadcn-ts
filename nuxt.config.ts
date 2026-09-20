// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';
import swc from 'unplugin-swc';

const removeNuxtVueJsxPlugin = () => ({
  name: 'remove-nuxt-vue-jsx-plugin',
  configResolved(config: { plugins: { name?: string }[] }) {
    config.plugins = config.plugins.filter(({ name }) => name !== 'vite:vue-jsx');
  },
});

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['shadcn-nuxt', 'vue-jsx-vapor/nuxt'],
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss(), swc.vite(), removeNuxtVueJsxPlugin()],
    optimizeDeps: {
      include: ['mobx', 'mobx-vue-helper', 'mobx-vue-lite', 'web-utility'],
    },
    ssr: {
      noExternal: ['mobx-vue-helper', 'mobx-vue-lite', 'web-utility'],
    },
  },
});
