import React from 'react'
import logo from '../assets/dog-bone.png'

export default function Header() {
    return (
      <>
      <div className='header'>MEMORY DOGS
        <img className='logo' src={logo} alt='dog-bone'/>
      </div>
      </>
    )
}