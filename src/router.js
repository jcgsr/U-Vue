import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/Home'
import MathVue from './components/MathVue'
import MediaEscolar from './components/MediaEscolar'
import Cambio from './components/Cambio'
import Conversor from './components/Conversor'
import IMC from './components/IMC'
import CEP from './components/CEP'
import Afinador from './components/Afinador'
import Sobre from './components/Sobre'

Vue.use(Router)

export default new Router({
   mode: 'history',
   linkExactActiveClass: 'link-active',
   routes: [{
      path: '/',
      name: 'home',
      component: Home
   }, {
      path: '/math',
      name: 'math',
      component: MathVue
   }, {
      path: '/media',
      name: 'media',
      component: MediaEscolar
   }, {
      path: '/cambio',
      name: 'cambio',
      component: Cambio
   }, {
      path: '/sobre',
      name: 'sobre',
      component: Sobre
   }, {
		path: '/conversor',
		name: 'conversor',
		component: Conversor
	}, {
      path: '/imc',
      name: 'imc',
      component: IMC
   }, {
		path: '/cep',
		name: 'cep',
		component: CEP
	}, {
      path: '/afinador',
      name: 'afinador',
      component: Afinador
   }]
});
