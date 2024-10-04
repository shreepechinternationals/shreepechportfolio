
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

import React, { useState, useEffect } from "react";

function Clients() {
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current client index
  const clients = [
    "EVERLANE",
    "aloyoga",
    "vistaprint",
    "HARRY'S",
    "chubbies",
    "YS-Builders",
    "SG Suppliers",
    "Louis Vuitton"
  ];

  // Auto-scroll function to update the index every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length);
    }, 3000); // Scroll every 3 seconds

    return () => clearInterval(interval); // Cleanup the interval
  }, [clients.length]);

  // Function to handle left arrow click
  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? clients.length - 1 : prevIndex - 1
    );
  };

  // Function to handle right arrow click
  const handleRightClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length);
  };

  return (
    <div className="container-fluid" id="clients">
      <header id="clients-title">OUR CLIENTS</header>
      <div className="container text-center">
        <div className="row align-items-center">
          {/* Left Arrow */}
          <div className="col" onClick={handleLeftClick}>
            <i className="fa-solid fa-angle-left" style={{ cursor: 'pointer', fontSize: '24px' }}></i>
          </div>
          {/* Client Names */}
          <div className="col">{clients[(currentIndex + 0) % clients.length]}</div>
          <div className="col">{clients[(currentIndex + 1) % clients.length]}</div>
          <div className="col">{clients[(currentIndex + 2) % clients.length]}</div>
          <div className="col">{clients[(currentIndex + 3) % clients.length]}</div>
          <div className="col">{clients[(currentIndex + 4) % clients.length]}</div>
          {/* Right Arrow */}
          <div className="col" onClick={handleRightClick}>
            <i className="fa-solid fa-angle-right" style={{ cursor: 'pointer', fontSize: '24px' }}></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clients;
