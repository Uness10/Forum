<template>
    <b-card>
      <b-form @submit.prevent="updateProfile">
        <b-form-group label="Name">
          <b-form-input v-model="name" required></b-form-input>
        </b-form-group>
        <b-form-group label="Email">
          <b-form-input v-model="email" type="email" required readonly></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Update Profile</b-button>
      </b-form>
    </b-card>
  </template>
  
  <script>
  export default {
    name: 'UserProfile',
    data() {
      return {
        name: '',
        email: '',
      };
    },
    created() {
      // Load user profile data here
    },
    methods: {
      updateProfile() {
        // Update profile logic here
      },
    },
  };
  </script>
  