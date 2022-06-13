import React from 'react'
import './social-media.css'
const SocialMedia = () => {
  return (
    <div className="social-menu">
        <ul data-aos="fade-in"  data-aos-duration="2000">
            <li><a href="https://www.linkedin.com/in/anish-gupta-a28a20191/" target="blank"><i className="fab fa-linkedin-in"></i></a></li>
            <li><a href="https://www.instagram.com/an_ish_gupta/?hl=en" target="blank"><i className="fab fa-instagram"></i></a></li>
            <li><a href="https://github.com/Anish-Gupta26" target="blank"><i className="fab fa-github"></i></a></li>
            <li><a href="mailto:anishgupta2610@gmail.com"><i className="fas fa-envelope" target="blank"></i></a></li>
        </ul>
    </div>  
  )
}
export default SocialMedia