import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"; // Import Firebase Storage

const firebaseConfig = {
  apiKey: "AIzaSyBKun82092pA3M7nAsa7SoQcQonbDpm8qY",
  authDomain: "outlaws-2993d.firebaseapp.com",
  projectId: "outlaws-2993d",
  storageBucket: "outlaws-2993d.appspot.com",
  messagingSenderId: "1055738556301",
  appId: "1:1055738556301:web:210a12f487639cbdf697c4",
  measurementId: "G-NY3W04NM7G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app); // Initialize Firebase Storage
