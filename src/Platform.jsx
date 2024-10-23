import React from "react";
import "./platform.css";

function Platform() {
  return (
    <div className="platform-main">
      
        <div className="platform-content">
          <h2 className="platform-title">Platforms</h2>
          <p className="platform-desc">
            Reach your customers across the entire spectrum of digital devices.
          </p>

          <div className="platform-icons">
            <div className="platform-item">
              <img src="/images/platform-img/phone.png" alt="Phone" className="platform-icon" />
              <p>Phone</p>
            </div>

            <div className="platform-item">
              <img src="/images/platform-img/desktop.png" alt="Web" className="platform-icon" />
              <p>Web</p>
            </div>

            <div className="platform-item">
              <img src="/images/platform-img/tablet.png" alt="Tablet" className="platform-icon" />
              <p>Tablet</p>
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default Platform;
