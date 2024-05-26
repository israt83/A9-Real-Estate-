// import  { useContext } from 'react';
// import { AuthContext } from '../FirebaseProvider/FirebaseProvider';

// const useAuth = () => {

//     const all = useContext(AuthContext)
//     return all;
// };

// export default useAuth;
// useAuth.jsx
import { useContext } from 'react';
import { AuthContext } from '../FirebaseProvider/FirebaseProvider';

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
