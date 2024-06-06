
// src/firebase/config.js
import firebase from 'firebase/app' 

import 'firebase/firestore'
import "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAEq8Po7wVPK6ciKjJI2eo1RkX2-Jr3fho",
  authDomain: "final-exam-d8504.firebaseapp.com",
  projectId: "final-exam-d8504",
  storageBucket: "final-exam-d8504.appspot.com",
  messagingSenderId: "871415247644",
  appId: "1:871415247644:web:c150f1360658ec3c7dc0d9",
  measurementId: "G-VELWGN5WDX"
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
