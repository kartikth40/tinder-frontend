import React from 'react'

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader">
        <div className="bars">
          <div className="bar bar1"></div>
          <div className="bar bar2"></div>
          <div className="bar bar3"></div>
          <div className="bar bar4"></div>
          <div className="bar bar5"></div>
        </div>
        <div className="loading-text">loading...</div>
      </div>
    </div>
  )
}

export default Loader
