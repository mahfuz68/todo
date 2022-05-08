/* eslint-disable prettier/prettier */
import {
    createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GoogleAuthProvider, onAuthStateChanged,
    signInWithEmailAndPassword, signInWithPopup, signOut,
    updateProfile
} from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';
import '../firebase';


const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const auth = getAuth();
        const unSubscribe = onAuthStateChanged( auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        })

        return unSubscribe;
    }, []);

    // signUp function
     const signUp = async (email, password, userName) => {
        const auth = getAuth();
        await createUserWithEmailAndPassword(auth, email, password);

        // update profile
        await updateProfile(auth.currentUser, {
            displayName: userName
        });

        const user = auth.currentUser;
        setCurrentUser({ ...user });
    };

    // login with google
    const loginWithGoogle = async () => {

        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider);
        const user = auth.currentUser;
        setCurrentUser({ ...user });    
    }

    // login with facebook
    const loginWithFacebook = async () => {
        const auth = getAuth()
        const provider = new FacebookAuthProvider();
        await signInWithPopup(auth, provider);
        const user = auth.currentUser;
        setCurrentUser({ ...user });
    }


    // login function
    const login = (email, password) => {
        const auth = getAuth();
        return signInWithEmailAndPassword(auth, email, password);
    };

    // logout function
    const logOut = () => {
        const auth = getAuth();
        return signOut(auth);
    };

    // eslint-disable-next-line react/jsx-no-constructed-context-values
    const value = {
        login,
        currentUser,
        signUp,
        logOut,
        loginWithGoogle,
        loginWithFacebook
    };
    return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}
