import React, { useState } from 'react'
import { use } from 'react';
import { BiLogOut } from "react-icons/bi";
import axios from 'axios'
import Cookies from 'js.cookie'


const Logout = () => {
  const [Loading,setLoading] = useState();
  const handelOnClick = async() =>{
      setLoading(true)
      try {
        const response = await axios.post('/api/user/Logout')
        localStorage.removeItem("messenger")
        Cookies.remove("jwt");
        setLoading(false);
        alert("logout successfully")
      } catch (error) {
        console.log(error)
      }
  }
  return (
    <>
    
    <div className='w-[4%] bg-slate-950 text-white flex flex-col justify-end'>

        <div className='p-2'>
         
            <div className='flex space-x-3'>
            <button onClick={handelOnClick}><BiLogOut className='text-5xl p-2 hover:bg-gray-600 rounded-lg duration-300'></BiLogOut></button>
            </div>
          
        </div>

    </div>
    </>
  )
}

export default Logout
