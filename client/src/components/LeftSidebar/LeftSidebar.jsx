import React from 'react'
import './LeftSidebar.css'
import { NavLink } from 'react-router-dom'
import Globe from '../../assets/world (2).png'

const LeftSidebar = () => {
  return (
    <div className='left-sidebar'>
      <nav className='side-nav'>
        <NavLink to='/' className='side-nav-links' activeClassName='active'>
            <p>Home</p>
        </NavLink>
        <div className='side-nav-div'>
            <div>
                <p>PUBLIC</p>
            </div>
            <NavLink to='/Questions' className='side-nav-links' activeClassName='active' style={{paddingLeft: "7px"}}>
                <img src={Globe} alt='Globe' />
                <p  style={{paddingLeft: "10px"}}>Questions</p>
            </NavLink>
            <NavLink to='/Tags' className='side-nav-links' style={{padding: '0px'}}>
                <p style={{paddingLeft: "43px"}}>Tags</p>
            </NavLink>
            <NavLink to='/Users' className='side-nav-links'style={{padding:'0px'}}>
                <p style={{paddingLeft: "43px"}}>Users</p>
            </NavLink>
        </div>
      </nav>
    </div>
  )
}

export default LeftSidebar
