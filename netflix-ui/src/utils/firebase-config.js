// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyyuxgzZWKUXb5PIh43g0dWPq-hTOEFcY",
  authDomain: "netflix-ui-7b9fb.firebaseapp.com",
  projectId: "netflix-ui-7b9fb",
  storageBucket: "netflix-ui-7b9fb.appspot.com",
  messagingSenderId: "779679739729",
  appId: "1:779679739729:web:a7fa2e2c1e61c7b307ad70",
  measurementId: "G-QRT8FC84B1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const firebaseAuth = getAuth(app);