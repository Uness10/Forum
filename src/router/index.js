import { createRouter, createWebHashHistory } from 'vue-router';
import { projectAuth } from '../firebase/config';
// Import views
import HomeView from '@/views/Home.vue';
import about from '@/views/about.vue';
import products from '@/views/products.vue';

const routes = [
  {
    path: '/about',
    name: 'about',
    component: about,
  },
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },

  {
    path: '/products',
    name: 'products',
    component: products,
  },

];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});



export default router;


