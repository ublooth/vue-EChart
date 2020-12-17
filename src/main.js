import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import echarts from 'echarts'
Vue.prototype.$echarts = echarts

import { 
  Button,
  Select,
  Option,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup, } from 'element-ui';
Vue.use(Button)
Vue.use(Select)
Vue.use(Option)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
/* 或写为
 * Vue.use(Button)
 * Vue.use(Select)
 */

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
