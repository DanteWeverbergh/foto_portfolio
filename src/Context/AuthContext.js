import { createContext, useState, useContext, useEffect } from 'react';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from 'firebase/auth';
import FirebaseContext from './Firebase';
import { db } from '../Libs/Firebase';

export const AuthContext = createContext({});

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const { firebase } = useContext(FirebaseContext);
  const auth = firebase.auth();

  //states
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState();
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (res) => {
      res ? setUser(res) : setUser(null);
      setError('');
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const register = (email, username, password, fullName, role) => {
    setLoading(true);

    createUserWithEmailAndPassword(auth, email, password, fullName)
      .then((res) => {
        console.log(res.user.uid);
      })
      .then(() => {
        const u = firebase.auth().currentUser;
      })
      .then((res) => {})
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const signin = (email, password) => {
    setLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        db.collection('users').doc(res.user.uid).update({
          online: true,
        });
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const logout = async (uid) => {
    await db.collection('users').doc(uid).update({
      online: false,
    });

    signOut(auth);

    //clear localstorage
    localStorage.clear();
  };

  const forgotPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const contextValue = {
    user,
    loading,
    error,
    register,
    signin,
    logout,
    forgotPassword,
  };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
