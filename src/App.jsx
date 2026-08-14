import { useState } from 'react'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Film from './Components/Film'
import Jason from './Components/Jason'
import Lucia from './Components/Lucia'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Hero/>
    <Jason/>
    <Lucia/>
    <Film/>
      </>
  )
}

export default App
