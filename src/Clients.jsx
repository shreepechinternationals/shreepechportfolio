import React, { useState, useEffect, useRef } from "react";

function Clients() {
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current client index
  const clientsRef = useRef(null); // Reference for marquee content to manipulate scroll
  const transitionDuration = 0.3; // Duration of the scroll transition in seconds

  const clients = [
    "fireempire.png",
    "it-concerns.png",
    "NPADSN.png",
    "ysbuilders-logo.jpg",
    "SG.png",
    "maxholdings.png"
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







