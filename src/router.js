import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'listContainers',
      component: () => import(/* webpackChunkName: "containerDashboard" */ '@/views/ContainerDashboard.vue')
    },
    {
      path: '/container/:id',
      name: 'manageContainer',
      component: () => import(/* webpackChunkName: "containerManagement" */ '@/views/ContainerManagement.vue')
    }
  ]
})
