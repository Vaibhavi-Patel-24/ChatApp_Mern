import React from 'react'
import useConversation from "../../statemanage/useConversation.js"
import { useSocketContext } from '../../context/SocketContext.jsx';

const ChatUser = () => {
  const {selectedConversation, setSelectedConversation} = useConversation();
  const {onlineusers} = useSocketContext();
  const getOnlineUserStatus = (userId) =>{
    return onlineusers.includes(userId)?"Online":"Offline"
  }
  const isOnline = onlineusers.includes(selectedConversation?._id);
  // console.log("selectewd user:",selectedConversation?.name)
  return (
    <>
    <div className='pl-5 pt-5 pb-3 h-[12vh] flex space-x-4 bg-gray-900 hover:bg-gray-600 duration-300'>
        <div className={`avatar ${isOnline ? "online" : ""}`}>
            <div className="w-12 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
        </div>
        
        <div>
            <h1 className='text-xl'>{selectedConversation?.name}</h1>
            <span className={`text-sm ${isOnline ? "text-green-500" : "text-gray-400"}`}>{getOnlineUserStatus(selectedConversation?._id)}</span>
        </div>
    </div>
    </>
  )
}

export default ChatUser
