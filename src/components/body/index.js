import React from 'react'
import About from './about/index'
import Achievments from './achievments/index'
import Project from './projects/index'
import './body.css'
import Skills from './skills'
import Contact from './contact/index'
function Body() {
  return (
    <div className='body'>
        <About/>
        <Project/>
        <Skills/>
        <Contact/> 
    </div>
  )
}

export default Body