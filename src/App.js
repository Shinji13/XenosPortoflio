import React from 'react'
import NavBar from './Components/Nav_bar/Navbar'
import Globalstyles from './Global_Style'
import Home from './Components/Pages/Home/Home'
import Skills from './Components/Pages/skills/skills'
import Contact from './Components/Pages/contact/contact'
import News from './Components/Pages/Newsletter/mailchimp'

export default function App() {
  return (
    <>  
     <Globalstyles/>
     <NavBar/>
     <Home/>
     <Skills/>
     <Contact/>
     <News/>
    </> 
  )
}
