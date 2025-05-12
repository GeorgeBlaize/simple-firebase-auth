// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-xrmU-K6iroUS383W6nRFYUwAZQ9bZF8",
  authDomain: "simple-firebase-auth-af364.firebaseapp.com",
  projectId: "simple-firebase-auth-af364",
  storageBucket: "simple-firebase-auth-af364.firebasestorage.app",
  messagingSenderId: "958467044567",
  appId: "1:958467044567:web:117b6db2a0e99d607dec92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);