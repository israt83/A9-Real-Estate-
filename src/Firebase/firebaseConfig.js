
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCU9vULIzYfTfjr97ajHtTTi8fRQ0JYxg0",
  authDomain: "react-realestate-auth.firebaseapp.com",
  projectId: "react-realestate-auth",
  storageBucket: "react-realestate-auth.appspot.com",
  messagingSenderId: "513873604673",
  appId: "1:513873604673:web:da92d702c56bca179316c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;