//DONOT SHARE FIREBASE CONFIG PUBLICALLY

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDluLG3wgT_FR8JOZMyTYcJO63urlJfwNc",
  authDomain: "simple-firebase-auth2-1a230.firebaseapp.com",
  projectId: "simple-firebase-auth2-1a230",
  storageBucket: "simple-firebase-auth2-1a230.firebasestorage.app",
  messagingSenderId: "963080459281",
  appId: "1:963080459281:web:ff69e706ec91a1b6310db0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth =getAuth(app);