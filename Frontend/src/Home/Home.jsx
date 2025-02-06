import React from 'react'
import Right from './Right/Right'
import Left from './Left/Left'
import Logout from './Left/Logout'

const Home = () => {
  return (
    <>
    <div className='flex'>
      <Logout></Logout>
      <Left></Left>
      <Right></Right>
    </div>
    </>
  )
}

export default Home
