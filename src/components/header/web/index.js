import React, { useContext } from 'react'
import Switch from 'react-switch'
import { ThemeContext } from '../../../App'
import './web.css'

function Web()
{
  const {theme,setTheme} = useContext(ThemeContext)
  const toggleTheme = ()=>{
  setTheme((curr) => (curr === "light" ? "dark" : "light"));
  }
 return (
    <div className='web'>
      <div className='web-option'>
        <a href='#project' >
        <i className="fi fi-rr-edit-alt option-icon"></i> Projects  
        </a>
      </div>
      <div className='web-option'>
        <a href='#skills' >
        <i className="fi fi-rr-laptop option-icon"></i>Skills  
        </a>
      </div>
      <div className='web-option'>
        <a href='#experience' >
        <i className="fi fi-rr-briefcase option-icon"></i>Experience  
        </a>
      </div>
      <div className='web-option'>
        <a href='#contact' >
        <i className="fi fi-rr-user option-icon"></i> Contact  
        </a>
      </div>
      <div className='web-option'>
      <Switch onChange={toggleTheme} checked={theme==="light"}/>
      </div>
    </div>
  )
}

export default Web