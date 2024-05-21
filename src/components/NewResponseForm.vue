<template>
  <form @submit.prevent="submitResponse">
    <div class="form-group">
      <label for="userEmail">Your Email</label>
      <input v-model="response.userEmail" type="email" id="userEmail" class="form-control" required />
    </div>
    <div class="form-group">
      <label for="responseContent">Response</label>
      <textarea v-model="response.content" id="responseContent" class="form-control" rows="3" required></textarea>
    </div>
    <button type="submit" class="btn btn-primary">Submit Response</button>
  </form>
</template>

<script>
import { addResponse } from '../composables/useFirestore.js';

export default {
  name: 'NewResponseForm',
  props: {
    disId: String
  },
  data() {
    return {
      response: {
        userEmail: '',
        content: ''
      }
    }
  },
  methods: {
    async submitResponse() {
      try {
        await addResponse(this.disId, this.response.content, this.response.userEmail);
        this.$emit('response-added');
        this.response.userEmail = '';
        this.response.content = '';
      } catch (error) {
        console.error('Error adding response:', error);
        alert('Failed to add response: ' + error.message);
      }
    }
  }
}
</script>

<style scoped>
.form-group {
  margin-bottom: 1rem;
}
</style>
