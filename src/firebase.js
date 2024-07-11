// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-b521a.firebaseapp.com",
  projectId: "real-estate-b521a",
  storageBucket: "real-estate-b521a.appspot.com",
  messagingSenderId: "508692744389",
  appId: "1:508692744389:web:2b27c8b2c865564a1088ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app);
export {app};