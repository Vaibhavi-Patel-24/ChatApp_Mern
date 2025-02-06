import React from 'react'
import Message from './Message'
import useGetMessage from '../../context/useGetMessage'
import Loading from '../../Componets/Loading.jsx'
const Messages = () => {
  const {messages,loading}= useGetMessage();
  console.log('Loading:', loading); // Add this to debug
console.log('Messages:', messages);
  return (
    <>
        {loading?(<Loading></Loading>):(messages.length>0 && messages.map((message)=>{
          return <Message key={message._id} message={message}/>
        }))}
         <div className='' style={{minHeight:"calc(88vh - 8vh)"}}>
          {!loading && messages.length === 0 && <div ><p className='font-bold mt-[50%] text-center'>Say Hi</p></div>}
      </div>
    </>
  )
}

export default Messages
