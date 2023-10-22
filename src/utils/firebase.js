// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_s-hAYlCvFkJnc9s7TE3XjUg2fEJlD0s",
  authDomain: "netflixgpt-24c8b.firebaseapp.com",
  databaseURL: "https://netflixgpt-24c8b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "netflixgpt-24c8b",
  storageBucket: "netflixgpt-24c8b.appspot.com",
  messagingSenderId: "1073674411680",
  appId: "1:1073674411680:web:2de283de4d38053ee0b3c5",
  measurementId: "G-WRW0JBMCTM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();