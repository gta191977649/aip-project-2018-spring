import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Hello from './components/Hello'
import router from './router'

Vue.use(VueRouter)
Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

export default new VueRouter({
  mode:'history',  //使用history防止url中出现#
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})