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
import Threejs from './Threejs';


function App() {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.9, // Smooth scrolling duration
      easing: (t) => 1 - Math.pow(1 - t, 3), // Cubic easing for a smoother effect
      smooth: true,
    });
  
    // Animation loop
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
  
    // Add shadow effect during scroll
    const handleScrollShadow = () => {
      const shadowIntensity = Math.min(window.scrollY / 100, 1); // Limit shadow intensity
      document.body.style.boxShadow = `0px 10px 15px rgba(0, 0, 0, ${shadowIntensity * 0.2})`;
    };
  
    // Scroll handler using 100vh height reference
    const handleScroll = (event) => {
      event.preventDefault(); // Prevent default scrolling
  
      const sections = document.querySelectorAll('.section'); // All sections
      const scrollDirection = event.deltaY > 0 ? 1 : -1; // Scroll direction
      const currentSectionIndex = Math.round(window.scrollY / window.innerHeight); // Current section based on 100vh
  
      // Calculate the next section index
      let nextSectionIndex = currentSectionIndex + scrollDirection;
  
      // Ensure the next section index is within bounds
      if (nextSectionIndex < 0) nextSectionIndex = 0;
      if (nextSectionIndex >= sections.length) nextSectionIndex = sections.length - 1;
  
      // Calculate the target section's top offset
      const target = sections[nextSectionIndex].offsetTop;
  
      // Scroll smoothly to the target section using lenis
      lenis.scrollTo(target, { duration: 1.5 });
    };
  
    // Event listeners
    window.addEventListener('wheel', handleScroll, { passive: false }); // Wheel scroll for navigation
    window.addEventListener('scroll', handleScrollShadow); // Shadow effect on scroll
    requestAnimationFrame(raf); // Start the animation loop
  
    // Cleanup on unmount
    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('scroll', handleScrollShadow);
      lenis.destroy();
    };
  }, []);
  
  
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
      {/* <Threejs/> */}
      <BackToTopButton />
      
      
    </>
  );
}

export default App;
