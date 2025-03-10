import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessage from '../../context/useGetMessage'
import Loading from '../../Componets/Loading.jsx'
import useGetSocketMessage from '../../context/useGetSocketMessage.jsx'
const Messages = () => {
  const {messages,loading}= useGetMessage();
  const messageList = messages?.messages || [];
  useGetSocketMessage();
  
  // console.log('Loading:', loading); // Add this to debug
  // console.log('Messages:', messages);
  const lastMessageRef = useRef();
  useEffect(()=>{
    setTimeout(()=>{
      if(lastMessageRef.current){
      lastMessageRef.current?.scrollIntoView({behavior:"smooth"})
      }
    },100);
  },[messages])
  return (
    <>
        {loading?(<Loading></Loading>):(messageList.length>0 && messageList.map((message)=>{
          <div key={message._id} ref={lastMessageRef}>  
            <Message message={message}/>
          </div>
        }))}
         <div className='' style={{minHeight:"calc(88vh - 8vh)"}}>
          {!loading && messageList.length === 0 && <div ><p className='font-bold mt-[50%] text-center'>Say Hi</p></div>}
      </div>
    </>
  )
}

export default Messages
