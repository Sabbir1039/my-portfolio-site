import { useState } from 'react'
import './App.css'
import { useTheme } from './contexts/ThemeContext'
import Navbartop from './components/navbar/Navbartop'
import Hero from './components/hero/Hero'
import Projects from './components/projects/Projects'

function App() {
  const { isLightTheme, theme, toggleTheme } = useTheme()

  return (
    <>
      <div className='w-full'>
        <Navbartop />
        <Hero />
        <hr />
        <Projects />
        <hr />
      </div>
    </>
  )
}

export default App
