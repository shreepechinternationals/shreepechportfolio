import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Services from './Services';
import Contact from './Contact';
import Faq from './Faq';
import Clients from './Clients';
import Footer from './Footer';
import Navbar from './Navbar';
import BackToTopButton from './BackToTopButton';
import Members from './Members';
import WavyFooter from './WavyFooter';
import Threejs from './Threejs';
import LoadingScreen from './LoadingScreen';
import Workflow from './Workflow';
import PullToRefresh from './PullToRefresh';
import LandingPage from './LandingPage';
import Platform from './Platform';
import Industries from './Industries'
import Technologies from './Technologies';


function App() {

  return (
    <>
    
      <LoadingScreen/>
      <PullToRefresh/>
      {/* <Navbar/> */}
      <LandingPage/>
      <Services />
      <Members />
      <Platform/>
      <Technologies/>
     
      <Workflow/>
      <Clients />
      <Industries/>
      
      <Contact />
      
      <Faq />
      <WavyFooter/>
      <BackToTopButton />
      
      
    </>
  );
}

export default App;