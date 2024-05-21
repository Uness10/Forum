<template>
  <form @submit.prevent="submitResponse">
    <div class="form-group">
      <label for="responseContent">Response</label>
      <textarea v-model="response.content" id="responseContent" class="form-control" rows="3" required></textarea>
    </div>
    <button type="submit" class="btn btn-primary">Submit Response</button>
  </form>
</template>

<script>
import { AddResponse } from '../composables/useFirestore.js';
import getUser from '../composables/getUser.js';

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
  created() {
    const { user } = getUser();
    if (user.value) {
      this.response.userEmail = user.value.email;
    }
  },
  methods: {
    async submitResponse() {
      try {
        await AddResponse(this.disId, this.response.content, this.response.userEmail);
        this.$emit('response-added');
        this.response.content = ''; // Clear content field after submission
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
