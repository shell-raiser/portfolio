import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/lib/util/colors'
import DefaultLayout from '~/layouts/Default.vue'

import Vuex from 'vuex'
import '@mdi/font/css/materialdesignicons.css'
// import "@fontsource/nunito"


export default function (Vue, { appOptions, head }) {
  Vue.use(Vuex)

  // head.link.push({
  //   rel: 'stylesheet',
  //   href: 'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css',
  // })
  head.script.push({
    'data-website-id': "ab441312-87a9-4f44-a8cc-676757c0ee8c",
    src: "https://umami2-eosin.vercel.app/umami.js",
    async: true,
    defer: true
  })
  head.link.push({
    rel: 'stylesheet',
    href: 'href="https://fonts.googleapis.com/css?family=Tangerine"',
  });

  appOptions.store = new Vuex.Store({
    state: {
      chipSelected: [],
    }
  })
  const opts = {
    theme: {
      themes: {
        light: {
          primary: colors.deepPurple
        },
        dark: {

        }
      }
    }
  } //opts includes, vuetify themes, icons, etc.
  Vue.use(Vuetify)

  appOptions.vuetify = new Vuetify(opts);
  // Vue.use(store)
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}