import React from 'react'
import Card from './Card'


export default function Cards({ dogs, round }) {

  const dogCards = [];
  for (let i = 0; i < dogs.length; i++) {
    dogCards.push(
      <Card key={i} src={dogs[i].src} name={dogs[i].name} round={round}/>
    )
  }

  return (
    <div className='cards'>
        {dogCards}
    </div>
  )
}
