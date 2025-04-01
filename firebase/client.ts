import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCnHojnAWxFBr73hYTeKojkZWxlV0LLaJ8",
  authDomain: "prepwise-58bf0.firebaseapp.com",
  projectId: "prepwise-58bf0",
  storageBucket: "prepwise-58bf0.firebasestorage.app",
  messagingSenderId: "986058559510",
  appId: "1:986058559510:web:3d78934bc6a9f2ed21e537",
  measurementId: "G-4J7R7BPKME"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
