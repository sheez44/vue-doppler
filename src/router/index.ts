import GameView from '@/views/GameView.vue'
import HomeView from '@/views/HomeView.vue'
import ResultsView from '@/views/ResultsView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/game',
      name: 'game',
      component: GameView,
    },
    {
      path: '/results',
      name: 'results',
      component: ResultsView,
    },
  ],
})

export default router
