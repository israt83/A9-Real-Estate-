//  import { initializeApp } from "firebase/app";
//  import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyDpdyTkl9jpS_2GE1JHDJB_xhhaxHVK8jE",
//   authDomain: "glasses-authentication.firebaseapp.com",
//   projectId: "glasses-authentication",
//   storageBucket: "glasses-authentication.appspot.com",
//   messagingSenderId: "233349205700",
//   appId: "1:233349205700:web:5d00f4eff4684c90c38391"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Firebase Authentication and get a reference to the service
// const auth = getAuth(app);
// export default auth;


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZgtgUoARFuN2Fl4It0CYVXfI5sBkZWpc",
  authDomain: "react-cherry-hotel-auth.firebaseapp.com",
  projectId: "react-cherry-hotel-auth",
  storageBucket: "react-cherry-hotel-auth.appspot.com",
  messagingSenderId: "763194188521",
  appId: "1:763194188521:web:38a1b484afca2f3a720678"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;