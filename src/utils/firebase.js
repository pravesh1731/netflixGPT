// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABU7Rj0oYN37WfbHxdvjThrGWn8ILFxiY",
  authDomain: "attenproject-ff5b6.firebaseapp.com",
  projectId: "attenproject-ff5b6",
  storageBucket: "attenproject-ff5b6.firebasestorage.app",
  messagingSenderId: "457280506613",
  appId: "1:457280506613:web:94d0462b26f5ead03893bc",
  measurementId: "G-HRF4K9754X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);