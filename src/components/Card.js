import React from 'react'

export default function Card({ src, name, round }) {

  function capitalize(string) {
    return string[0].toUpperCase() + string.substring(1);
  }

  return (
    <div className='card' onClick={() => round(name)}>
        <img src={src} alt={name}/>
        <p>{capitalize(name)}</p>
    </div>
  )
}
