// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import AsyncStorage from "@react-native-async-storage/async-storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATewUPqb7mxILhzQZNZuS0_gWjjRdI7OQ",
  authDomain: "threads-clone-f7ed0.firebaseapp.com",
  projectId: "threads-clone-f7ed0",
  storageBucket: "threads-clone-f7ed0.firebasestorage.app",
  messagingSenderId: "212244652192",
  appId: "1:212244652192:web:675a900ddd0008a561e9c5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

// 🔐 Initialize auth with persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };
