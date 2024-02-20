// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfxAXajbj1HNCwKvny9cQnwFPFx8coQcs",
  authDomain: "clone-6e87e.firebaseapp.com",
  projectId: "clone-6e87e",
  storageBucket: "clone-6e87e.appspot.com",
  messagingSenderId: "212873627921",
  appId: "1:212873627921:web:ce80f000e64f2f06d9a4b0",
  measurementId: "G-MB53YT2HZJ",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = app.firestore();
