import React, { useEffect } from 'react'
import ChatUser from './ChatUser'
import Messages from './Messages'
import Type from './Type'
import useConversation from '../../statemanage/useConversation.js'
import { useAuth } from '../../context/AuthProvider.jsx'

export default function Right() {
  const {selectedConversation,setSelectedConversation} = useConversation();
  useEffect(()=>{
    return ()=> setSelectedConversation(null);
  },[]);
  return (
    <div className='bg-slate-800 text-white w-full md:w-[70%] h-screen'>
    <div>
      {!selectedConversation ? (<Nochat></Nochat>):(
        <>
        <ChatUser/>
        <div className='py-2 flex-scroll overflow-y-auto' style={{maxHeight:"calc(88vh - 8vh)"}}>
        <Messages></Messages>
        </div>
        <Type></Type>
        </>
      )}
    </div>
    </div>
  )
}

const Nochat =()=>{
  const authUser = useAuth();
  return(
    <>
    <div className='flex h-screen items-center justify-center'>
      <h1 className='text-center font-semibold text-xl'>
      Welcome <span>{authUser?.authUser?.user?.name || "Guest"}</span>
      <br></br>
      Select a conversation to start a chat.</h1>
    </div>
    </>
  )
}