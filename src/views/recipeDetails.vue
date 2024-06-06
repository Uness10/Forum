<template>
  <div class="recipe-detail">
    <header>
      <h1>{{ recipe.nom }}</h1>
    </header>
    <section class="recipe-image">
      <img :src="recipe.image" alt="Recipe Image">
    </section>
    <section class="recipe-info">
      <h2>Ingrédients</h2>
      <ul>
        <li v-for="ingredient in recipe.ingredients" :key="ingredient.nom">
          {{ ingredient.quantité }} {{ ingredient.unité }} {{ ingredient.nom }}
        </li>
      </ul>
      <h2>Instructions</h2>
      <ol>
        <li v-for="instruction in recipe.instructions" :key="instruction">
          {{ instruction }}
        </li>
      </ol>
      <h2>Auteur</h2>
      <p>{{ author.name }} - {{ author.bio }}</p>
    </section>
    <section class="update-recipe">
      <h2>Update Recipe</h2>
      <form @submit.prevent="updateRecipeData">
        <label for="nom">Name:</label>
        <input type="text" v-model="recipe.nom" id="nom">
        <label for="image">Image URL:</label>
        <input type="text" v-model="recipe.image" id="image">
        <label for="ingredients">Ingredients (comma separated):</label>
        <input type="text" v-model="ingredientString" id="ingredients">
        <label for="instructions">Instructions (comma separated):</label>
        <input type="text" v-model="instructionString" id="instructions">
        <button type="submit">Update Recipe</button>
      </form>
      <p v-if="updateSuccess">Recipe updated successfully!</p>
      <p v-if="updateError">{{ updateError }}</p>
    </section>
  </div>
</template>

<script>
import { fetchRecipe, fetchUser, updateRecipe } from '@/composables/useFirestore.js';

export default {
  name: 'RecipeDetails',
  data() {
    return {
      recipe: {
        ingredients: [],
        instructions: []
      },
      author: {},
      ingredientString: '',
      instructionString: '',
      updateSuccess: false,
      updateError: ''
    };
  },
  methods: {
    async loadRecipeData() {
      const recipeId = this.$route.params.id;
      this.recipe = await fetchRecipe(recipeId);
      this.author = await fetchUser(this.recipe.authorID);
      this.ingredientString = this.recipe.ingredients.map(i => `${i.quantité} ${i.unité} ${i.nom}`).join(', ');
      this.instructionString = this.recipe.instructions.join(', ');
    },
    async updateRecipeData() {
      const recipeId = this.$route.params.id;
      const updatedRecipe = {
        nom: this.recipe.nom,
        image: this.recipe.image,
        ingredients: this.ingredientString.split(',').map(ingredient => {
          const parts = ingredient.trim().split(' ');
          return { quantité: parts[0], unité: parts[1], nom: parts.slice(2).join(' ') };
        }),
        instructions: this.instructionString.split(',').map(instruction => instruction.trim())
      };
      const response = await updateRecipe(recipeId, updatedRecipe);
      if (response.success) {
        this.updateSuccess = true;
        this.updateError = '';
        this.loadRecipeData();
      } else {
        this.updateSuccess = false;
        this.updateError = response.error;
      }
    }
  },
  mounted() {
    console.log(this.$route.params.id);
    this.loadRecipeData();
  }
};
</script>

<style scoped>
/* Add your styles here */
.recipe-detail {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

header {
  text-align: center;
  margin-bottom: 20px;
}

.recipe-image img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 20px;
}

.recipe-info, .update-recipe {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
}

.update-recipe form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.update-recipe label {
  margin-bottom: 5px;
}

.update-recipe input {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.update-recipe button {
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #ff7043;
  color: white;
  cursor: pointer;
}

.update-recipe button:hover {
  background-color: #ff5722;
}

.update-recipe p {
  margin-top: 10px;
}
</style>
