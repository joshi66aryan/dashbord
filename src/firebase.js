import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "dashboard-7c72d.firebaseapp.com",
  projectId: "dashboard-7c72d",
  storageBucket: "dashboard-7c72d.appspot.com",
  messagingSenderId: "862230246183",
  appId: "1:862230246183:web:6b68aa5ee4c1b1cd50ef02"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 
export const auth = getAuth();
export const storage = getStorage(app);
