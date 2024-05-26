// import { useState, useEffect } from 'react';
// import useAuth from "../../hooks/useAuth";
// import { useNavigate } from 'react-router-dom';

// const UpdateProfile = () => {
//   const { user, updateUserProfile } = useAuth();
//   const [displayFirstName, setDisplayFirstName] = useState(user?.displayName || '');
//   const [displayLastName, setDisplayLastName] = useState(user?.displayName || '');
//   const [photoURL, setPhotoURL] = useState(user?.photoURL || '');
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (user) {
//       setDisplayFirstName(user.displayName);
//       setDisplayLastName(user.displayName);
//       setPhotoURL(user.photoURL);
//     }
//   }, [user]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await updateUserProfile(displayFirstName,displayLastName, photoURL);
//       alert('Profile updated successfully');
//       navigate('/');
//     } catch (error) {
//       console.error("Error updating profile: ", error);
//       alert('Failed to update profile');
//     }
//   };

//   return (
//     <div>
//       <h2>Update Profile</h2>
//       <div className="hero min-h-screen">
//         <div className="hero-content flex-col lg:flex-row-reverse">
//           <form onSubmit={handleSubmit} className="card flex-shrink-0 w-full lg:w-[500px] shadow-2xl bg-base-100">
//             <div className="card-body">
//               <div className="flex gap-4">
//                 <div className="form-control w-1/2">
//                   <label className="label">
//                     <span className="label-text">First Name</span>
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="First name"
//                     className="input input-bordered"
//                     value={displayFirstName}
//                     onChange={(e) => setDisplayFirstName(e.target.value)}
//                   />
//                 </div>
//                 <div className="form-control w-1/2">
//                   <label className="label">
//                     <span className="label-text">Last Name</span>
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="Last name"
//                     className="input input-bordered"
//                     value={displayLastName}
//                     onChange={(e) => setDisplayLastName(e.target.value)}
//                   />
//                 </div>
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Photo URL</span>
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Photo URL"
//                   className="input input-bordered"
//                   value={photoURL}
//                   onChange={(e) => setPhotoURL(e.target.value)}
//                 />
//               </div>
//             </div>
//             <button className='btn btn-neutral' type="submit">Save Changes</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UpdateProfile;

import { useState, useEffect } from 'react';
import useAuth from "../../hooks/useAuth";
import { useNavigate } from 'react-router-dom';

const UpdateProfile = () => {
  const { user, updateUserProfile } = useAuth();
  const [displayFirstName, setDisplayFirstName] = useState('');
  const [displayLastName, setDisplayLastName] = useState('');
  const [photoURL, setPhotoURL] = useState(user?.photoURL || '');
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      const [firstName, lastName] = user.displayName ? user.displayName.split(' ') : ['', ''];
      setDisplayFirstName(firstName);
      setDisplayLastName(lastName);
      setPhotoURL(user.photoURL);
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const displayName = `${displayFirstName} ${displayLastName}`;
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
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <form onSubmit={handleSubmit} className="card flex-shrink-0 w-full lg:w-[500px] shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="flex gap-4">
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">First Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="First name"
                    className="input input-bordered"
                    value={displayFirstName}
                    onChange={(e) => setDisplayFirstName(e.target.value)}
                  />
                </div>
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">Last Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Last name"
                    className="input input-bordered"
                    value={displayLastName}
                    onChange={(e) => setDisplayLastName(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  value={photoURL}
                  onChange={(e) => setPhotoURL(e.target.value)}
                />
              </div>
            </div>
            <button className='btn btn-neutral' type="submit">Save Changes</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;


