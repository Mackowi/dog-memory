import React from 'react'
import logo from '../assets/dog-bone.png'

function Header() {
    return (
      <>
      <div className='header'>MEMORY DOGS
        <img className='logo' src={logo} alt='dog-bone'/>
      </div>
      </>
    )
}

export default Header