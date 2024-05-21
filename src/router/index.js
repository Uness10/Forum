import { createRouter, createWebHistory } from 'vue-router';

// Import views
import HomeView from '@/views/Home.vue';
import Welcome from '@/views/Welcome.vue';
import Profile from '@/views/Profile.vue';
import Discussion from '@/views/Discussion.vue';
import CreateDiscussion from '@/views/CreateDiscussion.vue'
import Categories from '@/views/Categories.vue';
const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/Categories',
    name: 'Categories',
    component: Categories,
  },
  
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/Discussion/:id',
    name: 'DiscussionDetail',
    component: Discussion,
  },
  {
    path: '/CreateDiscussion',
    name: 'CreateDiscussion',
    component: CreateDiscussion
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  console.log(from,to)
  const currentUser = projectAuth.currentUser;
  console.log(currentUser)
  next();
});

export default router;
