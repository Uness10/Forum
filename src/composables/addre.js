const firebase = require('firebase/app');
require('firebase/firestore');

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAEq8Po7wVPK6ciKjJI2eo1RkX2-Jr3fho",
    authDomain: "final-exam-d8504.firebaseapp.com",
    projectId: "final-exam-d8504",
    storageBucket: "final-exam-d8504.appspot.com",
    messagingSenderId: "871415247644",
    appId: "1:871415247644:web:c150f1360658ec3c7dc0d9",
    measurementId: "G-VELWGN5WDX"
  };
firebase.initializeApp(firebaseConfig);

// Access Firestore
const db = firebase.firestore();


const jobsData = [
    {
      "nom": "Spaghetti Carbonara",
      "description": "A delicious and healthy pasta recipe with fresh ingredients.",
      "ingredients": [
        { "nom": "Spaghetti", "quantité": 500, "unité": "g" },
        { "nom": "Pancetta", "quantité": 200, "unité": "g" },
        { "nom": "Parmesan", "quantité": 100, "unité": "g" },
        { "nom": "Eggs", "quantité": 3, "unité": "unité" },
        { "nom": "Salt", "quantité": "au goût", "unité": "" },
        { "nom": "Pepper", "quantité": "au goût", "unité": "" }
      ],
      "instructions": [
        "Cook spaghetti until al dente.",
        "Fry pancetta until crispy.",
        "Mix eggs and parmesan.",
        "Combine spaghetti, pancetta, and egg mixture.",
        "Season with salt and pepper."
      ],
      "temps_preparation": 30,
      "temps_cuisson": 2,
      "regime": "Omnivore",
      "portions": 2,
      "tags": ["rapide", "gluten-free"],
      "image": "https://static01.nyt.com/images/2021/02/14/dining/carbonara-horizontal/carbonara-horizontal-master768-v2.jpg?width=1280&quality=75&auto=webp",
      "authorID": "UyM1kI23yKe6qKyBnwxgtJ5r4oW2"
    },
    {
      "nom": "Margherita Pizza",
      "description": "A classic margherita pizza with fresh basil.",
      "ingredients": [
        { "nom": "Flour", "quantité": 500, "unité": "g" },
        { "nom": "Water", "quantité": 300, "unité": "ml" },
        { "nom": "Yeast", "quantité": 10, "unité": "g" },
        { "nom": "Salt", "quantité": "au goût", "unité": "" },
        { "nom": "Tomato Sauce", "quantité": 200, "unité": "g" },
        { "nom": "Mozzarella", "quantité": 150, "unité": "g" },
        { "nom": "Fresh Basil", "quantité": "au goût", "unité": "" }
      ],
      "instructions": [
        "Mix flour, yeast, and salt.",
        "Add water and knead into dough.",
        "Let it rise for 1 hour.",
        "Spread sauce and add toppings.",
        "Bake at 220°C for 15 minutes."
      ],
      "temps_preparation": 90,
      "temps_cuisson": 2,
      "regime": "Omnivore",
      "portions": 2,
      "tags": ["rapide", "gluten-free"],
      "image": "https://au.ooni.com/cdn/shop/articles/20220211142645-margherita-9920.jpg?crop=center&height=915&v=1662539926&width=1200",
      "authorID": "UyM1kI23yKe6qKyBnwxgtJ5r4oW2"
    },
    {
      "nom": "Chicken Curry",
      "description": "A spicy and flavorful chicken curry with coconut milk.",
      "ingredients": [
        { "nom": "Chicken Breast", "quantité": 500, "unité": "g" },
        { "nom": "Coconut Milk", "quantité": 200, "unité": "ml" },
        { "nom": "Curry Paste", "quantité": 100, "unité": "g" },
        { "nom": "Onion", "quantité": 1, "unité": "unité" },
        { "nom": "Garlic Cloves", "quantité": 2, "unité": "unité" },
        { "nom": "Ginger", "quantité": "au goût", "unité": "" },
        { "nom": "Salt", "quantité": "au goût", "unité": "" },
        { "nom": "Pepper", "quantité": "au goût", "unité": "" }
      ],
      "instructions": [
        "Fry onion, garlic, and ginger.",
        "Add chicken and cook until browned.",
        "Add curry paste and coconut milk.",
        "Simmer for 20 minutes.",
        "Season with salt and pepper."
      ],
      "temps_preparation": 40,
      "temps_cuisson": 2,
      "regime": "Omnivore",
      "portions": 2,
      "tags": ["rapide", "gluten-free"],
      "image": "https://i.pinimg.com/474x/8b/b2/e2/8bb2e282ea0c47dc4f0e89c4befdc6cf.jpg",
      "authorID": "UyM1kI23yKe6qKyBnwxgtJ5r4oW2"
    },
    {
      "nom": "Vegetarian Pizza",
      "description": "A vegetarian pizza loaded with fresh vegetables.",
      "ingredients": [
        { "nom": "Flour", "quantité": 500, "unité": "g" },
        { "nom": "Water", "quantité": 300, "unité": "ml" },
        { "nom": "Yeast", "quantité": 10, "unité": "g" },
        { "nom": "Salt", "quantité": "au goût", "unité": "" },
        { "nom": "Tomato Sauce", "quantité": 200, "unité": "g" },
        { "nom": "Mozzarella", "quantité": 150, "unité": "g" },
        { "nom": "Bell Peppers", "quantité": "au goût", "unité": "" },
        { "nom": "Onions", "quantité": "au goût", "unité": "" },
        { "nom": "Mushrooms", "quantité": "au goût", "unité": "" }
      ],
      "instructions": [
        "Mix flour, yeast, and salt.",
        "Add water and knead into dough.",
        "Let it rise for 1 hour.",
        "Spread sauce and add toppings.",
        "Bake at 220°C for 15 minutes."
      ],
      "temps_preparation": 90,
      "temps_cuisson": 2,
      "regime": "Omnivore",
      "portions": 2,
      "tags": ["rapide", "gluten-free"],
      "image": "https://www.pinterest.com/pin/961096376710347626/",
      "authorID": "UyM1kI23yKe6qKyBnwxgtJ5r4oW2"
    },
    {
      "nom": "Quinoa Salad",
      "description": "A refreshing and healthy quinoa salad.",
      "ingredients": [
        { "nom": "Quinoa", "quantité": 200, "unité": "g" },
        { "nom": "Cherry Tomatoes", "quantité": 100, "unité": "g" },
        { "nom": "Cucumber", "quantité": 1, "unité": "unité" },
        { "nom": "Red Onion", "quantité": 1, "unité": "unité" },
        { "nom": "Feta Cheese", "quantité": 50, "unité": "g" },
        { "nom": "Lemon Juice", "quantité": "au goût", "unité": "" },
        { "nom": "Olive Oil", "quantité": "au goût", "unité": "" },
        { "nom": "Salt", "quantité": "au goût", "unité": "" },
        { "nom": "Pepper", "quantité": "au goût", "unité": "" }
      ],
      "instructions": [
        "Cook quinoa and let it cool.",
        "Chop vegetables and feta.",
        "Mix quinoa, vegetables, and feta.",
        "Add lemon juice, olive oil, salt, and pepper."
      ],
      "temps_preparation": 20,
      "temps_cuisson": 2,
      "regime": "Omnivore",
      "portions": 2,
      "tags": ["rapide", "gluten-free"],
      "image": "https://www.pinterest.com/pin/473933560800805316/",
      "authorID": "UyM1kI23yKe6qKyBnwxgtJ5r4oW2"
    },
    {
      "nom": "Beef Stew",
      "description": "A hearty beef stew with root vegetables.",
      "ingredients": [
        { "nom": "Beef", "quantité": 500, "unité": "g" },
        { "nom": "Carrots", "quantité": 3, "unité": "unité" },
        { "nom": "Potatoes", "quantité": 2, "unité": "unité" },
        { "nom": "Onion", "quantité": 1, "unité": "unité" },
        { "nom": "Garlic Cloves", "quantité": 2, "unité": "unité" },
        { "nom": "Beef Broth", "quantité": 500, "unité": "ml" },
        { "nom": "Salt", "quantité": "au goût", "unité": "" },
        { "nom": "Pepper", "quantité": "au goût", "unité": "" }
      ],
      "instructions": [
        "Brown the beef.",
        "Add chopped vegetables and garlic.",
        "Pour in beef broth.",
        "Simmer for 1 hour.",
        "Season with salt and pepper."
      ],
      "temps_preparation": 90,
      "temps_cuisson": 2,
      "regime": "Omnivore",
      "portions": 2,
      "tags": ["rapide", "gluten-free"],
      "image": "https://www.pinterest.com/pin/279012139405740929/",
      "authorID": "UyM1kI23yKe6qKyBnwxgtJ5r4oW2"
    }
  ];
  

// Function to add data to Firestore
const addJobsToFirestore = async (jobsData) => {
  try {
    // Loop through each job and add it to Firestore
    for (const job of jobsData) {
      // Use set with merge to add or update the document
      await db.collection('Recipes').add(job);
    }
    console.log("Jobs added to Firestore successfully!");
  } catch (error) {
    console.error("Error adding jobs to Firestore: ", error);
  }
};

// Call the function to add jobs data to Firestore
addJobsToFirestore(jobsData);
