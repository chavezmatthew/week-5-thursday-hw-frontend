import React from 'react'
import '../styles/styles.css'
import profilePic from '../assets/profile_pic_gandalf.jpg';

const Header = () => {
  return (
    <div className='header'>
      <img src={profilePic} alt="Background" className="background-image"/>
      <h1 className="portfolio-name">Gandalf</h1>
    </div>
  )
}

export default Header