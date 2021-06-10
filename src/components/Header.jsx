import React from "react"

const Header = () => (
  <div className="header-container">
    <div className="profile-icon icon">
      {/* <img src="./icons/profile_icon.svg" alt="profile icon"></img> */}
      <object type="image/svg+xml" data="./icons/profile_icon.svg" aria-label="profile" />
    </div>
    <div className="tinder-icon icon">
      {/* <img src="./icons/tinder_icon.svg" alt="tinder icon"></img> */}
      <object type="image/svg+xml" data="./icons/tinder_icon.svg" aria-label="tinder" />
    </div>
    <div className="chat-icon icon">
      {/* <img src="./icons/chat_icon.svg" alt="chat icon"></img> */}
      <object type="image/svg+xml" data="./icons/chat_icon.svg" aria-label="chat" />
    </div>
  </div>
)

export default Header
