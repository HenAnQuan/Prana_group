import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/brandstory',
    name: 'BrandStory',
    component: () => import(/* webpackChunkName: "brandStory" */ '../views/BrandStory.vue')
    // component: BrandStory
  },
  {
    path: '/healthcare',
    name: 'HealthCare',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "healthCare" */ '../views/HealthCare.vue')
    // component: HealthCare
  },
  {
    path: '/cooperation',
    name: 'Cooperation',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "cooperation" */ '../views/Cooperation.vue')
    // component: Cooperation
  },
  {
    path: '/register',
    name: 'Register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue')
    // Cooperation:Register
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
