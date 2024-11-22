
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-a05df.firebaseapp.com",
  projectId: "reactchat-a05df",
  storageBucket: "reactchat-a05df.appspot.com",
  messagingSenderId: "855367866003",
  appId: "1:855367866003:web:e851b0fc7dbf682a2edf66"
};

const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore();
export const storage=getStorage();