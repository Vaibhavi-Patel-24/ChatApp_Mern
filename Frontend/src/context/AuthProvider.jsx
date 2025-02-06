import React, { createContext, useState } from 'react'
import Cookies from 'js.cookie'
import { useContext } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const initalUserState = Cookies.get("jwt") || localStorage.getItem("messenger")
    const [authUser,setAuthUser] = useState(initalUserState ? JSON.parse(initalUserState) : undefined);
  return (
    <>
      <AuthContext.Provider value={{authUser,setAuthUser}}>
        {children}
      </AuthContext.Provider>
    </>
  )
}

export default AuthProvider

export const useAuth = () => useContext(AuthContext)

