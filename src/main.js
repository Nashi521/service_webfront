import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import * as echarts from 'echarts'

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.prototype.$axios = axios

Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
