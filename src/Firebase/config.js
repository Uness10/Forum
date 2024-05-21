
// src/firebase/config.js
import firebase from 'firebase/app' 

import 'firebase/firestore'
import "firebase/auth";


const firebaseConfig = {

  apiKey: "AIzaSyAGyDrr2C3ABHLmrn57yRlVucXwZTbbD5k",
  authDomain: "tp6forum.firebaseapp.com",
  projectId: "tp6forum",
  storageBucket: "tp6forum.appspot.com",

  messagingSenderId: "166070398350",

  appId: "1:166070398350:web:07f8988b905590d532c8df"

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
