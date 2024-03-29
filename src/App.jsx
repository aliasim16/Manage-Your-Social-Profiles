import { Route,Routes } from 'react-router-dom';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Logo from './components/Logo';
import Services from './components/Services';
import Our_services from './components/Our_Services';
import Discover_Talents from './components/Discover_Talents';
import Serve from './components/Serve';
import Channels from './components/Channels';
import Case_Studies from './components/Case_Studies';
import Engagement from './components/Engagement';
import Rectangle from './components/Rectangle';
import Footer from './components/Footer';
import "./context/context"
import { MainContext } from './context/context';


function App() {
  
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ||
    document.documentElement.dataset.bsTheme || 
    "light"
)

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.dataset.bsTheme = newTheme
  }

  const data = {
    theme,
    switchTheme
  }

  return (
    <MainContext.Provider value={data}>
    {/* <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/case-studies" element={<Case_Studies/>}/>
      <Route path="/About-us" element={<Discover_Talents/>}/>
    </Routes>
    <Footer/> */}
    <Navbar/>
    <Home/>
    <Logo/>
    <Services/>
    <Our_services/>
    <Discover_Talents/>
    <Serve/>
    <Channels/>
    <Case_Studies/>
    <Engagement/>
    <Rectangle/>
    <Footer/>

    </MainContext.Provider>
  )
}

export default App
