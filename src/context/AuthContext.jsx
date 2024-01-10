import { onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';
import { database, provider } from '../utils/FirebaseConfig';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

	const [user, setUser] = useState({});
	const [email, setEmail] = useState();
	const [password, setPassword] = useState('');

	const googleSignIn = () => {
		try {
			signInWithPopup(database, provider).then((data) => console.log(data))
		} catch (e) {
			alert(e.message);
		}
	}

	const EmailAndPasswordSignIn = (e) => {
		e.preventDefault();

		signInWithEmailAndPassword(database, email, password).then((data) => {
			console.log(data);
		}).catch(err => console.log(err.message))
	}

	const logOut = () => {
		signOut(database);
	}

	useEffect(() => {
    const unsubscribe = onAuthStateChanged(database, (currentUser) => {
      setUser(currentUser);
      console.log('User', currentUser)
    });
    return () => {
      unsubscribe();
    };
  }, []);

	return (
		<AuthContext.Provider value={{ googleSignIn, logOut, user, EmailAndPasswordSignIn, setEmail, setPassword }}>
			{children}
		</AuthContext.Provider>
	)
}

export const UserAuth = () => {
  return useContext(AuthContext);
};