import React from "react"

const Card = (props) => (
  <div className="card">
    <div className="card-img">
      <img src={props.imgUrl} alt={props.name} />
    </div>
  </div>
)

export default Card
