import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ManageProductsViewVue from '../views/ManageProductsView.vue'
import ProductFormVue from '@/components/Products/ProductForm.vue'

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
    },
    {
      path: '/manageProduct/:id',
      name: 'manageProduct',
      component: ProductFormVue
    }
  ]
})

export default router
