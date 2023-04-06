import React from 'react'
import Card from './Card'


export default function Cards({ dogs, round, clickedDogs }) {

  if (clickedDogs.length === 15) {
    return (
      <div className='cards'>
          GOOD BOI!
      </div>
    )
  }

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
