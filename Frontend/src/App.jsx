import React from 'react'
import Home from './Home/Home'
import Signup from './Componets/Signup'
import Login from './Componets/Login'
import { useAuth } from './context/AuthProvider'
import {Routes,Route, Navigate} from 'react-router-dom'

const App = () => {
  const {authUser,setAuthUser} = useAuth();
  console.log(authUser);
  return (
    <>
      <Routes>
        <Route  path='/' element={authUser ? (<Home/>):(<Navigate to={'/Login'}/>)}/>
        <Route path='/Login' element={authUser ? <Navigate to={'/'}/> : <Login/>}/>
        <Route path='/Signup' element={authUser ? <Navigate to={'/ '}/> : <Signup/>}/>
      </Routes>
    
    </>
  )
}

export default App
