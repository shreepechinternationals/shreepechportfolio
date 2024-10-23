import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Header from './LandingPage';
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
import Threejs from './Threejs';
import LoadingScreen from './LoadingScreen';
import DynamicScroll from './DynamicScroll';
import Workflow from './Workflow';
import PullToRefresh from './PullToRefresh';
import LandingPage from './LandingPage';
import Platform from './Platform';


function App() {

  return (
    <>
    
      <LoadingScreen/>
      <PullToRefresh/>
      <LandingPage/>
      <Services />
      <Members />
      <Platform/>
      {/* <OurCompany /> */}
      <Clients />
      {/* <Activities /> */}
      <Workflow/>
      
      <Contact />
      
      <Faq />
      <WavyFooter/>
      <BackToTopButton />
      
      {/* <DynamicScroll/> */}
      
    </>
  );
}

export default App;