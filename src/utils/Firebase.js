// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJ0p-MAAtnplRh-HTHBen8ZVrYXtPx6o4",
  authDomain: "netflix-gpt-bc350.firebaseapp.com",
  projectId: "netflix-gpt-bc350",
  storageBucket: "netflix-gpt-bc350.appspot.com",
  messagingSenderId: "202289171570",
  appId: "1:202289171570:web:29c55e9e4cb06d531446eb",
  measurementId: "G-YRFJR1F1BK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();