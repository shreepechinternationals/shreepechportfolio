import React, { useState, useEffect } from "react";
// You can style your navbar and button here

function Navbar() {
  // State to track theme mode (light/dark)
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Apply theme changes to the body class
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo-box">
        <img src="/images/logo/shreepech.png" alt="Company Logo" className="company-logo" />
        </div>
        <h1 className="company-title">Shreepech International</h1>
      </div>
      <div className="navbar-right">
        <button onClick={toggleDarkMode} className="toggle-button">
          {isDarkMode ? (
          <>
          <i className="fa-solid fa-sun"/>
          
          </> 
          ):(
            <> 
            <i className="fa-solid fa-moon"></i>
            
            </>
        )}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
