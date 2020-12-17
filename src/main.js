import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import echarts from 'echarts'
// import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts

// Object.defineProperties(Vue.prototype, {
//   echarts: { get: () => echarts }
// });

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
