// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-625d7.firebaseapp.com",
  projectId: "mern-estate-625d7",
  storageBucket: "mern-estate-625d7.appspot.com",
  messagingSenderId: "280111730340",
  appId: "1:280111730340:web:313f0fa23b91d7ffcd2031"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);