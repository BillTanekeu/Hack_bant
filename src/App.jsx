import { useState } from 'react'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import MainLayout from './components/MainLayout.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <MainLayout/>
      
      <Footer/>
      
    </>
  )
}

export default App
