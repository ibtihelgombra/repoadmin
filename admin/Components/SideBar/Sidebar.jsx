import React from 'react'
import './SideBar.css'
import {Link} from 'react-router-dom'


const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Link to='/listusers' style={{textDecoration:'none'}}> 
        <div className='sidebar-item'>
            <p>Utilisateurs</p>
        </div>
        </Link>
        <Link to='/riskyusers' style={{textDecoration:'none'}}> 
        <div className='sidebar-item'>
            <p>Surconsommateurs</p>
        </div>
        </Link>
    </div>
    
  )
}

export default Sidebar