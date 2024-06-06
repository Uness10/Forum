<template>
  <div>
    <form @submit.prevent="onLogin">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
    <div v-if="error">{{ error }}</div>
  </div>
</template>

<script>
import { ref } from 'vue';
import useLogin from '../composables/useLogin';

export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async onLogin() {
      const { error,login } = useLogin();
      error.value = null;
      try {
        await login(this.email, this.password);
        if (!error.value) {
          console.log('Login successful');
          this.$emit('login',this.email);
        }
      } catch (err) {
        console.error('Error during login:', err);
        error.value = err.message;
      }
    },
  },
};
</script>