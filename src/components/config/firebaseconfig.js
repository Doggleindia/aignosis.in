// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDQTcDMpdeo9st_HIScjisId9u3xIddhTM',
  authDomain: 'aignosis-website.firebaseapp.com',
  projectId: 'aignosis-website',
  storageBucket: 'aignosis-website.firebasestorage.app',
  messagingSenderId: '524868804797',
  appId: '1:524868804797:web:c745ed3f71cf567fded7d4',
  measurementId: 'G-R3RYLDXN2L',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
