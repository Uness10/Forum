
// src/firebase/config.js
import firebase from 'firebase/app' 

import 'firebase/firestore'
import "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAyhp6ugFiPER9cKeqeMhV0_K0xSOHOvmg",
  authDomain: "oakoffee-47eda.firebaseapp.com",
  projectId: "oakoffee-47eda",
  storageBucket: "oakoffee-47eda.appspot.com",
  messagingSenderId: "526546867835",
  appId: "1:526546867835:web:3f5c9d5eeaf6e121c274de"
};


// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// Step 2 : Init the firestore service 
// If we want to do any communication with the firestore db (eg. add documents) 
// we can use projectFirestore variable 
const projectFirestore = firebase.firestore() 
// Initialize Firebase Authentication and get a reference to the service
const projectAuth = firebase.auth();


export { projectAuth ,projectFirestore};
