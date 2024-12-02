import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import auth from '../firebase.init';


const  AuthContext =createContext(null)
const AuthProvider = ({children}) => {
    const [users, setUsers] =useState(null)
    const [loading, setLoading] =useState(true)

    // creat new user
    const createUser =(email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // login
    const signInUser =(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

const authInfo={
users, setUsers, loading, createUser, signInUser
}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export  {AuthProvider, AuthContext};