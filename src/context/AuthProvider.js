import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setloading] = useState(true);

    const createUser = (email, password) => {
        setloading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setloading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUser = (userInfo) => {
        return updateProfile(user, userInfo)
    }

    const logOut = () => {
        setloading(true);
        return signOut(auth);
    }

    //observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('User observing');
            setUser(currentUser);
            setloading(false);
        });

        return () => unsubscribe();
    })

    const authInfo = {
        createUser,
        signIn,
        updateUser,
        logOut,
        user,
        loading

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;