// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your Firebase config (use yours)
const firebaseConfig = {
  apiKey: "AIzaSyCsdAkevD6ivGMdanlqbjY1GkcPHXinG8U",
  authDomain: "space-42c54.firebaseapp.com",
  projectId: "space-42c54",
  storageBucket: "space-42c54.firebasestorage.app",
  messagingSenderId: "1057123886701",
  appId: "1:1057123886701:web:ff9c4ab162b51b5ef54164",
  measurementId: "G-CW4FBT177M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Export Auth (for login/register)
export const auth = getAuth(app);
