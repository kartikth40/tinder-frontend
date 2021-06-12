import React from 'react'

import Card from './Card'
import Loader from './Loader'

const defaultCard = [
  {
    name: 'Sundar Pichai',
    imgUrl: 'https://i.ibb.co/g30cjxy/VRG-ILLO-4028-VC-Sundar.jpg',
  },
]

// PUT CARD NAMES

const CardsContainer = ({ cards }) => {
  if (!cards) cards = defaultCard

  return (
    <div className="card-container">
      <Loader />
      {cards.map((card, index) => (
        <Card key={index} name={card.name} imgUrl={card.imgUrl} />
      ))}
    </div>
  )
}

export default CardsContainer
