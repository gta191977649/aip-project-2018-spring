import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'

import SearchForms from './components/SearchForms/SearchForms'
Vue.use(VueRouter)
Vue.config.productionTip = false



Vue.component('search-forms',SearchForms)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
