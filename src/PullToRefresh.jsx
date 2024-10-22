import React, { useState, useEffect } from 'react';
import './refresh.css'; // Ensure this imports your CSS

const PullToRefresh = () => {
  const [loading, setLoading] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0); // To track scroll direction
  const [showRefresh, setShowRefresh] = useState(false); // To manage the visibility of the refresh indicator
  let scrollTimeout; // For resetting the scroll after inactivity

  const handleRefresh = () => {
    setLoading(true);
    // Simulate fetching new data or refresh action
    setTimeout(() => {
      setLoading(false);
      setShowRefresh(false); // Hide the refresh indicator after loading
      document.body.classList.remove('refresh-active'); // Reset body padding
    }, 2000); // 2 seconds to simulate loading
  };

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    // Check if we are at the top and scrolling up
    if (scrollTop < lastScrollTop && scrollTop === 0 && !loading) {
      setShowRefresh(true); // Show refresh indicator when scrolled to the top and up
      handleRefresh();
    } else if (scrollTop === 0) {
      setShowRefresh(true); // Show refresh when at the top
      document.body.classList.add('refresh-active'); // Add class to body when refresh is shown
    } else {
      setShowRefresh(false); // Hide when scrolling down
      document.body.classList.remove('refresh-active'); // Remove padding when not showing refresh
    }

    setLastScrollTop(scrollTop);

    // Set a timeout to reset the padding if scroll stops
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }
    scrollTimeout = setTimeout(() => {
      if (scrollTop !== 0) {
        document.body.classList.remove('refresh-active'); // Ensure padding resets
      }
    }, 300); // 300ms after scroll stops
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout); // Clear timeout on cleanup
      }
    };
  }, [lastScrollTop, loading]);

  return (
    <>
      {showRefresh && (
        <div id="refresh" loading-state={loading ? 'loading' : ''} className={showRefresh ? 'show' : ''}>
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
          <span>{loading ? 'Refreshing...' : 'Pull to refresh'}</span>
        </div>
      )}
    </>
  );
};

export default PullToRefresh;
