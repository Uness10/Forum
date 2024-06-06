import { createRouter, createWebHistory } from 'vue-router';
import { projectAuth } from '../Firebase/config';

// Import views
import HomeView from '@/views/Home.vue';
import Welcome from '@/views/Welcome.vue';
import Profile from '@/views/Profile.vue';
import AddRecipe from '@/views/addRecipe.vue';
import Recipes from '@/views/recipes.vue';
import RecipeDetails from '@/views/recipeDetails.vue';


const routes = [
  {
    path: '/welcome',
    name: 'Welcome',
    component: Welcome,
  },
  {
    path: '/add-recipe',
    name: 'AddRecipe',
    component: AddRecipe,
  },
  {
    path: '/recipes/:id',
    name: 'RecipeDetails',
    component: RecipeDetails,
  },
  {
    path: '/recipes',
    name: 'Recipes',
    component: Recipes,
  },
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  }
];



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = projectAuth.onAuthStateChanged(user => {
      unsubscribe();
      resolve(user);
    }, reject);
  });
};
router.beforeEach(async (to, from, next) => {
  const currentUser = await getCurrentUser();
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) {
    next('/welcome');
  } else {
    next();
  }
});

export default router;