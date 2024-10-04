// import React from "react";
// import "./index.css";

// function header() {
//   return (
//     <>
    
//     <div className="landing-page">
//       <div
//         className="container-fluid d-flex align-items-center"
//         id="hero"
//       >
//         <div className="row w-100">
//           <header id="title"> Welcome to Shreepech International...</header>
//           <div className="col-md-6 d-flex flex-column">
//             <h1 className="display-4 font-weight-bold" id="tagline">
//               Where Creativity Meets Technology.
//             </h1>
//             <p className="lead">
//               Empowering Businesses with Digital Solutions!
//               <br />
//               At Shreepech International, we transform ideas into reality
//               through cutting-edge technology, custom software, and cloud
//               services. Let’s build the future together!
//             </p>
//             <div className="mt-4">
//               <div>
//                 <button
//                   type="button"
//                   className="btn "
//                   id="lets-get-it"
//                 >
//                   Let’s Get It
//                 </button>
//                 <button
//                   type="button"
//                   className="btn"
//                   id="see-more"
//                 >
//                   See More
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-6 position-relative d-none d-md-block">
//             {/* Floating rectangles */}
//             <div className="rectangle r1" />
//             <div className="rectangle r2" />
//             <div className="rectangle r3" />
//             <div className="rectangle r4" />
//             <div className="rectangle r5" />
//             <div className="rectangle r6" />
//             <div className="rectangle r7" />
//             {/* <div className="rectangle r8" />
//             <div className="rectangle r9" /> */}
//             {/* <div className="rectangle r10"/> */}
            
//           </div>
//         </div>
//       </div>
//       </div>
//     </>
//   );
// }

// export default header;

import React from "react";
import { useSpring, animated } from "@react-spring/web";
import "./index.css";
import Navbar from "./Navbar";


function Header() {
  // Animation for the title, tagline, and buttons
  const titleAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(-20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 220, friction: 30 },
    delay: 600, // Delay for title and tagline
  });

  const buttonAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 220, friction: 30 },
    delay: 900, // Delay for buttons after title
  });

  // Animation for the rectangles with staggered delays
  const rectangleAnimations = Array.from({ length: 7 }, (_, index) => useSpring({
    from: { opacity: 0, transform: 'scale(0)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: { tension: 220, friction: 30 },
    delay: 1200 + index * 100, // Start rectangles after the buttons (1200ms), increasing delay for each rectangle
  }));

  return (
    <>
      

      <div className="landing-page">
      <Navbar/>
        <div className="container-fluid d-flex align-items-center" id="hero">
          <div className="row">
            <div className="col-md-6 d-flex flex-column">
              <animated.header id="title" style={titleAnimation}>
                Welcome to Shreepech International...
              </animated.header>
              <animated.h1 className="display-4 font-weight-bold" id="tagline" style={titleAnimation}>
                Where Creativity Meets Technology.
              </animated.h1>
              <animated.p className="lead" style={titleAnimation}>
                Empowering Businesses with Digital Solutions!
                <br />
                At Shreepech International, we transform ideas into reality
                through cutting-edge technology, custom software, and cloud
                services. Let’s build the future together!
              </animated.p>
              <div className="mt-4">
                <div>
                  <animated.button
                    type="button"
                    className="btn"
                    id="lets-get-it"
                    style={buttonAnimation}
                  >
                    Let’s Get It
                  </animated.button>
                  <animated.button
                    type="button"
                    className="btn"
                    id="see-more"
                    style={buttonAnimation}
                  >
                    See More
                  </animated.button>
                </div>
              </div>
            </div>
            <div className="col-md-6 position-relative d-none d-md-block">
              {/* Floating rectangles */}
              {rectangleAnimations.map((animation, index) => (
                <animated.div key={index} className={`rectangle r${index + 1}`} style={animation} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
