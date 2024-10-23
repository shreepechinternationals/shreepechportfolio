
// import React, { useState, useEffect } from "react"
// function Clients() {
//   const [currentIndex, setCurrentIndex] = useState(0); // Track the current client index
//   const clients = ["EVERLANE", "aloyoga", "vistaprint", "HARRY'S", "chubbies","YS-Builders","SG Suppliers"];

//   // Auto-scroll function to update the index every 2 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length);
//     }, 3000); // Scroll every 2 seconds

//     return () => clearInterval(interval); // Cleanup the interval
//   }, [clients.length]);
//   return (
//     <>
//       {/* <div className="container-fluid " id="clients">
//       <header id='clients-title'> OUR CLIENTS</header>
//         <div className="container text-center">

//           <div className="row">
//             <div className="col"><i className="fa-solid fa-angle-left"></i></div>
//             <div className="col">EVERLANE</div>
//             <div className="col">aloyoga</div>
//             <div className="col">vistaprint</div>
//             <div className="col">HARRY'S</div>
//             <div className="col">chubbies</div>
//             <div className="col"><i className="fa-solid fa-angle-right"></i></div>
//           </div>
//         </div>
//       </div> */}

//     <div className="container-fluid" id="clients">
//       <header id="clients-title">OUR CLIENTS</header>
//       <div className="container text-center">
//         <div className="row">
//           {/* <div className="col"><i className="fa-solid fa-angle-left"></i></div> */}
//           <div className="col">{clients[(currentIndex + 0) % clients.length]}</div>
//           <div className="col">{clients[(currentIndex + 1) % clients.length]}</div>
//           <div className="col">{clients[(currentIndex + 2) % clients.length]}</div>
//           <div className="col">{clients[(currentIndex + 3) % clients.length]}</div>
//           <div className="col">{clients[(currentIndex + 4) % clients.length]}</div>
//           {/* <div className="col"><i className="fa-solid fa-angle-right"></i></div> */}
//         </div>
//       </div>
//     </div>
//     </>
//   );
// }

// export default Clients;

import React, { useState, useEffect, useRef } from "react";

function Clients() {
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current client index
  const clientsRef = useRef(null); // Reference for marquee content to manipulate scroll
  const transitionDuration = 0.3; // Duration of the scroll transition in seconds

  const clients = [
    "fireempire.png",
    "it-concerns.png",
    "NPADSN.png",
    "ysbuilders.png",
    "SG.png",
    "maxholdings.png",
  ];

  const visibleLogos = 4; // Number of logos visible at once
  const totalClients = [...clients, ...clients]; // Duplicate client list to create infinite scroll
  const scrollInterval = 2000; // Scroll interval (2 seconds)

  // Auto-scroll logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, scrollInterval);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  // Effect to handle infinite loop without jumping back
  useEffect(() => {
    const marqueeElement = clientsRef.current;

    if (!marqueeElement) return;

    // When the user scrolls past the duplicated set, reset to the first set without visual jumping
    if (currentIndex >= clients.length) {
      marqueeElement.style.transition = "none"; // Temporarily disable transition for the seamless reset
      setCurrentIndex(0); // Reset the current index to the original list
      marqueeElement.style.transform = `translateX(0)`; // Snap back to the start of the original list

      setTimeout(() => {
        marqueeElement.style.transition = `transform ${transitionDuration}s ease`; // Re-enable transition after resetting
      }, 50); // Give a small delay before resetting the transition
    } else {
      marqueeElement.style.transform = `translateX(-${(currentIndex * (100 / visibleLogos))}%)`; // Normal scroll based on currentIndex
    }
  }, [currentIndex, clients.length, transitionDuration]);

  return (
    <div className="container-fluid clients-section" id="clients">
      {/* Heading Section */}
      <h2 className="clients-title">
        Our Beloved Clients
      </h2>

      {/* Marquee Section */}
      <div className="marquee-container" style={{ overflow: "hidden" }}>
        <div
          className="marquee-content"
          ref={clientsRef}
          style={{
            display: "flex",
            transition: `transform ${transitionDuration}s ease`, // Smooth scrolling
          }}
        >
          {totalClients.map((client, index) => (
            <div
              className="client-logo"
              key={index}
              style={{
                flex: `0 0 ${100 / visibleLogos}%`, // Ensure each image takes up an equal width
                maxWidth: `${100 / visibleLogos}%`,
              }}
            >
              <img
                src={`/images/clients-img/${client}`}
                alt={`Client ${index}`}
                className="client-image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Clients;







