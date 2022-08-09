import React, { useState } from 'react'
import { createContext } from 'react'
import Home from './components/home'
import './App.css'
export const ThemeContext = createContext(null);

function App() {
  const [theme,setTheme] = useState("dark")
  return (
  <ThemeContext.Provider value={{theme, setTheme}}>
      <div id={theme} className="main">
        <Home/>
      </div>
    </ThemeContext.Provider>
  )
}

export default App