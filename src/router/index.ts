import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ManageProductsViewVue from '../views/ManageProductsView.vue'

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
  ]
})

export default router
