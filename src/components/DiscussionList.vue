<template>
  <div class="discussion-list">
    <div v-if="loading" class="loading">Loading...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else class="discussion-items">
      <DiscussionItem
        v-for="item in discussions"
        :key="item.id"
        :discussion="item"
        class="discussion-item"
      />
    </div>
  </div>
</template>


<script>
import { fetchDis } from '../composables/useFirestore.js';
import DiscussionItem from '../components/DiscussionItem.vue';

export default {
  name: 'DiscussionList',
  components: {
    DiscussionItem
  },
  props: {
    tag: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      discussions: [],
      loading: true,
      error: null
    };
  },
  async mounted() {
    await this.fetchDiscussions();
  },
  watch: {
    tag: {
      handler: 'fetchDiscussions',
      immediate: true
    }
  },
  methods: {
    async fetchDiscussions() {
      this.loading = true;
      this.error = null;

      try {
        const allDiscussions = await fetchDis();
        this.discussions = this.tag
          ? allDiscussions.filter(disc => disc.tags.includes(this.tag))
          : allDiscussions;
      } catch (err) {
        this.error = 'Failed to fetch discussions';
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>
<style scoped>
.discussion-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: 'Arial, sans-serif';
}

.loading, .error {
  font-size: 18px;
  color: #555;
  margin-top: 20px;
}

.discussion-items {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  margin-top: 20px;
}

.discussion-item {
  background: #deb11f;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-decoration: none;
  transition: transform 0.3s, box-shadow 0.3s;
}

.discussion-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
</style>

