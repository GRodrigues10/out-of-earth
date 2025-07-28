import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import History from './components/History/History'
import Gallery from './components/gallery/Gallery'
import About from './components/about/About'
import Footer from './components/footer/Footer'
import Contact from './components/Contact/Contact'


function App() {
 

  return (
    <>
      <Header/>
      <History/>
      <Gallery/>
      <About/>
      <Contact/>
      <Footer/>

    </>
  )
}

export default App
