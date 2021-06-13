import React, { useEffect, useState } from 'react'
import '../styles/loader.css'
// import Loader from './Loader'

import Header from './Header'
import CardsContainer from './CardsContainer'
import SwipeButtons from './SwipeButtons'
import axios from '../axios'

const App = () => {
  const [cards, setCards] = useState([])

  useEffect(() => {
    const loader = document.querySelector('.loader-container')
    async function fetchData() {
      const req = await axios.get('/tinder/cards')
      setCards(req.data)
      let time = 500
      if (sessionStorage.getItem('firstTime') === 'true') time = 1500
      console.log(time)
      runAfter(time, () => loader.classList.add('fade-out'))
      runAfter(time + 500, () => loader.classList.add('hide'))
    }
    function isFirstTime() {
      if (sessionStorage.getItem('firstTime') === 'true') {
        sessionStorage.setItem('firstTime', 'false')
      } else if (sessionStorage.getItem('firstTime') === null) {
        sessionStorage.setItem('firstTime', 'true')
      }
    }
    isFirstTime()
    fetchData()
  }, [])

  const runAfter = (time, func) => {
    setInterval(() => {
      func()
    }, time)
  }

  return (
    <div className="container">
      <Header />
      <CardsContainer cards={cards} setCards={setCards} />
      <SwipeButtons cards={cards} setCards={setCards} />
    </div>
  )
}

export default App
