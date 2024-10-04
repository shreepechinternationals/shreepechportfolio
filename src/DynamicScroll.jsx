import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Header from './LandingPage';
import Services from './Services';
import Members from './Members';


function DynamicScroll() {
  const headerRef = useRef(null);
  const servicesRef = useRef(null);
  const membersRef = useRef(null);

  const headerVariants = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0.5 },
  };

  const servicesVariants = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0.9 },
  };

  const membersVariants = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0.9 },
  };

  const handleScroll = (event) => {
    const delta = event.deltaY;

    if (delta > 0) {
      // Scrolling down
      headerRef.current.start({ opacity: 0, scale: 0.5 }); // Shrink header
      servicesRef.current.start({ opacity: 1, scale: 1 }); // Fade in services
      membersRef.current.start({ opacity: 0, scale: 0.9 }); // Fade out members
    } else {
      // Scrolling up
      headerRef.current.start({ opacity: 1, scale: 1 }); // Reset header
      servicesRef.current.start({ opacity: 0, scale: 0.9 }); // Fade out services
      membersRef.current.start({ opacity: 1, scale: 1 }); // Fade in members
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <div className="parallax-container">
      <motion.div
        ref={headerRef}
        initial="visible"
        animate="visible"
        variants={headerVariants}
        transition={{ duration: 0.4 }} // Adjust transition duration
        className="foreground"
      >
        <Header />
      </motion.div>
      <motion.div
        ref={servicesRef}
        initial="hidden"
        animate="hidden"
        variants={servicesVariants}
        transition={{ duration: 0.4 }} // Adjust transition duration
        className="foreground"
      >
        <Services />
      </motion.div>
      <motion.div
        ref={membersRef}
        initial="hidden"
        animate="hidden"
        variants={membersVariants}
        transition={{ duration: 0.4 }} // Adjust transition duration
        className="foreground"
      >
        <Members />
      </motion.div>
      <div className="parallax-background"></div>
    </div>
  );
}

export default DynamicScroll;
