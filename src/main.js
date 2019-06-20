import Vue from 'vue'
import VueRouter from 'vue-router'
import Routes from './routes'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(BootstrapVue)

const router = new VueRouter({
  routes: Routes
});

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
