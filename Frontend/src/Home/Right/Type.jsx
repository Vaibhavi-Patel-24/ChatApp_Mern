import React, { useState } from 'react'
import { IoSend } from "react-icons/io5";
import useSendMessage from '../../context/useSendMessage.js';


const Type = () => {
  const {loading,sendMessages} = useSendMessage();
  const [message,setMessage] = useState("");
  const handleSubmit = async(e)=>{
    e.preventDefault();
    await sendMessages(message);
    setMessage("");
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
        <div className='flex space-x-3 h-[7vh] text-center bg-gray-800'>
            <div className='w-[70%] mx-4'>
                <input 
                type="text" 
                value={message}
                onChange={(e)=>{
                  setMessage(e.target.value)
                }}
                placeholder="Type here....." 
                className="input input-bordered w-full rounded-xl !bg-slate-900 outline-none grow text-white py-3 px-3 mt-1" />
            </div>
            <button >
                <IoSend className='text-3xl'/>
            </button>
        </div>
    </form>

    </>
  )
}

export default Type
