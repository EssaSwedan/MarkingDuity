// Firebase Configuration
// Firebase v8 (legacy) syntax - compatible with script tags in HTML
const firebaseConfig = {
  apiKey: "AIzaSyDq0p0chz0uMh5jqNX7SM0daWxLbYZ1lgI",
  authDomain: "cs-marking-duty.firebaseapp.com",
  databaseURL: "https://cs-marking-duty-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "cs-marking-duty",
  storageBucket: "cs-marking-duty.firebasestorage.app",
  messagingSenderId: "177254184452",
  appId: "1:177254184452:web:5a36ad753c7e867ef9a751"
};

// Initialize Firebase (v8 legacy syntax)
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Database reference for the marking duty data
const dataRef = database.ref('markingDutyData');

console.log('Firebase initialized successfully');
console.log('Database URL:', firebaseConfig.databaseURL);
