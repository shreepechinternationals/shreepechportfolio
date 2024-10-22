import React, { useState, useEffect } from "react";

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
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <div className="d-flex align-items-center">
          <img
            src="/images/logo/logo-sp.png"
            alt="Company Logo"
            className="company-logo"
            style={{ width: '80px', height: 'auto'}}
          />
          <h1 className="company-title mb-0" id="company-title">Shreepech International</h1>
        </div>

        <button
          className="btn btn-outline ms-auto" id="light-dark"
          onClick={toggleDarkMode}
        >
          {isDarkMode ? (
            <i className="fa-solid fa-sun" />
          ) : (
            <i className="fa-solid fa-moon"></i>
          )}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
