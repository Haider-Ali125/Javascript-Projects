// import React from 'react'
import Logo from '../../assets/Logo.svg'
import './nav.css'

const Nav = () => {
  return (
    <div className='nav-main' >
<img src={Logo} />
<div className='nav-menu'>
    <ul>
        <li>Menu</li>
        <li>Location</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
</div>
<button>Login</button>
    </div>
  )
}

export default Nav