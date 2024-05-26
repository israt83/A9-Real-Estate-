// import  { useState, useEffect } from 'react';
// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore';

// const UpdateProfile = () => {
//   const [user, setUser] = useState(null);
//   const [name, setName] = useState('');
//   const [photoURL, setPhotoURL] = useState('');

//   useEffect(() => {
//     const unsubscribe = firebase.auth().onAuthStateChanged((currentUser) => {
//       if (currentUser) {
//         setUser(currentUser);
//         // Retrieve user data from Firestore
//         firebase.firestore().collection('users').doc(currentUser.uid).get()
//           .then((doc) => {
//             if (doc.exists) {
//               const userData = doc.data();
//               setName(userData.name);
//               setPhotoURL(userData.photoURL);
//             }
//           })
//           .catch((error) => {
//             console.error('Error getting user data:', error);
//           });
//       } else {
//         setUser(null);
//       }
//     });

//     return () => unsubscribe();
//   }, []);

//   const handleSaveChanges = () => {
//     // Update user profile using Firebase's updateProfile method
//     user.updateProfile({
//       displayName: name,
//       photoURL: photoURL,
//     }).then(() => {
//       // Update user data in Firestore
//       firebase.firestore().collection('users').doc(user.uid).update({
//         name: name,
//         photoURL: photoURL,
//       }).then(() => {
//         console.log('User profile updated successfully');
//       }).catch((error) => {
//         console.error('Error updating user data:', error);
//       });
//     }).catch((error) => {
//       console.error('Error updating user profile:', error);
//     });
//   };

//   if (!user) {
//     return <div>Please login to view your profile</div>;
//   }

//   return (
//     <>
//       <h2>Your Profile</h2>
//       <form>
//         <label>
//           Name:
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </label>
//         <br />
//         <label>
//           Photo URL:
//           <input
//             type="text"
//             value={photoURL}
//             onChange={(e) => setPhotoURL(e.target.value)}
//           />
//         </label>
//         <br />
//         <button type="button" onClick={handleSaveChanges}>Save Changes</button>
//       </form>
//     </>
//   );
// };

// export default UpdateProfile;



// const UpdateProfile = () => {
//     return (
//         <div>
//             <h2>This is UpdateProfile section</h2>
//         </div>
//     );
// };

// export default UpdateProfile;

// UpdateProfile.jsx
import  { useState, useEffect } from 'react';
// import { useAuth } from "../../hooks/useAuth"; 
// Ensure this hook provides user and updateUserProfile methods
import useAuth from "../../hooks/useAuth";
import { useNavigate } from 'react-router-dom';

const UpdateProfile = () => {
  const { user, updateUserProfile } = useAuth();
  const [displayName, setDisplayName] = useState(user?.displayName || '');
  const [photoURL, setPhotoURL] = useState(user?.photoURL || '');
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setDisplayName(user.displayName);
      setPhotoURL(user.photoURL);
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUserProfile(displayName, photoURL);
      alert('Profile updated successfully');
      navigate('/');
    } catch (error) {
      console.error("Error updating profile: ", error);
      alert('Failed to update profile');
    }
  };

  return (
    <div>
      <h2>Update Profile</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </div>
        <div>
          <label>Photo URL:</label>
          <input
            type="text"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
          />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default UpdateProfile;
