import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store"


// Import and use Bootstrap
import BooststrapVue from "bootstrap-vue";
Vue.use(BooststrapVue);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Fontawesome
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)


new Vue({
  el: '#app',
  router,
  store: store,
  render: h => h(App)
})
