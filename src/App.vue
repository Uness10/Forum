<template>
  <div class="home">
    <!-- Header -->
      <navbar /> <!-- Include NavBar component here -->
  
    <RouterView/>
    <footer>
      <p>&copy; 2023 Notre Application de Recettes</p>
      <ul>
        <li><router-link to="/contact">Contact</router-link></li>
        <li><router-link to="/legal">Mentions Légales</router-link></li>
        <li><router-link to="/social">Réseaux Sociaux</router-link></li>
      </ul>
    </footer>
  </div>
</template>

<script>
import navbar from './components/navbar.vue'; // Import NavBar component

export default {
  components: {
    navbar // Register NavBar component
  }
};
</script>

<style scoped>
footer {
  background-color: #763e2c;
  text-align: center;
  padding: 10px 0;
  color: white;
  margin-top: 20px;
}

footer ul {
  list-style: none;
  padding: 0;
}

footer li {
  display: inline;
  margin: 0 10px;
}</style>
