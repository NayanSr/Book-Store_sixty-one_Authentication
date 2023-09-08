// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8trK6PLKQdNtqDI6QM-WXeV53AauvSm8",
  authDomain: "book-store-with-firebase.firebaseapp.com",
  projectId: "book-store-with-firebase",
  storageBucket: "book-store-with-firebase.appspot.com",
  messagingSenderId: "93208218574",
  appId: "1:93208218574:web:c4d9bd7eabd8dca1b9799f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
