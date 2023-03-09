import React, { createContext, useState } from 'react';

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState("parthive")
    const name = "parthive"
    const authInfo = {
        user, 
        setUser, 
        name
    }
    return (
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>  

    );
};

export default AuthProvider;