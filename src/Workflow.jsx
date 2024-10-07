import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Workflow() {
  useEffect(() => {
    const sections = document.querySelectorAll(".panel");
    const container = document.querySelector(".container-scroll");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1), // Move sections left based on their count
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true, // Pin the container
        scrub: 1, // Smooth scrubbing
        snap: 1 / (sections.length - 1), // Snap to sections
        end: () => "+=" + container.offsetWidth, // End when the container is fully scrolled
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Clean up on unmount
    };
  }, []);

  return (
    <>
      <div>
        <div className="firstContainer">
          <h1>Testing horizontal scrolling w/ three sections</h1>
          <h2>First Container</h2>
        </div>
        <div className="container-scroll">
          {/* <div className="description panel blue">
            <div>
              SCROLL DOWN
              <div className="scroll-down">
                <div className="arrow" />
              </div>
            </div>
          </div> */}
          <section className="panel red">ONE</section>
          <section className="panel orange">TWO</section>
          <section className="panel purple">THREE</section>
        </div>
        
      </div>
    </>
  );
}

export default Workflow;
