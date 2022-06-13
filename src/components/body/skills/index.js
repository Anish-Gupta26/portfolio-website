import React from 'react'
import Seprator from '../../separator/index'
import {SkillsData} from './skill-data.js'
import './skills.css'
function Skills() {
  const data = SkillsData
  return (
    <div className='skills' id="skills">
      <Seprator/>
       <div className='section-title'>Skills</div>
        <div className='skills-container'>
            {data.map((item)=>{
                return(
                    <div key={item.type} className='skills-section' data-aos="zoom-out"  data-aos-duration="2000">
                        <label className='skills-section-title'>{item.type}</label>
                        <div className='skills-list'>
                            {item.list.map((skill)=>{
                                return(
                                    <div key={skill.name} className='skills-card'>
                                        <div className='skill-icon'>{skill.icon}</div>
                                        <label className='skill-name'>{skill.name}</label>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Skills