import React from 'react'
import User from './User'
import useGetAllUsers from '../../context/useGetAllUsers'

const Users = () => {
  const {allUsers,loading}= useGetAllUsers();
  console.log(allUsers)
  return (
    <>
      <div className='py-2 flex-scroll overflow-y-auto' style={{maxHeight:"calc(84vh - 1vh)"}}>
        {allUsers.map((user,index)=>{return <User key={index} user={user}/>})}
      </div>
    </>
  )
}

export default Users
