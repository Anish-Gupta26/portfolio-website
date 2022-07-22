import React from 'react'
import Separator from '../../separator'
import ExperienceCard from './experience-card'
import {ExperienceData} from './experience-data.js'
import './experience.css'

function Experience(){
  const data = ExperienceData;
  return (
    <div>
      <Separator/>
      <label className='section-title' id='experience'>Experience</label>
      <div className='experience-list' data-aos="flip-up"  data-aos-duration="2000">
        {data.map((item)=>{
          return(
            <ExperienceCard item={item} />
          )
        })}
      </div>
    </div>
  )
}

export default Experience