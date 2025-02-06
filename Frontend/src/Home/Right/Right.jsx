import React from 'react'
import ChatUser from './ChatUser'
import Messages from './Messages'
import Type from './Type'

const Right = () => {
  return (
    <>
    <div className='bg-slate-950 text-white w-[70%] h-screen'>
      <ChatUser/>
      <div className='py-2 flex-scroll overflow-y-auto' style={{maxHeight:"calc(88vh - 8vh)"}}>
      <Messages></Messages>
      </div>
      <Type></Type>
    </div>
    </>
  )
}

export default Right
