import Vue from 'vue'
import App from './App.vue'
// import './styles/common.scss'
import BitsinoUi from '../packages'

Vue.config.productionTip = false

Vue.use(BitsinoUi)

new Vue({
  render: h => h(App),
}).$mount('#app')
