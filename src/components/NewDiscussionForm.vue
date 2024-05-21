<template>
  <div class="new-discussion-form container mt-5">
    <h2 class="mb-4 text-center">Start a New Discussion</h2>
    <form @submit.prevent="submitDiscussion" aria-label="New Discussion Form">
      <div class="form-group mb-4">
        <label for="title" class="form-label">Title</label>
        <input v-model="discussion.title" type="text" id="title" class="form-control" required aria-required="true" />
      </div>
      <div class="form-group mb-4">
        <label for="content" class="form-label">Content</label>
        <textarea v-model="discussion.content" id="content" class="form-control" rows="5" required aria-required="true"></textarea>
      </div>
      <div class="form-group mb-4">
        <label for="tags" class="form-label">Tags</label>
        <input v-model="discussion.tags" type="text" id="tags" class="form-control" placeholder="Separate tags with commas" required aria-required="true" />
      </div>
      <button type="submit" class="btn btn-primary w-100">Submit Discussion</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { AddDiscussion } from '../composables/useFirestore.js';
import getUser from '../composables/getUser.js';

export default {
  name: 'NewDiscussionForm',
  setup(props, { emit }) {
    const { user } = getUser();
    const discussion = ref({
      title: '',
      content: '',
      tags: ''
    });

    const submitDiscussion = async () => {
      if (!user.value) {
        alert('You need to be logged in to submit a discussion.');
        return;
      }

      let { title, content, tags } = discussion.value;
      tags = tags.split(',').map(tag => tag.trim()).filter(tag => tag !== '');

      const userEmail = user.value.email;

      await AddDiscussion(title, content, userEmail, tags);
      emit('discussion-added');
      resetForm();
    };

    const resetForm = () => {
      discussion.value = {
        title: '',
        content: '',
        tags: ''
      };
    };

    return {
      discussion,
      submitDiscussion
    };
  }
};
</script>

<style scoped>
.new-discussion-form {
  max-width: 600px;
  margin: 0 auto;
  padding: 30px;
  background: #f9f9f9;
  border: 1px solid #e3e3e3;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
}

.new-discussion-form h2 {
  font-family: 'Roboto', sans-serif;
  font-size: 1.75rem;
  color: #333;
}

.form-label {
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: #555;
}

.form-control {
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  transition: border-color 0.3s ease;
}

.form-control:focus {
  border-color: #007bff;
  outline: none;
}

.btn {
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  padding: 12px;
  border-radius: 8px;
  background-color: #007bff;
  color: #fff;
  border: none;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #0056b3;
}

.btn:focus {
  outline: none;
  box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
}
</style>
