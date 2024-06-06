<template>
  <div class="recipe-container">
    <SearchBar @search="handleSearch" />
    <FilterOptions @filter="handleFilter" />
    <div class="recipe-grid">
      <div v-for="recipe in displayedRecipes" :key="recipe.id" class="recipe-card">
        <RecipeCard :recipe="recipe" />        
      </div>
    </div>
  </div>
</template>

<script>
import { fetchRecipes } from '@/composables/useFirestore.js';
import RecipeCard from '@/components/RecipeCard.vue';
import SearchBar from '@/components/SearchBar.vue';
import FilterOptions from '@/components/FilterOptions.vue';

export default {
  name: 'Recipes',
  components: {
    RecipeCard,
    SearchBar,
    FilterOptions
  },
  data() {
    return {
      recipes: [],
      searchQuery: '',
      selectedCategory: ''
    };
  },
  computed: {
    filteredRecipes() {
      let filtered = this.recipes;
      if (this.searchQuery) {
        filtered = filtered.filter(recipe => recipe.nom.toLowerCase().includes(this.searchQuery.toLowerCase()));
      }
      if (this.selectedCategory) {
        filtered = filtered.filter(recipe => recipe.regime === this.selectedCategory);
      }
      return filtered;
    },
    displayedRecipes() {
      return this.filteredRecipes.length > 0 ? this.filteredRecipes : this.recipes;
    }
  },
  methods: {
    handleSearch(query) {
      this.searchQuery = query;
    },
    handleFilter(category) {
      this.selectedCategory = category;
    },
    async fetchRecipesData() {
      try {
        const data = await fetchRecipes();
        this.recipes = data;
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    }
  },
  mounted() {
    this.fetchRecipesData();
  }
};
</script>

<style>
.recipe-container {
  width: 100%;
  padding: 20px;
}

.recipe-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
}

.recipe-card {
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.recipe-card:hover {
  transform: translateY(-5px);
}
</style>
