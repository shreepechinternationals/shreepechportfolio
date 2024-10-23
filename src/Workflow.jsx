// import React, { useEffect } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// function Workflow() {
//   useEffect(() => {
//     const sections = document.querySelectorAll(".panel");
//     const container = document.querySelector(".container-scroll");

//     gsap.to(sections, {
//       xPercent: -100 * (sections.length - 1), // Move sections left based on their count
//       ease: "none",
//       scrollTrigger: {
//         trigger: container,
//         pin: true, // Pin the container
//         scrub: 1, // Smooth scrubbing
//         snap: 1 / (sections.length - 1), // Snap to sections
//         end: () => "+=" + container.offsetWidth, // End when the container is fully scrolled
//       },
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Clean up on unmount
//     };
//   }, []);

//   return (
//     <>
//       <div>
//         <div className="firstContainer">
//           <h1>Comic Book Style Horizontal Scrolling</h1>
//         </div>
//         <div className="container-scroll">
//           {/* First Section with 5 comic-style images */}
//           <section className="panel red">
//             <img src="/images/comic/1.png" alt="Comic Panel 1" />
//             <img src="/images/comic/2.png" alt="Comic Panel 2" />
//             <img src="/images/comic/3.png" alt="Comic Panel 3" />
//             <img src="/images/comic/4.png" alt="Comic Panel 4" />
//             <img src="/images/comic/5.png" alt="Comic Panel 5" />
//           </section>

//           {/* Second Section with 4 comic-style images */}
//           <section className="panel orange">
//             <img src="/images/comic/6.png" alt="Comic Panel 6" />
//             <img src="/images/comic/7.png" alt="Comic Panel 7" />
//             <img src="/images/comic/8.png" alt="Comic Panel 8" />
//             <img src="/images/comic/9.png" alt="Comic Panel 9" />
//           </section>

//           {/* Third Section with 5 comic-style images */}
//           <section className="panel purple">
//             <img src="/images/comic/10.png" alt="Comic Panel 10" />
//             <img src="/images/comic/11.png" alt="Comic Panel 11" />
//             <img src="/images/comic/12.png" alt="Comic Panel 12" />
//             <img src="/images/comic/13.png" alt="Comic Panel 13" />
//             <img src="/images/comic/14.png" alt="Comic Panel 14" />
//           </section>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Workflow;

import React from "react";
import "./workflow.css";

function Workflow() {
  return (
    <>
      <div className="workflow-main">
        
          <div className="container-fluid" id="workflow-content">
          
              <header id="workflow-title">Our Workflow</header>
              <p className="lead" id="workflow-desc">
                Partner with innovators delivering exceptional mobile and web apps
                on time and within budget.
              </p>
            
            <div className="workflow-steps">
              <div className="workflow-step">
                <img
                  src="/images/workflow-img/idea.png"
                  alt="Idea"
                  className="workflow-icon"
                />
                <h3>Idea</h3>
                <p>We offer a free, no-obligation consultation to discuss your project concept and assist you.</p>
              </div>

              <div className="workflow-step">
                <img
                  src="/images/workflow-img/uiux.png"
                  alt="UI/UX Design"
                  className="workflow-icon"
                />
                <h3>UI/UX design</h3>
                <p>Our clients collaborate with our product design team to bring their project concepts to life.</p>
              </div>

              <div className="workflow-step">
                <img
                  src="/images/workflow-img/development.png"
                  alt="Development"
                  className="workflow-icon"
                />
                <h3>Development</h3>
                <p>The development team begins coding, with the process organized into sprints.</p>
              </div>

              <div className="workflow-step">
                <img
                  src="/images/workflow-img/testing.png"
                  alt="Testing"
                  className="workflow-icon"
                />
                <h3>Testing</h3>
                <p>We thoroughly test all use cases, critical scenarios, and functionalities on real devices platforms.</p>
              </div>

              <div className="workflow-step">
                <img
                  src="/images/workflow-img/launching.png"
                  alt="Launching"
                  className="workflow-icon"
                />
                <h3>Launching</h3>
                <p>After a final round of QA and client approval, we handle the submission process.</p>
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
}

export default Workflow;

