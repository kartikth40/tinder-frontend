import React from "react"

const SwipeButtons = (props) => {
  const crossBtnClick = () => {
    const cardElements = document.querySelectorAll(".card")
    if (cardElements.length) {
      cardElements[cardElements.length - 1].classList.add("fadeOut-left")
      setStateWithInterval()
    }
  }
  const starBtnClick = () => {
    const cardElements = document.querySelectorAll(".card")
    if (cardElements.length) {
      cardElements[cardElements.length - 1].classList.add("fadeOut-right")
      setStateWithInterval()
    }
  }

  const setStateWithInterval = () => {
    setTimeout(() => {
      props.setCards((prev) => {
        return prev.filter((card, index) => index !== prev.length - 1)
      })
    }, 500)
  }
  return (
    <div className="swipe-btn-container">
      <div className="btn rewind-btn">
        <img src="./icons/rewind_icon.svg" alt="" />
      </div>
      <div className="btn cross-btn" onClick={crossBtnClick}>
        <img src="./icons/cross_icon.svg" alt="" />
      </div>
      <div className="btn heart-btn">
        <img src="./icons/heart_icon.svg" alt="" />
      </div>
      <div className="btn star-btn" onClick={starBtnClick}>
        <img src="./icons/star_icon.svg" alt="" />
      </div>
    </div>
  )
}

export default SwipeButtons
