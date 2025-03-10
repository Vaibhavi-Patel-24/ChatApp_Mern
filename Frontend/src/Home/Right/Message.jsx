import React from 'react'

const Message = ({message}) => {
    const authUser = JSON.parse(localStorage.getItem("messenger"));
    const itsme = String(message.senderId) === String(authUser.user._id);
    console.log("authUser",authUser.user._id)
    console.log("sender:",message.senderId)
    console.log(itsme)
    const chatName = itsme?"chat-end":"chat-start";
    const chatColor = itsme?"!bg-blue-500":"!bg-gray-800";
    const createdAt = new Date(message.createdAt);
    const formattedTime = createdAt.toLocaleTimeString([],{
      hour: '2-digit',
      minute:"2-digit"
    })
  return (
    <>
        <div className='p-4'>
            <div className= {`chat ${chatName}`}>
                <div className={`chat-bubble text-white ${chatColor}`}>{message.message}</div>
                <div>{formattedTime}</div>
            </div>
        </div>
    </>
  )
}

export default Message
