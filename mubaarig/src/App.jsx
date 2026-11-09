import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from './Header1'
import Hello from './Header'
import Qof from './Header2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Hello/>
    <Qof name="maarig" value="45#" product="laptops"/>
    <Qof  name="maarig" value="45#" product="laptops"/>
    <Qof  name="maarig" value="45#" product="laptops"/>
    <Qof  name="maarig" value="45#" product="laptops"/>
    <Qof  name="maarig" value="45#" product="laptops"/>
    </>
  )
}

export default App
