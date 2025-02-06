import React, { useEffect, useState } from 'react'
import Cookies from 'js.cookie'
import axios from 'axios'

const useGetAllUsers = () => {
    const [allUsers,setAllUSers] = useState([]);
    const [loading,setLoading] = useState([]);
    useEffect(()=>{
        const getUsers = async()=>{
            setLoading(true)
            try {
              const token = Cookies.get('jwt');
              const response = await axios.get('/api/user/getUserProfile',{
                withCredentials: true,
                headers:{
                  Authorization:`Bearer ${token}`,
                }
              })
              setAllUSers(response.data.allUser);
              setLoading(false);
            } 
            catch (error) {
                console.log("Error"+error)
            }
        };
       getUsers() ;
    },[])
  return {allUsers,loading};
}

export default useGetAllUsers
