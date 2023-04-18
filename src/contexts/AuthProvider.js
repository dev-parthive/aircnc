import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../Firebase/Firebase.config';
export const AuthContext = createContext()
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()
const AuthProvider = ({children}) => {
  // state for sotre user 
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)
    


  //1.create user 
const createUser = (email, password)=>{
  setLoading(true)
  return createUserWithEmailAndPassword(auth, email, password)
}
// 2.update name 
const  updateUser = (name, photo)=>{
  setLoading(true)
  return updateProfile(auth.currentUser , {
    displayName: name,
    photoURL: photo
  })
}
// 3. Email verify 
const verifyEmail = ()=>{
  setLoading(true)
  return sendEmailVerification(auth.currentUser)
}
//4. logout 
const logout = ()=>{
  setLoading(true)
  localStorage.removeItem('aircnc-token')
  return signOut(auth)
}
  //GoogleSignIn
  const signInWithGoogle = ()=>{
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }
  //Github sign in 
  const signInWithGithub = () =>{
    setLoading(true)
    return signInWithPopup(auth, githubProvider)
  }
//5. observer (je user login kora ase kina check korar jonno)
useEffect(()=>{
  setLoading(true)
  //this part will execute once the component is mounted.
  const unSubscribe = onAuthStateChanged(auth, currentUser => {
    console.log(currentUser)
    setUser(currentUser)
    setLoading(false)

  });
  console.log(user);
  return ()=> {
     //this part will execute once the component is unmounted.
    return unSubscribe
  }
}, [])
// 6. Login
const login =(email, password)=>{

  return signInWithEmailAndPassword(auth, email, password)
}
// 7. reset password link 
const resetPassword = (email) => {
  setLoading(true)
  return sendPasswordResetEmail(auth, email)
}
    
    
    const authInfo = {
        user, 
        setUser,
        createUser, 
        signInWithGoogle,
        updateUser, 
        verifyEmail, 
        logout, 
        login, 
        signInWithGithub, 
        loading, 
        setLoading, 
        resetPassword
    };
    return (
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    );
};

export default AuthProvider;