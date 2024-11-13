import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import GalleryView from '../views/GalleryView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,      
    },

    {
      path: '/about',
      name: 'about',      
      component: AboutView,
    },

    {
      path: '/gallery',
      name: 'gallery',      
      component: GalleryView,
    },

    {
      path: '/contact',
      name: 'contact',      
      component: ContactView,
    },

  ],
})

export default router
