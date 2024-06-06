<template>
  <div class="search-bar">
    <input
      type="text"
      v-model="searchQuery"
      placeholder="Rechercher des recettes"
      @input="$emit('search', searchQuery)"
    />
    <button @click="$emit('search', searchQuery)">
      <i class="icon-search"></i>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: ''
    };
  }
};
</script>

<style scoped>
.search-bar {
  display: flex;
  align-items: center;
}

.search-bar input {
  flex-grow: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px;
}

.search-bar button {
  padding: 8px;
  background-color: #38470B;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
}

.search-bar button .icon-search {
  font-size: 16px;
}

.search-bar button:hover {
  background-color: #2c3e50;
}
</style>
