// Firebase Configuration
// Replace these values with your actual Firebase project configuration
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDq0p0chz0uMh5jqNX7SM0daWxLbYZ1lgI",
  authDomain: "cs-marking-duty.firebaseapp.com",
  databaseURL: "https://cs-marking-duty-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "cs-marking-duty",
  storageBucket: "cs-marking-duty.firebasestorage.app",
  messagingSenderId: "177254184452",
  appId: "1:177254184452:web:5a36ad753c7e867ef9a751"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const app = initializeApp(firebaseConfig);
// Database reference for the marking duty data
const dataRef = database.ref('markingDutyData');

console.log('Firebase initialized successfully');
