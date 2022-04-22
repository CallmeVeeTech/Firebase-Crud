import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const app = initializeApp({
  apiKey: "AIzaSyBmKfGdjvL9GCQ3UURPKxu0YZKVKiPy038",
  authDomain: "pay-app-e3a39.firebaseapp.com",
  projectId: "pay-app-e3a39",
  storageBucket: "pay-app-e3a39.appspot.com",
  messagingSenderId: "726277437628",
  appId: "1:726277437628:web:3badc6f844c300c971f8b9",
});

const db = getFirestore(app);
export { db };
