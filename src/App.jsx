import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Header from './Header';
import Services from './Services';
import Careers from './Careers';
import Contact from './Contact';
import Faq from './Faq';
import Clients from './Clients';
import Footer from './Footer';
import Navbar from './Navbar';
import BackToTopButton from './BackToTopButton';
import Activities from './Activities';
import OurCompany from './OurCompany';
import Members from './Members';
import WavyFooter from './WavyFooter';


function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Services />
      <Members />
      <OurCompany />
      <Clients />
      {/* <Careers /> */}
      <Activities />
      <Contact />
      <Faq />
      {/* <Footer /> */}
      <WavyFooter/>
      <BackToTopButton />
      
      
    </>
  );
}

export default App;
