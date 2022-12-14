import App from './App'
import Http from './request/request.js'
import tabBar from '@/components/tabBar'
Vue.component('tabBar', tabBar)
// #ifndef VUE3
import Vue from 'vue'
Vue.prototype.$http = Http
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif