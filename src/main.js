import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { appOptions, head }) {
  head.link.push({
    rel: 'stylesheet',
    href: 'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css',
  })

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Syncopate:100,300,400,500,700,900',
  });
  // head.script.push({
  //   src: "https://portfolio-umami.herokuapp.com/umami.js",
  //   "data-website-id": "ab441312-87a9-4f44-a8cc-676757c0ee8c",
  //   defer: true,
  //   body: true,
  //   async: true
     
  // })

const opts = {} //opts includes, vuetify themes, icons, etc.
Vue.use(Vuetify)

appOptions.vuetify = new Vuetify(opts);

// Set default layout as a global component
Vue.component('Layout', DefaultLayout)
}