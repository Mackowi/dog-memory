import React from 'react'

export default function ScoreBoard({ score, bestScore}) {

  return (
    <div className='scores'>
        <p>Score: {score}</p>
        <p>Best score: {bestScore}</p>
    </div>
  )
}
