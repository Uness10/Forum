<template>
  <div>
    <header>
      <h1>Bienvenue sur notre site de recettes</h1>
    </header>

    <section class="presentation">
      <p>Bienvenue sur notre application de partage de recettes. Ici, vous pouvez trouver et partager des recettes selon vos régimes alimentaires.</p>
    </section>
    <section class="banner">
      <img src="@/assets/banner.jpg" alt="Banner Image">
      <h2>Découvrez et partagez des recettes délicieuses!</h2>
    </section>
    <section class="popular-recipes">
      <h2>Recettes Populaires</h2>
      <div class="recipe-grid">
        <div v-for="recipe in popularRecipes" :key="recipe.id" class="recipe-card">
          <router-link :to="`/recipes/${recipe.id}`">
            <img :src="recipe.image" alt="Recipe Image">
            <h3>{{ recipe.title }}</h3>
            <p>{{ recipe.description }}</p>
          </router-link>
        </div>
      </div>
    </section>
    <section class="newsletter">
      <h2>Abonnez-vous à notre newsletter</h2>
      <form @submit.prevent="subscribe">
        <input type="email" v-model="email" placeholder="Votre adresse email">
        <button type="submit">S'abonner</button>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      popularRecipes: [

      ],
      email: ''
    };
  },
  methods: {
    subscribe() {
      // Subscription logic (e.g., send email to backend)
      alert(`Merci pour votre abonnement, ${this.email}`);
      this.email = '';
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

body {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #f2f2f2;
}

header {
  text-align: center;
  margin: 20px 0;
  background-color: #ff7043;
  color: white;
  padding: 20px 0;
  border-radius: 10px;
}

.banner {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-bottom: 20px;
}

.banner img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.banner h2 {
  position: absolute;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 15px;
  border-radius: 5px;
  bottom: 10%;
  font-size: 1.5rem;
}

.presentation, .popular-recipes, .newsletter {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.presentation {
  text-align: center;
}

.popular-recipes h2, .newsletter h2 {
  text-align: center;
  margin-bottom: 20px;
}

.recipe-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.recipe-card {
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 15px;
  width: 220px;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.recipe-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.recipe-card img {
  width: 100%;
  height: auto;
  border-radius: 5px;
  margin-bottom: 10px;
}

.newsletter {
  text-align: center;
}

.newsletter form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.newsletter input {
  padding: 10px;
  margin-bottom: 10px;
  width: 80%;
  max-width: 400px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.newsletter button {
  padding: 10px 20px;
  background-color: #ff7043;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.newsletter button:hover {
  background-color: #ff5722;
}
</style>
