import Vuetify from 'vuetify/lib/framework'
// import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/lib/util/colors'
import './sass/main.scss'
import DefaultLayout from '~/layouts/Default.vue'
import {
  auto as followSystemColorScheme,
} from 'darkreader';
import Vuex from 'vuex'
import '@mdi/font/css/materialdesignicons.css'

// import auto from 'darkreader'

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
  }),
    // head.link.push({
    //   rel: 'stylesheet',
    //   href: 'https://fonts.googleapis.com/css?family=Roboto&display=auto'
    // })


    followSystemColorScheme();



  appOptions.store = new Vuex.Store({
    state: {
      chipSelected: [],
      activeSection: "about"
    }
  })
  const opts = {
    theme: {
      themes: {
        light: {
          primary: colors.deepPurple,
          menu: colors.deepPurple.lighten4,
          navBar: colors.deepPurple.lighten4,
          accent: colors.red.darken3,
        },
        dark: {
          primary: colors.deepPurple,
          menu: colors.deepPurple.darken4,
          navBar: colors.deepPurple.darken4
        }
      },
      // dark: true
    }
  } //opts includes, vuetify themes, icons, etc.
  Vue.use(Vuetify)

  appOptions.vuetify = new Vuetify(opts);
  // Vue.use(store)
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
