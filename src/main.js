import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import DefaultLayout from '~/layouts/Default.vue'

import Vuex from 'vuex'




export default function (Vue, { appOptions, head }) {
  Vue.use(Vuex)

  head.link.push({
    rel: 'stylesheet',
    href: 'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css',
  })

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Syncopate:100,300,400,500,700,900',
  });

  appOptions.store = new Vuex.Store({
    state: {
      chipSelected: ["vue", "unity"]
    }
  })
  const opts = {} //opts includes, vuetify themes, icons, etc.
  Vue.use(Vuetify)

  appOptions.vuetify = new Vuetify(opts);
  // Vue.use(store)
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}