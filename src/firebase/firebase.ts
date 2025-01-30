// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5GueaA05HS2fxPco7PPN60GWO-mZPquc",
  authDomain: "stardown-f48ce.firebaseapp.com",
  projectId: "stardown-f48ce",
  storageBucket: "stardown-f48ce.firebasestorage.app",
  messagingSenderId: "942443547675",
  appId: "1:942443547675:web:5087a5bb1ea208d655fcbe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore, app };