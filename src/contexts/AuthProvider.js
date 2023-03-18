import React, { createContext, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile} from 'firebase/auth'
import app from '../Firebase/Firebase.config';
export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {
  // state for sotre user 
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    


  //1.create user 
const createUser = (email, password)=>{
  return createUserWithEmailAndPassword(auth, email, password)
}
// 2.update name 
const  updateUser = (name, photo)=>{
  return updateProfile(auth.currentUser , {
    displayName: name,
    photoURL: photo
  })
}
// 3. Email verify 
const verifyEmail = ()=>{
  return sendEmailVerification(auth.currentUser)
}


    
    
    const authInfo = {
        user, 
        setUser, 
        createUser, 
        updateUser, 
        verifyEmail
    }
    return (
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    );
};

export default AuthProvider;