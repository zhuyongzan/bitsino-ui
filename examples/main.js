import Vue from 'vue'
import App from './App.vue'
import router from './router/router';
import store from './store';
import BitsinoUi from '../packages'

Vue.config.productionTip = false

Vue.use(BitsinoUi)
Vue.use(router);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

router.beforeEach((to, from, next) => {
  document.title = to.name + '|bitsino-ui'
  next()
})
