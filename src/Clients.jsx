
import React, { useState, useEffect } from "react"
function Clients() {
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current client index
  const clients = ["EVERLANE", "aloyoga", "vistaprint", "HARRY'S", "chubbies","YS-Builders","SG Suppliers"];

  // Auto-scroll function to update the index every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length);
    }, 3000); // Scroll every 2 seconds

    return () => clearInterval(interval); // Cleanup the interval
  }, [clients.length]);
  return (
    <>
      {/* <div className="container-fluid " id="clients">
      <header id='clients-title'> OUR CLIENTS</header>
        <div className="container text-center">

          <div className="row">
            <div className="col"><i className="fa-solid fa-angle-left"></i></div>
            <div className="col">EVERLANE</div>
            <div className="col">aloyoga</div>
            <div className="col">vistaprint</div>
            <div className="col">HARRY'S</div>
            <div className="col">chubbies</div>
            <div className="col"><i className="fa-solid fa-angle-right"></i></div>
          </div>
        </div>
      </div> */}

    <div className="container-fluid" id="clients">
      <header id="clients-title">OUR CLIENTS</header>
      <div className="container text-center">
        <div className="row">
          <div className="col"><i className="fa-solid fa-angle-left"></i></div>
          <div className="col">{clients[(currentIndex + 0) % clients.length]}</div>
          <div className="col">{clients[(currentIndex + 1) % clients.length]}</div>
          <div className="col">{clients[(currentIndex + 2) % clients.length]}</div>
          <div className="col">{clients[(currentIndex + 3) % clients.length]}</div>
          <div className="col"><i className="fa-solid fa-angle-right"></i></div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Clients;
