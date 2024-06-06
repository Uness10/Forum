<template>
    <nav class="navbar navbar-expand-lg shadow-sm" v-if="logged!==-1">
      <div class="container-fluid">

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto" style="  background-color: #38470B;">
            <li class="nav-item" >
              <router-link class="nav-link"  to="/">Accueil</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/recipes">Recettes</router-link>
            </li>
            <li class="nav-item" v-if="logged">
                <router-link  class="nav-link" to="/add-recipe">Ajouter une Recette</router-link>           
            </li>
            <li class="nav-item" v-if="logged">
              <router-link  class="nav-link" to="/profile">Profile</router-link>

            </li>
            <li class="nav-item" v-else>
              <router-link  class="nav-link" to="/welcome">Enter</router-link>

            </li>
            <div class="nav-item" @click="handleLogout" v-if="logged">
              <span class="nav-link">Log Out</span>
            </div>

          </ul>
        </div>
  
      </div>
    </nav>
  </template>
  
  <script>
import { getCurrentUser } from '@/router/index.js'; // Correct the import path if necessary
import logout from '../composables/useLogout';

export default {
    name: 'Navbar',
    data() {
    return {
      logged: -1
    };
  },
  async created() {

    const currentUser = await getCurrentUser();

    this.logged = !!currentUser;
    console.log(this.logged )

  },
  methods: {
    async handleLogout() {
      try {
        await logout();
        this.$router.push('/welcome');
      } catch (error) {
        console.error('Error during logout:', error);
      }
      }
    }
  ,
  watch: {
    '$route.path': async function() {
      const currentUser = await getCurrentUser();
      this.logged = !!currentUser;
    }
  }
  }
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap');
  
  .navbar {
    background-color: #38470B;
    transition: background-color 0.3s;
    font-family: 'Nunito', sans-serif;
    height: 10vh;
  }
  
  .navbar-brand {
    font-size: 1.75rem;
    display: flex;
    align-items: center;
    gap: 10px;
    border-radius: 5px;
    padding: 0.5rem;
    transition: background-color 0.3s;
    overflow: visible;
    background-color: #F1D6AB;
  
  }
  
  .navbar-brand:hover {
    background-color: #f8f9fa;
  }
  
  .logo {
    max-height: 50px;
    height: auto;
  }
  
  .brand-name {
    color: #000000;
    font-weight: 700;
  }
  
  .navbar-nav .nav-item {
    margin: 0 15px;
  }
  
  .navbar-nav .nav-link {
    transition: background-color 0.3s, color 0.3s;
    font-weight: 700;
    color: #f4f4f4;
    padding: 0.5rem 1rem;
  }
  
  .navbar-nav .nav-link:hover, .navbar-nav .nav-link:focus {
    background-color: #F1D6AB;
    color: #000000;
    border-radius: 5px;
  }
  
  .navbar-toggler {
    border: none;
  }
  
  .navbar-toggler-icon {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23FFD700' viewBox='0 0 30 30'%3E%3Cpath stroke='rgba%28100%2C 100%2C 100%2C 0.5%29' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
  }
  
  @media (max-width: 992px) {
    .navbar-nav .nav-item {
      margin: 0 10px;
    }
  
    .navbar-nav .nav-link {
      padding: 0.8rem;
    }
  }
  
  @media (max-width: 768px) {
    .navbar-brand {
      font-size: 1.5rem;
      padding: 0.3rem;
    }
  
    .logo {
      max-height: 40px;
    }
  
    .navbar-nav .nav-item {
      margin: 0 8px;
    }
  
    .navbar-nav .nav-link {
      padding: 0.6rem;
    }
  }
  
  @media (max-width: 576px) {
    .navbar-brand {
      font-size: 1.25rem;
    }
  
    .logo {
      max-height: 35px;
    }
  
    .navbar-nav .nav-item {
      margin: 0 5px;
    }
  
    .navbar-nav .nav-link {
      padding: 0.5rem;
    }
  }
  </style>