// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "jaggadalal-42d8b.firebaseapp.com",
  projectId: "jaggadalal-42d8b",
  storageBucket: "jaggadalal-42d8b.appspot.com",
  messagingSenderId: "617338281636",
  appId: "1:617338281636:web:97a76381f7e90a0e3f1031"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);