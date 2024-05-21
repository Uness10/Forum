<template>
  <div class="welcome container">
    <form @submit.prevent="handleLogin ">
      <input type="email" required placeholder="Your email" v-model="email">
      <input type="password" required placeholder="Your password" v-model="password">
      <button >Login</button>
      <div class="error">{{ error }}</div>
    </form>
  </div>
</template>

<script>
import useLogin from '@/composables/useLogin';
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      email: '',
      password: '',
      error: ''
    };
  },
  methods: {
    ...mapActions(['UpdateUserInfo']),
    async handleLogin() {
      const response = await useLogin(this.email, this.password);
      
      if (!this.error) {
        console.log("USER LOGGED SUCCESS");
        this.$emit('login');
        this.UpdateUserInfo({'email':this.email,'passworld':this.password})
      } else {
        console.log("USER NOT LOGGED");
      }
    }
  }
};
</script>

<style>
</style>
