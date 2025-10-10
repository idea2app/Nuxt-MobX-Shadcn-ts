// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  // Fuck the Vite & Nuxt.js official document: https://nuxt.com/docs/4.x/guide/going-further/experimental-features#decorators
  // Believe Vue-facing-decorator issue: https://github.com/facing-dev/vue-facing-decorator/issues/93#issuecomment-1927058662
  vite: {
    vue: {
      script: {
        babelParserPlugins: ["decorators"],
      },
    },
    vueJsx: {
      babelPlugins: [
        ["@babel/plugin-proposal-decorators", { version: "2023-05" }],
      ],
    },
  },
});
