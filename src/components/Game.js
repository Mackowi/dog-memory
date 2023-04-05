import React, { useState }from 'react'
import ScoreBoard from './ScoreBoard'

export default function Game() {

  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(15)

  return (
    <>
    <div className='game'></div>
    <ScoreBoard/>
    </>
  )
}