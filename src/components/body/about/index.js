import React from 'react'
import SocialContact from '../social-contact'
import './about.css'
function About() {
  return (
    <div className='about'>
      <div className='about-top'>
          <div className='about-info'>
             Hey there!👋 I am 
             <br/><span className='info-name'>Anish, A Tech Geek!😁</span>
             <br/>I love to explore Everything.
          </div>
          <div className='about-photo'>
            <img 
            src={require("../../../assets/bgimg.png")} alt="cover"
            className="cover"/>
          </div>
      </div>
      <div className='about-bottom'>
        <SocialContact/>
      </div>  
    </div>
  )
}

export default About