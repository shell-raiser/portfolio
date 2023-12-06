import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
export default defineNuxtConfig({
  //...
  build: {
    transpile: ["vuetify"],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    '@pinia/nuxt'
  ],
  pinia: {
    storesDirs: ['./stores/**'],
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});
