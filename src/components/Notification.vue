<template>
    <div class="new-response-form mt-4">
      <h4>Add a new response</h4>
      <form @submit.prevent="submitResponse">
        <div class="form-group">
          <label for="userEmail">Your Email</label>
          <input type="email" id="userEmail" v-model="response.userEmail" class="form-control" required />
        </div>
        <div class="form-group">
          <label for="content">Response</label>
          <textarea id="content" v-model="response.content" class="form-control" rows="3" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  import { addResponseToDiscussion } from '../composables/useFirestore.js'
  
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
        await addResponseToDiscussion(this.disId, this.response);
        this.$emit('response-added');
        this.response.userEmail = '';
        this.response.content = '';
      }
    }
  }
  </script>
  
  <style scoped>
  .new-response-form {
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    font-weight: bold;
  }
  
  .btn {
    margin-top: 10px;
  }
  </style>
  