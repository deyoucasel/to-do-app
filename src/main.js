import Vue from 'vue'
// import App from './App.vue'
import router from './router'
import store from './store'

// eslint-disable-next-line import/no-duplicates
import VueExtendLayout from 'vue-extend-layout'
// eslint-disable-next-line import/no-duplicates
import layout from 'vue-extend-layout'

Vue.config.productionTip = false
Vue.use(VueExtendLayout)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  ...layout // Add methods to extend layouts
})
