import React, { useState } from 'react'
import Mobile from "./mobile/index";
import Web from "./web/index";
import './header.css'
function Header() {
  const [isopen, setisopen] = useState(false)
  return (
    <div className='header'>
        <div className='logo'>ANISH</div>
        <div className='menu'>
          <div className='web-menu'><Web/></div>
          <div className='mobile-menu'>
              <div onClick={()=>{setisopen(!isopen)}}>
                  <i class="fi fi-rr-apps menu-icon"></i>
              </div>
              {isopen && <Mobile isopen={isopen} setisopen={setisopen}/>}
          </div>
        </div>
    </div>
  )
}

export default Header