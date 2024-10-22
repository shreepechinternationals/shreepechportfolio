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
//           <h1>Testing horizontal scrolling w/ three sections</h1>
//           <h2>First Container</h2>
//         </div>
//         <div className="container-scroll">
//           {/* <div className="description panel blue">
//             <div>
//               SCROLL DOWN
//               <div className="scroll-down">
//                 <div className="arrow" />
//               </div>
//             </div>
//           </div> */}
//           <section className="panel red">ONE</section>
//           <section className="panel orange">TWO</section>
//           <section className="panel purple">THREE</section>
//         </div>
        
//       </div>
//     </>
//   );
// }

// export default Workflow;

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
          <h1>Comic Book Style Horizontal Scrolling</h1>
        </div>
        <div className="container-scroll">
          {/* First Section with 5 comic-style images */}
          <section className="panel red">
            <img src="/images/comic/1.png" alt="Comic Panel 1" />
            <img src="/images/comic/2.png" alt="Comic Panel 2" />
            <img src="/images/comic/3.png" alt="Comic Panel 3" />
            <img src="/images/comic/4.png" alt="Comic Panel 4" />
            <img src="/images/comic/5.png" alt="Comic Panel 5" />
          </section>

          {/* Second Section with 4 comic-style images */}
          <section className="panel orange">
            <img src="/images/comic/6.png" alt="Comic Panel 6" />
            <img src="/images/comic/7.png" alt="Comic Panel 7" />
            <img src="/images/comic/8.png" alt="Comic Panel 8" />
            <img src="/images/comic/9.png" alt="Comic Panel 9" />
          </section>

          {/* Third Section with 5 comic-style images */}
          <section className="panel purple">
            <img src="/images/comic/10.png" alt="Comic Panel 10" />
            <img src="/images/comic/11.png" alt="Comic Panel 11" />
            <img src="/images/comic/12.png" alt="Comic Panel 12" />
            <img src="/images/comic/13.png" alt="Comic Panel 13" />
            <img src="/images/comic/14.png" alt="Comic Panel 14" />
          </section>
        </div>
      </div>
    </>
  );
}

export default Workflow;
