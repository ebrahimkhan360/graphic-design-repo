// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhrUKAbKMuhua9mbaDiXl3F9eAMTtw5Xk",
  authDomain: "graphic-design-e47b1.firebaseapp.com",
  projectId: "graphic-design-e47b1",
  storageBucket: "graphic-design-e47b1.appspot.com",
  messagingSenderId: "890738711057",
  appId: "1:890738711057:web:ef9e9f47d9b3b10a312fb0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;