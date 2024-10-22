
import React, { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Duration for the loading screen (in milliseconds)

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loader">
          <div className="loading-circle"></div>
          <img src="/images/logo/shreepech.png" alt="Loading..." className="loading-logo" />
        </div>
      </div>
    );
  }

  return null; // Return null or the main content when loading is done
};

export default LoadingScreen;

// import React, { useEffect, useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const LoadingScreen = () => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Set a timer for loading duration
//     const timer = setTimeout(() => {
//       setLoading(false); // Remove the loading screen after animations complete
//     }, 2000); // Reduced duration for the entire loading animation to 2 seconds

//     return () => clearTimeout(timer); // Cleanup the timer on component unmount
//   }, []);

//   return (
//     <AnimatePresence>
//       {loading && (
//         <motion.div
//           className="loading-screen"
//           initial={{ opacity: 1 }}
//           exit={{ opacity: 0 }} // Fade out effect for the entire screen
//           transition={{ duration: 0.3 }} // Duration for fade out
//         >
//           <motion.div className="loader-container">
//             {/* Logo is shown first */}
//             <motion.img
//               src="images/logo/logo-sp.png"
//               alt="Loading..."
//               className="loading-logo"
//               initial={{ opacity: 0 }} // Start invisible
//               animate={{ opacity: 1 }} // Fade in
//               transition={{ duration: 0.5 }} // Fade in duration
//             />

//             {/* Text appears below the logo */}
//             <motion.div
//               className="loading-text"
//               initial={{ opacity: 0, y: 20 }} // Start below and invisible
//               animate={{ opacity: 1, y: 0 }} // Fade in and move up
//               transition={{ duration: 0.5, delay: 0.3 }} // Reduced delay for fade in
//             >
//               <h2>SHREEPECH</h2>
//               <h3>INTERNATIONAL</h3>
//             </motion.div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default LoadingScreen;





