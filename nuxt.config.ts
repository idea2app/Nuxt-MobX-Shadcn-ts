// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';
import swc from 'unplugin-swc';
import VueJsxVapor from 'vue-jsx-vapor/vite';

const swcDecoratorPlugin = () => {
  const plugin = swc.vite({
    include: /\.[cm]?tsx?$/,
    jsc: {
      externalHelpers: true,
      parser: {
        syntax: 'typescript',
        decorators: true,
        tsx: true,
      },
      transform: {
        decoratorVersion: '2022-03',
        react: {
          runtime: 'preserve',
        },
      },
    },
  });

  return { ...plugin, enforce: 'pre' as const };
};

const removeNuxtVueJsxPlugin = () => ({
  name: 'remove-nuxt-vue-jsx-plugin',
  configResolved(config: { plugins: { name?: string }[] }) {
    config.plugins = config.plugins.filter(({ name }) => name !== 'vite:vue-jsx');
  },
});

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['shadcn-nuxt'],
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
      swcDecoratorPlugin(),
      VueJsxVapor(),
      removeNuxtVueJsxPlugin(),
    ],
    optimizeDeps: {
      include: ['mobx', 'mobx-vue-helper', 'mobx-vue-lite', 'web-utility'],
    },
    ssr: {
      noExternal: ['mobx-vue-helper', 'mobx-vue-lite', 'web-utility'],
    },
  },
});
