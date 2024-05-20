import { createRouter, createWebHistory } from 'vue-router';

// Import views
import HomeView from '@/views/Home.vue';
import LoginView from '@/views/Login.vue';
import Welcome from '@/views/Welcome.vue';
import ProfileView from '@/views/Profile.vue';
import DiscussionView from '@/views/Discussion.vue';



const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/welcome',
    name: 'welcome',
    component: Welcome,
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView,
    meta: { requiresAuth: true },
  },
  {
    path: '/Discussion/:id',
    name: 'DiscussionDetail',
    component: DiscussionView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = !!localStorage.getItem('user');

  if (requiresAuth && !isAuthenticated) {
    next({ name: 'login' });
  } else {
    next();
  }
});

export default router;
