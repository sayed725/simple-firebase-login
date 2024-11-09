// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1HHebvcOeIdh23Lii-0DNQT8VLz20oNs",
  authDomain: "simple-firebase-2-edacc.firebaseapp.com",
  projectId: "simple-firebase-2-edacc",
  storageBucket: "simple-firebase-2-edacc.firebasestorage.app",
  messagingSenderId: "531825939149",
  appId: "1:531825939149:web:c9c6815fc0030da2d24f84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)