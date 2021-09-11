// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFXqgrxAWbXralUG1hcvyZz4hc-jKgOJc",
  authDomain: "who-tofollow.firebaseapp.com",
  projectId: "who-tofollow",
  storageBucket: "who-tofollow.appspot.com",
  messagingSenderId: "352628262432",
  appId: "1:352628262432:web:6c90849d878065ef819e45",
  measurementId: "G-ES5T0RKZB4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);