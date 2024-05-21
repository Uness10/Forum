<template>
  <div class="container mt-5">
    <div class="card shadow-sm mb-4">
      <div class="card-body">
        <div class="d-flex align-items-center mb-3">
          <img :src="authorAvatarUrl" alt="Author Avatar" class="avatar mr-3" />
          <div>
            <h5 class="author-name mb-0">{{ discussion.userEmail }}</h5>
          </div>
        </div>
        <h2 class="card-title text-primary">{{ discussion.title }}</h2>
        <p class="card-text">{{ discussion.content }}</p>
        <hr />
        <div v-if="responses.length > 0" class="responses mt-4">
          <h4 class="text-secondary">Responses</h4>
          <div class="list-group mt-3">
            <ResponseItem 
              v-for="response in responses" 
              :key="response.id" 
              :response="response" 
              :responseAvatarUrl="responseAvatarUrl" 
            />
          </div>
        </div>
        <div v-else class="mt-4">
          <p class="text-muted">No responses yet.</p>
        </div>
        <button @click="showResponseForm = !showResponseForm" class="btn btn-primary mt-4">
          Add New Response
        </button>
        <NewResponseForm v-if="showResponseForm" @response-added="handleResponseAdded" :disId="DisId"/>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchDisId, Disc_responses } from '../composables/useFirestore.js';
import ResponseItem from './ResponseItem.vue';
import NewResponseForm from './NewResponseForm.vue';

export default {
  name: 'DiscussionDetails',
  components: {
    ResponseItem,
    NewResponseForm
  },
  props: {
    DisId: String
  },
  data() {
    return {
      discussion: {
        title: '',
        content: '',
        userEmail: '',
      },
      responses: [],
      authorAvatarUrl: 'https://via.placeholder.com/50', // Placeholder image for author avatar
      responseAvatarUrl: 'https://via.placeholder.com/40', // Placeholder image for response avatars
      showResponseForm: false
    }
  },
  async mounted() {
    this.fetchDiscussion();
  },
  methods: {
    async fetchDiscussion() {
      try {
        this.discussion = await fetchDisId(this.DisId);
        this.responses = await Disc_responses(this.DisId); // Fetch responses
      } catch (error) {
        console.error('Error fetching discussion or responses:', error);
      }
    },
    handleResponseAdded() {
      this.fetchDiscussion(); // Refresh discussion and responses
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
}

.card {
  border-radius: 10px;
  padding: 20px;
  background: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid #007bff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.card-title {
  font-size: 1.75rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.card-text {
  font-size: 1.1rem;
  margin-bottom: 20px;
  line-height: 1.6;
}

.responses .list-group-item {
  border: none;
  padding: 15px 0;
  background-color: #f9f9f9;
  border-radius: 5px;
}

.responses .list-group-item:not(:last-child) {
  margin-bottom: 10px;
}

.text-primary {
  color: #007bff !important;
}

.text-secondary {
  color: #6c757d !important;
}

.author-name {
  font-weight: bold;
}

hr {
  margin-top: 20px;
  margin-bottom: 20px;
  border: 0;
  border-top: 1px solid #eee;
}

.btn {
  margin-top: 20px;
}
</style>
