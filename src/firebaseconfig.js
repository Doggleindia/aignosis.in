// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDQTcDMpdeo9st_HIScjisId9u3xIddhTM",
  authDomain: "aignosis-website.firebaseapp.com",
  projectId: "aignosis-website",
  storageBucket: "aignosis-website.firebasestorage.app",
  messagingSenderId: "524868804797",
  appId: "1:524868804797:web:c745ed3f71cf567fded7d4",
  measurementId: "G-R3RYLDXN2L"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

