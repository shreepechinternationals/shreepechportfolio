// LoadingScreen.js
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
          <img src="images/logo/shreepech.png" alt="Loading..." className="loading-logo" />
        </div>
      </div>
    );
  }

  return null; // Return null or the main content when loading is done
};

export default LoadingScreen;
