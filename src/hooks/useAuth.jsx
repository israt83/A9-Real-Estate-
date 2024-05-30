
import { useContext } from 'react';
import { AuthContext } from '../FirebaseProvider/FirebaseProvider';

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
