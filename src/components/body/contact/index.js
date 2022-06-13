import React from 'react'
import Separator from '../../separator/index'
import SocialMedia from '../../Social-media'
import './contact.css'
function Contact() {
  return (
    <div className='contact' id="contact">
        <Separator/>
        <label className='section-title'>Contact</label>
        <div className='contact-container'>
           <div className='contact-left'>
               <p>Want to get in touch?</p>
               <SocialMedia/>
            </div> 
            <div className='resume-button'>
                <a className='resume' href="https://drive.google.com/file/d/1SIHa4YJv1xaWyEVQMDU_xYkwbeE9FE0H/view" rel="noreferrer" target='_blank'>Resume</a>
                <i className="fi fi-rr-download"></i>
            </div>
        </div>
    </div>
  )
}

export default Contact