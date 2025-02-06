import React from 'react'
import Search from './Search'
import Users from './Users'

const Left = () => {
  return (
    <>
    <div className='bg-black text-white w-[30%] h-screen'>
        <p className='font-semibold text-3xl p-2 px-11'>Chat</p>
           <Search></Search>
           <hr></hr>
           <Users></Users>
    </div>
    </>
  )
}

export default Left
