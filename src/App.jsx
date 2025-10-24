
import React,{useState} from 'react'
import './App.css'

function App(){
const [darkMode,setDarkMode]=useState(false)
const theme=()=> setDarkMode(!darkMode)
  return (
    <div  className={darkMode ? "dark-mode" : "light-mode"}>
      <h1>{darkMode ? "Dark Mode" : "Light Mode"}</h1>
      <button onClick={theme}>{darkMode ? "switch to dark mode" : "switch to light mode"}</button>
    </div>
  )
}
export default App

