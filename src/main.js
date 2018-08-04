import 'babel-polyfill'
import 'global/axios'
import Vue from 'vue'
import App from './App'
import router from './router'

import fastclick from 'fastclick'
import Loading from 'vant/lib/loading'

import 'common/stylus/index.styl'
import 'vant/lib/vant-css/base.css'
import 'vant/lib/vant-css/loading.css'


Vue.use(Loading)

fastclick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
