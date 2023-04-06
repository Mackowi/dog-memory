import React, { useState, useEffect }from 'react'
import ScoreBoard from './ScoreBoard'
import Cards from './Cards'
import dogs from './dogs'

export default function Game() {

  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [clickedDogs, setClickedDogs] = useState([])

  useEffect(() => {
    bestScoreHandler()
    showWinMsg()
  },[score])
  
  function shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5)
  }

  function scoreHandler() {
    setScore(score => 
      score + 1
    )
  } 

  function bestScoreHandler() {
    if (score >= bestScore -1) {
      setBestScore(score)
    }
  }

  function showWinMsg() {
    if (score === 15) {
      console.log('Good boi!')
    }
  }
  
  function resetScore() {
    setScore(0)
  }

  function clickedDogsHandler(newClickedDog) {
    setClickedDogs([
      ...clickedDogs,
      newClickedDog
    ])
  }
  
  function resetClickedDogs() {
    setClickedDogs([])
  }

  function round(userPick) {
    if (clickedDogs.includes(userPick)) {
      resetScore();
      resetClickedDogs();
    } else {
      clickedDogsHandler(userPick)
      scoreHandler();
    }
  }

  if (clickedDogs.length === 15) {
      return (
        <div className='game' style={{
          justifyContent: 'center',
        }}>
            <div className='winMsg'>
              YOU WON! GOOD BOI!
            </div>
        </div>
      )
  } else {
    return (
      <>
      <div className='game'>
        <ScoreBoard score={score} bestScore={bestScore}/>
        <Cards dogs={shuffle(dogs)} round={round}/>
      </div>
      </>
    )
  }
}