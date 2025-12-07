// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCYpWip7LTYi98AmVcaVs_F_JfN2zXU_wI",
  authDomain: "marketing-legal-5ede1.firebaseapp.com",
  projectId: "marketing-legal-5ede1",
  storageBucket: "marketing-legal-5ede1.appspot.com",
  messagingSenderId: "191729203352",
  appId: "1:191729203352:web:762f7129d7823b621c38ed",
  measurementId: "G-P8FLVCY1R4"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);

