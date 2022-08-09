import React, { useContext } from 'react'
import './mobile.css'
import ReactSwitch from 'react-switch'
import { ThemeContext } from '../../../App'

function Mobile({isopen,setisopen}) {
  const {theme,setTheme} = useContext(ThemeContext)
  const toggleTheme = ()=>{
  setTheme((curr) => (curr === "light" ? "dark" : "light"));
  }

  return (
    <div className='mobile'>
      <div className='close-icon' onClick={()=>setisopen(!isopen)}>
      <i className="fi fi-rr-cross-circle"></i>
      </div>  
      <div className='mobile-options'>
        <div className='mobile-option'>
          <a href='#project' >
          <i className="fi fi-rr-edit-alt option-icon"></i> Projects  
          </a>
        </div>
        <div className='mobile-option'>
          <a href='#skills' >
          <i className="fi fi-rr-laptop option-icon"></i>Skills  
          </a>
        </div>
        <div className='mobile-option'>
          <a href='#experience' >
          <i className="fi fi-rr-briefcase option-icon"></i>Experience  
          </a>
        </div>
        <div className='mobile-option'>
          <a href='#contact' >
          <i className="fi fi-rr-user option-icon"></i> Contact  
          </a>
        </div>
        <div className='mobile-option'>
        <ReactSwitch onChange={toggleTheme} checked={theme==="light"}/>
        </div>
      </div>
    </div>
  )
}

export default Mobile