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

function App() {
  // useEffect(() => {
  //   const lenis = new Lenis({
  //     duration: 0.1,
  //     easing: (t) => t * (2 - t),
  //     smooth: true,
  //   });
  
  //   // Animation loop
  //   function raf(time) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }
  
  //   // Scroll handler
  //   const handleScroll = (event) => {
  //     event.preventDefault(); // Prevent default scroll behavior
  
  //     const sections = document.querySelectorAll('.section'); // Get all sections
  //     const currentSectionIndex = Math.round(window.scrollY / window.innerHeight); // Get current section index
  
  //     let nextSectionIndex;
  
  //     // If we're on the first section, always go to the second section
  //     if (currentSectionIndex === 0) {
  //       nextSectionIndex = 1;
  //     } else {
  //       // For other sections, determine scroll direction
  //       const scrollDirection = event.deltaY > 0 ? 1 : -1;
  //       nextSectionIndex = currentSectionIndex + scrollDirection;
  //     }
  
  //     // Ensure the next section index is within bounds
  //     if (nextSectionIndex < 0) nextSectionIndex = 0;
  //     if (nextSectionIndex >= sections.length) nextSectionIndex = sections.length - 1;
  
  //     // Get the top offset of the target section
  //     const target = sections[nextSectionIndex].offsetTop;
  
  //     // Scroll to the target section smoothly
  //     lenis.scrollTo(target, { duration: 0.5 });
  //   };
  
  //   window.addEventListener('wheel', handleScroll, { passive: false }); // Add scroll event listener
  //   requestAnimationFrame(raf); // Start the animation loop
  
  //   return () => {
  //     window.removeEventListener('wheel', handleScroll); // Cleanup on unmount
  //     lenis.destroy(); // Destroy lenis instance
  //   };
  // }, []);

  return (
    <>
    {/* <div className="section"> */}
      
      <Header />
      <Services />
      <Members />
      <OurCompany />
      <Clients />
      {/* <Careers /> */}
      <Activities />
      <Contact />
      <Faq />
      <Footer />
      
      {/* </div> */}
    </>
  );
}

export default App;
