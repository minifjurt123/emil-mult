import Vue from 'vue'
import Router from 'vue-router'
import Game from '@/components/Game'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      props: true
    },
    {
      path: '/play',
      name: 'Game',
      component: Game
    },
  ]
})
