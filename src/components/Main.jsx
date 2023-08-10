import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Logo from './Logo'
import Services from './Services'
import Our_services from './Our_Services'
import Discover_Talents from './Discover_Talents'
import Serve from './Serve'
import Channels from './Channels'
import Case_Studies from './Case_Studies'
import Engagement from './Engagement'
import Rectangle from './Rectangle'
import Footer from './Footer'
import { useState } from 'react'


function Main(props) {

    const switchTheme = () => {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme)
      localStorage.setItem("theme", newTheme)
      document.documentElement.dataset.bsTheme = newTheme
    }
  
  return (
    <>
    <Navbar switchTheme={switchTheme} />
    <Home switchTheme={switchTheme} />
    <Logo switchTheme={switchTheme} />
    <Services switchTheme={switchTheme} />
    <Our_services switchTheme={switchTheme} />
    <Discover_Talents switchTheme={switchTheme} />
    <Serve switchTheme={switchTheme} />
    <Channels switchTheme={switchTheme} />
    <Case_Studies switchTheme={switchTheme} />
    <Engagement switchTheme={switchTheme} />
    <Rectangle switchTheme={switchTheme} />
    <Footer switchTheme={switchTheme} />
      
    </>
  )
}
export default Main