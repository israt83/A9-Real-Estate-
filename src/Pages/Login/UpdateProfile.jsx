import  { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const UpdateProfile = () => {
  const [user, setUser] = useState(null);
  const [name, setName] = useState('');
  const [photoURL, setPhotoURL] = useState('');

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        // Retrieve user data from Firestore
        firebase.firestore().collection('users').doc(currentUser.uid).get()
          .then((doc) => {
            if (doc.exists) {
              const userData = doc.data();
              setName(userData.name);
              setPhotoURL(userData.photoURL);
            }
          })
          .catch((error) => {
            console.error('Error getting user data:', error);
          });
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSaveChanges = () => {
    // Update user profile using Firebase's updateProfile method
    user.updateProfile({
      displayName: name,
      photoURL: photoURL,
    }).then(() => {
      // Update user data in Firestore
      firebase.firestore().collection('users').doc(user.uid).update({
        name: name,
        photoURL: photoURL,
      }).then(() => {
        console.log('User profile updated successfully');
      }).catch((error) => {
        console.error('Error updating user data:', error);
      });
    }).catch((error) => {
      console.error('Error updating user profile:', error);
    });
  };

  if (!user) {
    return <div>Please login to view your profile</div>;
  }

  return (
    <>
      <h2>Your Profile</h2>
      <form>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Photo URL:
          <input
            type="text"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleSaveChanges}>Save Changes</button>
      </form>
    </>
  );
};

export default UpdateProfile;
