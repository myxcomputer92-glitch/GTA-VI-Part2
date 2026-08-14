import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Center from './Components/Center'
import Film from './Components/Film'
import Footer from './Components/Footer'
import Jason from './Components/Jason'
import Lucia from './Components/Lucia'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Hero/>
    {/* <Center/> */}
    <Jason/>
    <Lucia/>
    <Film/>
    {/* <Footer/> */}
      </>
  )
}

export default App
