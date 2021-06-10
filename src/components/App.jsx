import React, { useState } from "react"

import Header from "./Header"
import CardsContainer from "./CardsContainer"
import SwipeButtons from "./SwipeButtons"

const App = () => {
  const [cards, setCards] = useState([
    {
      name: "Elon Musk",
      imgUrl: "https://i.ibb.co/dfc0TkJ/elon-musk.jpg",
    },
    {
      name: "Jeff Bezos",
      imgUrl: "https://i.ibb.co/QJYmsZJ/getty-644775488-20001333167077516340-343832.jpg",
    },
    {
      name: "Sundar Pichai",
      imgUrl: "https://i.ibb.co/g30cjxy/VRG-ILLO-4028-VC-Sundar.jpg",
    },
  ])

  return (
    <div className="container">
      <Header />
      <CardsContainer cards={cards} setCards={setCards} />
      <SwipeButtons cards={cards} setCards={setCards} />
    </div>
  )
}

export default App
