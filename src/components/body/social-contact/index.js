import React from 'react'
import {SocialData} from './social-data'
import './social-contact.css'
function SocialContact() {
  const data = SocialData
  return (
    <div className='social-contact'> 
        {data.map((item)=>{
          return(
            <a key={item.platform} href={item.link} target="_blank" rel="noreferrer">
              <div className='social-icon-div'>
                 <img src={item.icon} alt={item.platform} className='social-icon'/>  
              </div>
            </a>
          )
        })}
    
    </div>
  )
}
export default SocialContact