<template>
    <navBar/>
    <div>
      <div class="tags-container">
        <h2>Tags</h2>
        <ul class="tags-list">
          <li v-for="tag in tags" :key="tag" @click="selectTag(tag)" :class="{ active: selectedTag === tag }">
            {{ tag }}
          </li>
        </ul>
      </div>
      <DiscussionList :tag="selectedTag" />
    </div>
  </template>
  
  <script>
  import DiscussionList from '@/components/DiscussionList.vue';
  import { getAllTags } from '../composables/useFirestore.js';
  import navBar from '@/components/navBar.vue';
  export default {
    name:'Categories',
    components: {
      DiscussionList,navBar
    },
    data() {
      return {
        tags: [],
        selectedTag: ''
      };
    },
    async created() {
      this.tags = await getAllTags();
    },
    methods: {
      selectTag(tag) {
        this.selectedTag = tag;
      }
    }
  };
  </script>
  

<style scoped>
.tags-container {
  margin-bottom: 20px;
}

.tags-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
}

.tags-list li {
  margin: 5px;
  padding: 8px 12px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.tags-list li:hover {
  background-color: #e0e0e0;
}

.tags-list li.active {
  background-color: #007bff;
  color: white;
  border-color: #007bff;
}
</style>
