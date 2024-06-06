<template>
  <div class="welcome container">
    <div v-if="showLogin" class="form-container">
      <h2>Login</h2>
      <LoginForm @login="enterForum" />
      <p>No account yet? <span @click="showLogin = false">Signup</span> instead.</p>
    </div>
    <div v-else class="form-container">
      <h2>Sign up</h2>
      <SignupForm @signup="enterForum" />
      <p>Already registered? <span @click="showLogin = true">Login</span> instead.</p>
    </div>
  </div>
</template>

<script>
import SignupForm from '../components/SignupForm.vue';
import LoginForm from '../components/LoginForm.vue';
import getUser from '../composables/getUser';

export default {
  name: 'welcome',
  components: { SignupForm, LoginForm },
  data() {
    return {
      showLogin: true
    }
  },
  methods: {
    enterForum(email) {
      const user = email; // This now directly gives you the user object or null
      console.log(user)
      this.$router.push('/');
    }
  }
}
</script>

<style>
.welcome {
  min-height: 50vh;
  display: flex;
  width: 60%;
  align-items: center;
  justify-content: center;
  margin-top: 10vh;
  margin-bottom: 10vh;
  padding-top: 10vh;
  padding-bottom: 10vh;
  border-radius: 8px;
  transition: width 0.3s, padding 0.3s;
}

.form-container {
  width: 50%;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.4);
  text-align: center;
  transition: width 0.3s, padding 0.3s;
}

.welcome h2 {
  margin-bottom: 20px;
  color: #000000;
}

.welcome form {
  width: 100%;
  margin: auto;
}

.welcome label {
  display: block;
  margin-bottom: 10px;
  color: #1D4E89;
}

.welcome input {
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  outline: none;
  font-size: 14px;
  color: #666;
}

.welcome button {
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: none;
  background-color: #A0855B;
  color: white;
  font-size: 16px;
  cursor: pointer;
  margin-top: 15px;
}

.welcome span {
  font-weight: bold;
  color: #A0855B;
  cursor: pointer;
  text-decoration: none;
}

.toggle-form {
  margin-top: 15px;
  font-size: 14px;
  color: #666;
}

@media (max-width: 1024px) {
  .welcome {
    width: 80%;
    padding: 5vh 2vh;
  }

  .form-container {
    width: 70%;
    padding: 15px;
  }

  .welcome h2 {
    font-size: 1.5rem;
  }

  .welcome button {
    font-size: 14px;
    padding: 8px;
  }

  .toggle-form {
    font-size: 12px;
  }
}

@media (max-width: 768px) {
  .welcome {
    width: 60%;
    padding: 3vh 1vh;
  }

  .form-container {
    width: 90%;
    padding: 10px;
  }

  .welcome h2 {
    font-size: 1.2rem;
  }

  .welcome button {
    font-size: 12px;
    padding: 6px;
  }

  .toggle-form {
    font-size: 10px;
  }
}
</style>