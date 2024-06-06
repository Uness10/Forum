<template>
  <div class="add-recipe-container">
    <h1>Ajouter une Nouvelle Recette</h1>
    <form @submit.prevent="submitRecipe">
      <div class="form-group">
        <label for="nom">Nom de la Recette</label>
        <input type="text" v-model="recipe.nom" id="nom" required />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea v-model="recipe.description" id="description" required></textarea>
      </div>
      <div class="form-group">
        <label for="image">Image URL</label>
        <input type="text" v-model="recipe.image" id="image" required />
      </div>
      <div class="form-group">
        <label for="ingredients">Ingrédients</label>
        <div v-for="(ingredient, index) in recipe.ingredients" :key="index" class="ingredient-item">
          <input type="text" v-model="ingredient.nom" placeholder="Nom de l'ingrédient" required />
          <input type="number" v-model="ingredient.quantité" placeholder="Quantité" required />
          <input type="text" v-model="ingredient.unité" placeholder="Unité" required />
          <button type="button" @click="removeIngredient(index)">Supprimer</button>
        </div>
        <button type="button" @click="addIngredient">Ajouter un Ingrédient</button>
      </div>
      <div class="form-group">
        <label for="instructions">Instructions</label>
        <div v-for="(instruction, index) in recipe.instructions" :key="index" class="instruction-item">
          <textarea :value="instruction" @input="updateInstruction($event, index)" placeholder="Étape" required></textarea>
          <button type="button" @click="removeInstruction(index)">Supprimer</button>
        </div>
        <button type="button" @click="addInstruction">Ajouter une Instruction</button>
      </div>
      <div class="form-group">
        <label for="temps_preparation">Temps de Préparation (minutes)</label>
        <input type="number" v-model="recipe.temps_preparation" id="temps_preparation" required />
      </div>
      <div class="form-group">
        <label for="temps_cuisson">Temps de Cuisson (minutes)</label>
        <input type="number" v-model="recipe.temps_cuisson" id="temps_cuisson" required />
      </div>
      <div class="form-group">
        <label for="regime">Régime</label>
        <select v-model="recipe.regime" id="regime" required>
          <option disabled value="">Sélectionner un régime</option>
          <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="portions">Portions</label>
        <input type="number" v-model="recipe.portions" id="portions" required />
      </div>
      <div class="form-group">
        <label for="tags">Tags</label>
        <input type="text" v-model="recipe.tags" id="tags" required />
      </div>
      <button type="submit">Ajouter la Recette</button>
    </form>
  </div>
</template>

<script>
  import { addRecipe } from '@/composables/useFirestore.js';
  import getUser from '@/composables/getUser';

export default {
  name: 'AddRecipe',
  data() {
    return {
      categories: [
          'Omnivore', 
          'Végétarien', 
          'Pescétarien', 
          'Flexitarien', 
          'Fruitarien', 
          'Crudivore', 
          'Paleo', 
          'Cétogène', 
          'Sans gluten'
        ],
      recipe: {
        nom: '',
        description: '',
        image: '',
        ingredients: [{ nom: '', quantité: '', unité: '' }],
        instructions: [''],
        temps_preparation: '',
        temps_cuisson: '',
        regime: '',
        portions: '',
        tags: ''

      }
    };
  },
  methods: {
    addIngredient() {
      this.recipe.ingredients.push({ nom: '', quantité: '', unité: '' });
    },
    removeIngredient(index) {
      this.recipe.ingredients.splice(index, 1);
    },
    addInstruction() {
      this.recipe.instructions.push('');
    },
    removeInstruction(index) {
      this.recipe.instructions.splice(index, 1);
    },
    updateInstruction(event, index) {
      this.recipe.instructions[index] = event.target.value;
    },
    async submitRecipe() {
  try {
    const { user } = getUser(); // Use destructuring to get the user ref
    if (typeof this.recipe.tags === 'string') {
      this.recipe.tags = this.recipe.tags.split(',').map(tag => tag.trim()); // Split and trim tags
    }
      this.recipe.authorID = user && user.value ? user.value.uid : null; // Safely get the user ID
      await addRecipe(this.recipe); // Ensure the addRecipe call is awaited
      this.resetForm(); // Reset form after successful submission
    } catch (error) {
      console.error('Erreur lors de l\'ajout de la recette:', error);
      alert('Erreur lors de l\'ajout de la recette');
    }
  },

    resetForm() {
      this.recipe = {
        nom: '',
        description: '',
        image: '',
        ingredients: [{ nom: '', quantité: '', unité: '' }],
        instructions: [''],
        temps_preparation: '',
        temps_cuisson: '',
        regime: '',
        portions: '',
        tags: '',
      };
    }
  }
};
</script>

<style scoped>
.add-recipe-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-group input,
.form-group textarea {
  width: calc(100% - 22px);
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
}

.form-group button {
  margin-top: 10px;
}

.ingredient-item,
.instruction-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.ingredient-item input,
.instruction-item textarea {
  flex: 1;
  margin-right: 10px;
}

button[type="button"] {
  background-color: #ff7043;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
}

button[type="button"]:hover {
  background-color: #ff5722;
}

button[type="submit"] {
  display: block;
  width: 100%;
  padding: 15px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

button[type="submit"]:hover {
  background-color: #45a049;
}
</style>
