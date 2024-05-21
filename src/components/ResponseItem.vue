<template>
    <div class="response-item">
      <div class="d-flex align-items-center mb-2">
        <img :src="responseAvatarUrl" alt="Response Avatar" class="avatar response-avatar mr-2" />
        <h6 class="mb-0">{{ response.userEmail }}</h6>
      </div>
      <p class="mb-0">{{ response.content }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ResponseItem',
    props: {
      response: {
        type: Object,
        required: true
      },
      responseAvatarUrl: {
        type: String,
        default: 'https://via.placeholder.com/40'
      }
    }
  }
  </script>
  
  <style scoped>
  .response-item {
    padding: 10px 15px;
    background-color: #f0f0f0;
    border-radius: 5px;
    margin-bottom: 10px;
  }
  
  .response-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid #6c757d;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
  }
  </style>
  