import React from 'react'
import './experience-card.css'

function ExperienceCard({item}) {
  return (
    <div className='experience-card'>
        <a href={item.website} target='__blank'><img src={item.logo} alt="company-logo" className='experience-logo'/></a>
        <div className='experience-info'>
            <label className='company-name'>{item.company}</label>
        <div className='experience-dates'>
            <label className='company-name'>{item.role}</label>
            <br/>
            <label>{item.doj}</label> to <label>{item.doe}</label>
        </div>
        <div className='experience-desc'>
            <p>{item.description}</p>
        </div>
        </div>
    </div>
  )
}

export default ExperienceCard