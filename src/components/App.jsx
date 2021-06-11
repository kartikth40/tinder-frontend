import React, { useEffect, useState } from 'react'

import Header from './Header'
import CardsContainer from './CardsContainer'
import SwipeButtons from './SwipeButtons'
import axios from '../axios'

const App = () => {
  const [cards, setCards] = useState([])

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get('/tinder/cards')
      setCards(req.data)
    }
    fetchData()
  }, [])

  return (
    <div className="container">
      <Header />
      <CardsContainer cards={cards} setCards={setCards} />
      <SwipeButtons cards={cards} setCards={setCards} />
    </div>
  )
}

export default App
