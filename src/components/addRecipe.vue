<template>
    <div>
      <form @submit.prevent="addRecipe">
        <input type="text" v-model="title" placeholder="Title">
        <input type="text" v-model="image" placeholder="Image URL">
        <textarea v-model="ingredients" placeholder="Ingredients (comma separated)"></textarea>
        <textarea v-model="instructions" placeholder="Instructions (comma separated)"></textarea>
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  </template>
  <script>
  import { ref } from 'vue';
  import { db } from '../firebase';
  import { collection, addDoc } from 'firebase/firestore';
  
  export default {
    setup() {
      const title = ref('');
      const image = ref('');
      const ingredients = ref('');
      const instructions = ref('');
  
      const addRecipe = async () => {
        try {
          await addDoc(collection(db, "recipes"), {
            title: title.value,
            image: image.value,
            ingredients: ingredients.value.split(','),
            instructions: instructions.value.split(',')
          });
          // Redirect or show success message
        } catch (error) {
          console.error("Error adding recipe:", error);
        }
      };
  
      return { title, image, ingredients, instructions, addRecipe };
    }
  };
  </script>
  