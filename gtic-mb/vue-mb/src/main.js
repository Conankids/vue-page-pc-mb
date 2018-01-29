import Vue from 'vue'
import App from './App'
import 'lib-flexible/flexible.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
