import React from 'react'
import Seprator from '../../separator/index'
import {SkillsData} from './skill-data.js'
import './skills.css'
function Skills() {
  const data = SkillsData
  return (
    <div className='skills'>
      <Seprator/>
       <div className='section-title'>Skills</div>
        <div className='skills-container'>
            {data.map((item)=>{
                return(
                    <div className='skills-section'>
                        <label className='skills-section-title'>{item.type}</label>
                        <div className='skills-list'>
                            {item.list.map((skill)=>{
                                return(
                                    <div className='skills-card'>
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