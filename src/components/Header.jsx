import React from 'react'

const Header = () => (
  <div className="header-container">
    <div className="profile-icon icon">
      <object type="image/svg+xml" data="./icons/profile_icon.svg" aria-label="profile" />
    </div>
    <div className="tinder-icon icon">
      <object type="image/svg+xml" data="./icons/tinder_icon.svg" aria-label="tinder" />
    </div>
    <div className="chat-icon icon">
      <object type="image/svg+xml" data="./icons/chat_icon.svg" aria-label="chat" />
    </div>
  </div>
)

export default Header
