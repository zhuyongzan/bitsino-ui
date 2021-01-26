import Vue from 'vue'
import App from './App.vue'
import store from './store';
import * as filters from './filters' // global filters
import BitsinoUi from '../packages'

Vue.config.productionTip = false

Vue.use(BitsinoUi)

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
