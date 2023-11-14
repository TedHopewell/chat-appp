// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyCvigLdcLX5BnVWXujxcnso9tMAHYPcc0w",
  authDomain: "chat-app-50314.firebaseapp.com",
  projectId: "chat-app-50314",
  storageBucket: "chat-app-50314.appspot.com",
  messagingSenderId: "488808647886",
  appId: "1:488808647886:web:0ebf276ad390244e33149f",
  measurementId: "G-GDPMXYZN45"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()