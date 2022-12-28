// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmqOI2Mejp_aY93exhZhcTpC8_b_VDyQE",
  authDomain: "my-notes-6eb1c.firebaseapp.com",
  projectId: "my-notes-6eb1c",
  storageBucket: "my-notes-6eb1c.appspot.com",
  messagingSenderId: "661559763751",
  appId: "1:661559763751:web:3cd4678f713e8387c5bf02",
  measurementId: "G-LGW1JYC3Z6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);