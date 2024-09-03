import React from 'react'
import LOGO from '../assets/LOGO.PNG'
import admin from '../assets/admin.png'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={LOGO} alt="" className='nav-logo' />
        <img src={admin}alt="" className='nav-profile' />
    </div>
  )
}

export default Navbar