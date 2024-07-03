// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import * as firebaseAuth from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBG08uPaH43fEbZCdb4Ehw1fMcmYC-95So",
  authDomain: "stripe-checkout-69d82.firebaseapp.com",
  projectId: "stripe-checkout-69d82",
  storageBucket: "stripe-checkout-69d82.appspot.com",
  messagingSenderId: "1027334031786",
  appId: "1:1027334031786:web:5672399d95a8ae670c03d3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = firebaseAuth.initializeAuth(app, {
  persistence: firebaseAuth.getReactNativePersistence(ReactNativeAsyncStorage),
});

const db = getFirestore(app);

export { app, auth, db };
