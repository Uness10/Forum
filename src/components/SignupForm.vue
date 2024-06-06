<template>
  <form @submit.prevent="handleSignUp">
    <input type="text" required placeholder="Display name" v-model="displayName">
    <input type="email" required placeholder="Your email" v-model="email">
    <input type="password" required placeholder="Your password" v-model="password">
    <input type="file" accept="image/*" v-on:change="handleFileChange">
    
    <button>Sign up</button>
    <div class="error">{{ error }}</div>
  </form>
</template>

<script setup>
import useSignup from '@/composables/useSignup';
import { ref, defineEmits } from 'vue';

const emit = defineEmits(['signup']);

const displayName = ref('');
const email = ref('');
const password = ref('');
const profileImage = ref(null);

const { error, signup } = useSignup();

const handleSignUp = async () => {
  await signup(email.value, password.value, displayName.value, profileImage.value);
  if (!error.value) {
    emit('signup');
  }
};

const handleFileChange = (event) => {
  const file = event.target.files[0];
  profileImage.value = file;
};
</script>


<style>

</style>