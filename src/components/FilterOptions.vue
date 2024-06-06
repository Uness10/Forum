<template>
  <div>
    <label for="categorySelect">Filtrer par catégorie</label>
    <select id="categorySelect" v-model="selectedCategory" @change="emitFilter">
      <option v-for="category in categories" :key="category" :value="category">
        {{ category }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedCategory: '',
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
      ]
    };
  },
  methods: {
    emitFilter() {
      this.$emit('filter', this.selectedCategory);
    }
  }
};
</script>
