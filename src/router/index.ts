import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ManageProductsViewVue from '../views/ManageProductsView.vue'
import LoginVue from '@/components/signIn/Login.vue'
import RegisterVue from '@/components/signIn/Register.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/manageProducts',
      name: 'manageProducts',
      component: ManageProductsViewVue
    }
    ,
    {
      path: '/login',
      name: 'login',
      component: LoginVue
    }
    ,
    {
      path: '/register',
      name: 'register',
      component: RegisterVue
    }
  ]
})

export default router
