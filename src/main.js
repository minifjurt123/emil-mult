// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import moment from 'moment'
import {apiURL} from './config'
Vue.config.productionTip = false

Vue.prototype.$http = axios.create({
  baseURL: apiURL || 'http://mult.benefitcraft.me/api'
})
Vue.prototype.$moment = moment;

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: { App },
	template: '<App/>'
})