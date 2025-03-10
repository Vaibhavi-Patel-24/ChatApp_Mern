import React from 'react'
import Right from './Right/Right'
import Left from './Left/Left'
import Logout from './Left/Logout'

const Home = () => {
  return (
    <div className="flex">
      {/* Sidebar Drawer */}
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        
        <div className="drawer-content">
          {/* Drawer Button */}
          <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
            Open drawer
          </label>
          
          {/* Main Content */}
          <div className="flex">
            <Left /> {/* Left Component - Sidebar items */}
            <Right /> {/* Right Component - Main content */}
          </div>
        </div>

        {/* Drawer Sidebar */}
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            <li><a>Sidebar Item 1</a></li>
            <li><a>Sidebar Item 2</a></li>
            <li><Logout /> {/* Logout Component */}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Home
