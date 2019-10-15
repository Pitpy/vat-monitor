import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('./views/Home.vue')
const ReportPassenter = () => import('./views/reports/ReportPassenger.vue')
const ReportVehicle = () => import('./views/reports/ReportVehicle .vue')

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: Home,
      redirect: {
        name: 'Dashboard'
      }
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Home
    },
    {
      path: '/passenger',
      name: 'Vassenger',
      component: ReportPassenter
    },
    {
      path: '/vehicle',
      name: 'Vehicle',
      component: ReportVehicle
    }
  ]
})