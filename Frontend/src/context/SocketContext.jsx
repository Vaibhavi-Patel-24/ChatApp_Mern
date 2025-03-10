import React, {  useContext, useEffect, useState } from "react";
import { createContext } from "react"
import {useAuth} from './AuthProvider.jsx'
import io from "socket.io-client"

const socketContext = createContext();

export const useSocketContext = () => {
    return useContext(socketContext);
};

export const SocketProvider = ({children}) => {
    const [socket,setSocket] = useState(null);
    const [onlineusers,setOnlineUsers] = useState([]);
    const authUser = useAuth()

    useEffect(()=>{
        if(authUser){
            const socket = io("http://localhost:5001/",{
            query:{
                userId:authUser?.authUser?.user?._id
       },
       });
           setSocket(socket);
            socket.on("getOnline",(users)=>{
                setOnlineUsers(users);
                console.log("Socket disconnected");
            });
            return () => socket.close();
        }else{
            if(socket){
                socket.close();
                setSocket(null);
            }
        }
    },[authUser]);
    return(
        <socketContext.Provider value={{socket,onlineusers}}>
            {children}
        </socketContext.Provider>
    );

};