import React from 'react'
import About from './about/index'
import Contact from './contact/index'
import Work from './work/index'
import Project from './projects/index'
import './body.css'
function Body() {
  return (
    <div className='body'>
        <About/>
        <Work/>
        <Project/>
        <Contact/>  
    </div>
  )
}

export default Body