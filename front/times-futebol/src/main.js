// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import { sync } from 'vuex-router-sync'

import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

import VuexStore from './vuex/store'
import App from './App'
import routes from './router'
import JsonCSV from 'vue-json-csv'
import JsonExcel from 'vue-json-excel'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.use(Vuex)
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(BootstrapVue)

Vue.component('downloadCsv', JsonCSV)
Vue.component('downloadExcel', JsonExcel)

Vue.http.options.root = process.env.SERVER

Vue.config.productionTip = false

const store = new Vuex.Store(VuexStore)
const router = new VueRouter({
  routes
})

sync(store, router)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
