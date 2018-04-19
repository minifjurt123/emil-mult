import Vue from 'vue'
import Router from 'vue-router'
import Game from '@/components/Game'
import Home from '@/components/Home'
import ScoreBoard from '@/components/ScoreBoard'
import Todo from '@/components/Todo'

Vue.use(Router)

export default new Router({
	mode: 'history',
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
		{
			path: '/scoreboard',
			name: 'Scoreboard',
			component: ScoreBoard
		},
		{
			path: '/todo',
			name: 'Todo',
			component: Todo
		},
		// Soft 404 handling
		{
			path: '*',
			redirect: { name: 'Home' },
		}
	]
})
