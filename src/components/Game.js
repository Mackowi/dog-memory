import React, { useState }from 'react'
import ScoreBoard from './ScoreBoard'
import Cards from './Cards'
import baset from '../assets/baset.png'
import blablador from '../assets/blablador.png'
import bokser from '../assets/bokser.png'
import chiuaua from '../assets/chiuaua.png'
import corgi from '../assets/corgi.png'
import dalmatynczyk from '../assets/dalmatynczyk.png'
import doberman from '../assets/doberman.png'
import husky from '../assets/husky.png'
import jamnik from '../assets/jamnik.png'
import jamniczka from '../assets/jamnik2.png'
import killer from '../assets/killer.png'
import kundelek from '../assets/kundelek.png'
import lessie from '../assets/lessie.png'
import mops from '../assets/mops.png'
import pudel from '../assets/pudel.png'

export default function Game() {

  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [clickedDogs, setClickedDogs] = useState([])

  let dogs = [
    {
      src: baset,
      name: extractName(baset)
    },
    {
      src: bokser,
      name: extractName(bokser)
    },
    {
      src: chiuaua,
      name: extractName(chiuaua)
    },
    {
      src: corgi,
      name: extractName(corgi)
    },
    {
      src: dalmatynczyk,
      name: extractName(dalmatynczyk)
    },
    {
      src: doberman,
      name: extractName(doberman)
    },
    {
      src: husky,
      name: extractName(husky)
    },
    {
      src: jamnik,
      name: extractName(jamnik)
    },
    {
      src: jamniczka,
      name: extractName(jamniczka)
    },
    {
      src: killer,
      name: extractName(killer)
    },
    {
      src: kundelek,
      name: extractName(kundelek)
    },
    {
      src: lessie,
      name: extractName(lessie)
    },
    {
      src: mops,
      name: extractName(mops)
    },
    {
      src: pudel,
      name: extractName(pudel)
    },
    {
      src: blablador,
      name: extractName(blablador)
    }
  ]

  function extractName(loc) {
    const name = loc.match(/\/(\w+)\./);
    return name[1];
  }
  
  function shuffle(arr) {
    console.log('shuffling')
    let newArr = arr.sort(() => Math.random() - 0.5)
    return newArr
  }

  function scoreHandler() {
    setScore(score => 
      score + 1
    )
    console.log(`score=${score}`)
  } 

  function bestScoreHandler() {
    if (score >= bestScore) {
      setBestScore(score)
    }
    console.log(`best score=${bestScore}`)
  }
  
  function resetScoreHandler() {
    setScore(0)
    console.log(`score=${score}`)
  }

  function clickedDogsHandler(newClickedDog) {
    setClickedDogs([
      ...clickedDogs,
      newClickedDog
    ])
  }

  function round(userPick) {
    if (clickedDogs.includes(userPick)) {
      resetScoreHandler();
    } else {
      clickedDogsHandler(userPick)
      scoreHandler();
      bestScoreHandler();
      dogs = shuffle(dogs)
    }
  }

  return (
    <>
    <div className='game'>
      <ScoreBoard score={score} bestScore={bestScore}/>
      <Cards dogs={dogs} round={round}/>
    </div>
    </>
  )
}