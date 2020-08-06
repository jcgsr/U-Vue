import Vue from 'vue'
import App from './App.vue'

import router from './router';

import 'jquery';
import 'popper.js';
import 'bootstrap';
import 'bootswatch/dist/cyborg/bootstrap.min.css';
import 'animate.css';

import VueScrollTo from 'vue-scrollto'
Vue.use(VueScrollTo)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
