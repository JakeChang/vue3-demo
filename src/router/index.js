import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/form_text',
    name: 'form_text',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/FormTextView.vue')
  },
  {
    path: '/form_checkbox',
    name: 'form_checkbox',
    component: () => import('../views/FormCheckboxView.vue')
  },
  {
    path: '/form_multi_textarea',
    name: 'form_multi_textarea',
    component: () => import('../views/FormMultiTextareaView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
