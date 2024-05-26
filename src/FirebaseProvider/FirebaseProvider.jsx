// import {
  
//   GithubAuthProvider,
//   GoogleAuthProvider,
  
//   createUserWithEmailAndPassword,
//   onAuthStateChanged,
//   sendPasswordResetEmail,
//   signInWithEmailAndPassword,
//   signInWithPopup,
//   signOut,
//   updateProfile,
// } from "firebase/auth";



// import  { createContext, useEffect, useState } from "react";
// import auth from "../Firebase/firebaseConfig";

// export const AuthContext = createContext(null);

// // social auth providers
// const googleProvider = new GoogleAuthProvider();
// const githubProvider = new GithubAuthProvider();


// const FirebaseProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);
    
//   // create user
//   const createUser = (email, password) => {
//     setLoading(true);
//     return createUserWithEmailAndPassword(auth, email, password);
//   };
    
//     // update user profile
//     const updateUserProfile = (name, image) => {
//         return updateProfile(auth.currentUser, {
//             displayName: name,
//             photoURL: image
//           })
          
//     }

//   // sign in user
//   const signInUser = (email, password) => {
//     setLoading(true);
//     return signInWithEmailAndPassword(auth, email, password);
//   };

//   // google login
//   const googleLogin = () => {
//     setLoading(true);
//     return signInWithPopup(auth, googleProvider);
//   };

//   // github login
//   const githubLogin = () => {
//     setLoading(true);
//     return signInWithPopup(auth, githubProvider);
//   };


//   //logout
//   const logout = () => {
//     setUser(null);
//     signOut(auth);
//   };
    
    
//     // send reset password request
//     const resetPass = (email) => {
//         return sendPasswordResetEmail(auth, email)
//     }

//   // observer
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setUser(user);
//         setLoading(false);
//       }
//     });
//     return () => unsubscribe();
//   }, []);

//   const allValues = {
//     createUser,
//     signInUser,
//     googleLogin,
//     githubLogin,
//     logout,
//     user,
  
//       updateUserProfile,
//       loading,
//       resetPass
//   };
//   return (
//     <AuthContext.Provider value={allValues}>{children}</AuthContext.Provider>
//   );
// };

// export default FirebaseProvider;

// FirebaseProvider.jsx
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebaseConfig";

export const AuthContext = createContext(null);

// Social auth providers
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Update user profile
  const updateUserProfile = (name, image) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };

  // Sign in user
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Google login
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Github login
  const githubLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  // Logout
  const logout = () => {
    setUser(null);
    return signOut(auth);
  };

  // Send reset password request
  const resetPass = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // Observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const allValues = {
    createUser,
    signInUser,
    googleLogin,
    githubLogin,
    logout,
    user,
    updateUserProfile,
    loading,
    resetPass,
  };

  return (
    <AuthContext.Provider value={allValues}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default FirebaseProvider;
