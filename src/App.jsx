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

function App() {
  
  let [theme, setTheme] = useState(
    localStorage.getItem("theme") ||
    document.documentElement.dataset.bsTheme || 
    "light"
)

  const switchTheme = () => {
    let newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.dataset.bsTheme = newTheme
  }

  return (
    <>
    <Navbar  theme={theme} switchTheme={switchTheme} />
    <Home  theme={theme} switchTheme={switchTheme} />
    <Logo  theme={theme} switchTheme={switchTheme} />
    <Services  theme={theme} switchTheme={switchTheme} />
    <Our_services  theme={theme} switchTheme={switchTheme} />
    <Discover_Talents  theme={theme} switchTheme={switchTheme} />
    <Serve  theme={theme} switchTheme={switchTheme} />
    <Channels  theme={theme} switchTheme={switchTheme} />
    <Case_Studies  theme={theme} switchTheme={switchTheme} />
    <Engagement  theme={theme} switchTheme={switchTheme} />
    <Rectangle  theme={theme} switchTheme={switchTheme} />
    <Footer  theme={theme} switchTheme={switchTheme} />

    </>
  )
}

export default App
