import React from 'react'
import Header from './Header'
import Services from './Services'
import About from './About'
import Careers from './Careers'
import Contact from './Contact'
import Faq from './Faq'
import Clients from './Clients'
import Footer from './Footer'
import Navbar from './Navbar'
import BackToTopButton from './BackToTopButton'
function App() {
  return (
    <>
    <Navbar/>
    <Header/>
    <Services/>
    <About/>
    <Clients/>
    {/* <Careers/> */}
    <Contact/>
    <Faq/>
    <Footer/>
    <BackToTopButton/>
    
    </>
  )
}

export default App

