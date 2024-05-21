<template>
      <navBar/>

    <div class="create-discussion">
      <h1>Create a New Discussion</h1>
      <NewDiscussionForm @discussion-added="handleDiscussionAdded" />
    </div>
  </template>
  
  <script>
  import NewDiscussionForm from '../components/NewDiscussionForm.vue';
  import navBar from '@/components/navBar.vue';

  export default {
    name: 'CreateDiscussion',
    components: {
      NewDiscussionForm,navBar
    },
    methods: {
      handleDiscussionAdded() {
        this.$router.push({ name: 'Home' });
      }
    }
  }
  </script>
  
  <style scoped>
  .create-discussion {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .create-discussion h1 {
    text-align: center;
    margin-bottom: 20px;
  }
  </style>
  