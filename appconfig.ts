import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
export const thegraffity_App = initializeApp(firebaseConfig);
export const thegraffity_Auth = getAuth(thegraffity_App)
const analytics = getAnalytics(thegraffity_App);