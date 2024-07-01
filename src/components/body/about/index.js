import React from 'react'
// import SocialContact from '../social-contact'
import './about.css'
import SocialMedia from '../../Social-media'
function About() {
  return (
    <div className='about'>
      <div className='about-top' data-aos="zoom-in"  data-aos-duration="2000">
          <div className='about-info'>
             Hey there!👋 I am 
             <br/><span className='info-name'>Anish, Tech Geek!👨🏻‍💻</span>
             <br/>Software Engineer at CRED
          </div>
          <div className='about-photo'>
            <img 
            src={require("../../../assets/anish.png")} alt="cover"
            className="cover"/>
          </div>
      </div>
      <div className='about-bottom'>
        {/* <SocialContact/> */}
        <SocialMedia/>
      </div>  
    </div>
  )
}

export default About