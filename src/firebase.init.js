// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsj1b6MR8xDMMHEQyDiAlRoH4xfpHEQsM",
  authDomain: "red-onion-foods-6e605.firebaseapp.com",
  projectId: "red-onion-foods-6e605",
  storageBucket: "red-onion-foods-6e605.appspot.com",
  messagingSenderId: "15628971170",
  appId: "1:15628971170:web:c0ca8e888b51082292bbfb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;