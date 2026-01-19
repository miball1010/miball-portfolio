import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/work',
      component: () => import('../components/Layout.vue'),
      children: [
        {
          path: 'gameEcho',
          component: () => import('../views/WebGameEcho.vue'),
        },
         {
          path: 'flurryPop',
          component: () => import('../views/WebFlurryPop.vue'),
        },
        {
          path: 'woman',
          component: () => import('../views/WebWoman.vue'),
        },
        {
          path: 'cny',
          component: () => import('../views/WebCny.vue'),
        },
        {
          path: 'goodbye',
          component: () => import('../views/WebGoodbye.vue'),
        },
        {
          path: 'graphic',
          component: () => import('../views/Graphic.vue'),
        },
        {
          path: 'motion',
          component: () => import('../views/Motion.vue'),
        },
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: HomeView
    }
  ]
})

export default router
