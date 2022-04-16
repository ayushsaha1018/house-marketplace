import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqkUYUH32bj90bdF63UmxITpEtyHJlL20",
  authDomain: "house-marketplace-app-37c15.firebaseapp.com",
  projectId: "house-marketplace-app-37c15",
  storageBucket: "house-marketplace-app-37c15.appspot.com",
  messagingSenderId: "697699052247",
  appId: "1:697699052247:web:88bd57b9125397f9299e92"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();