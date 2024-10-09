
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
    delay: 900, // Delay for title and tagline
  });

  const buttonAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 220, friction: 30 },
    delay: 1200, // Delay for buttons after title
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

// import React from "react";
// import { useSpring, animated } from "@react-spring/web";
// import "./index.css";
// import Navbar from "./Navbar";

// function Header() {
//   // Animation for the title, tagline, and buttons
//   const titleAnimation = useSpring({
//     from: { opacity: 0, transform: 'translateY(-20px)' },
//     to: { opacity: 1, transform: 'translateY(0)' },
//     config: { tension: 220, friction: 30 },
//     delay: 900, // Delay for title and tagline
//   });

//   const buttonAnimation = useSpring({
//     from: { opacity: 0, transform: 'translateY(20px)' },
//     to: { opacity: 1, transform: 'translateY(0)' },
//     config: { tension: 220, friction: 30 },
//     delay: 1200, // Delay for buttons after title
//   });

//   // Animation for the images with staggered delays
//   const imageAnimations = Array.from({ length: 7 }, (_, index) =>
//     useSpring({
//       from: { opacity: 0, transform: 'scale(0)' },
//       to: { opacity: 1, transform: 'scale(1)' },
//       config: { tension: 220, friction: 30 },
//       delay: 1200 + index * 100, // Start images after the buttons, staggered
//     })
//   );

//   // Image sources for the floating images
//   const imageSources = [
//     "",
//     "https://img.freepik.com/free-photo/close-up-hands-business-concept_23-2149151165.jpg?t=st=1728195899~exp=1728199499~hmac=8d13fcc17c8ce1b4706df79ce7fc07dfaf5dcdf1d2da606c8c1cc3d33e6837d3&w=1060",
//     "https://img.freepik.com/free-vector/blue-futuristic-networking-technology-vector_53876-151537.jpg?t=st=1728211992~exp=1728215592~hmac=65e7b3c7e11ca7ba884ae37bef9f08f77874a348348b71d1780db31ea2458814&w=360",
//     "https://img.freepik.com/free-photo/international-day-education-futuristic-style_23-2150998775.jpg?t=st=1728196368~exp=1728199968~hmac=1d82cb5b34fa6266f8ed38909690f0b2e24fb21dc0d368a4cab7a5e1ddf6479c&w=740",
//     "https://img.freepik.com/free-photo/business-concept-with-team-close-up_23-2149151159.jpg?t=st=1728195227~exp=1728198827~hmac=6b7110c250af91a95c57b7bce9033ac2a7523dee32f62b28a3a029f4301be98a&w=1060",
//     "https://img.freepik.com/free-photo/futuristic-school-classroom-future-students_23-2150906356.jpg?t=st=1728196489~exp=1728200089~hmac=6b047c7297270b04f23be697045b4eb98cf3de88677193d01930fa6878530d99&w=740",
//     "https://img.freepik.com/free-photo/cyber-security-experts-working-with-tech-devices-neon-lights_23-2151645635.jpg?t=st=1728196418~exp=1728200018~hmac=0ebd60f3dde67e8cc17c7d35d4464baf894b0f21459f84bb92467f42c4fae24d&w=740",
//     "https://img.freepik.com/free-photo/enter-internet-computer-privacy-system-protection-concept_53876-139706.jpg?t=st=1728196076~exp=1728199676~hmac=9427ec542b907082cdf3b093f49076a9016c5d2937f74cc59edfa90c9077a03d&w=1380",
    
//   ];

//   return (
//     <>
//       <div className="landing-page">
//         <Navbar />
//         <div className="container-fluid d-flex align-items-center" id="hero">
//           <div className="row">
//             <div className="col-md-6 d-flex flex-column">
//               <animated.header id="title" style={titleAnimation}>
//                 Welcome to Shreepech International...
//               </animated.header>
//               <animated.h1 className="display-4 font-weight-bold" id="tagline" style={titleAnimation}>
//                 Where Creativity Meets Technology.
//               </animated.h1>
//               <animated.p className="lead" style={titleAnimation}>
//                 Empowering Businesses with Digital Solutions!
//                 <br />
//                 At Shreepech International, we transform ideas into reality
//                 through cutting-edge technology, custom software, and cloud
//                 services. Let’s build the future together!
//               </animated.p>
//               <div className="mt-4">
//                 <div>
//                   <animated.button
//                     type="button"
//                     className="btn"
//                     id="lets-get-it"
//                     style={buttonAnimation}
//                   >
//                     Let’s Get It
//                   </animated.button>
//                   <animated.button
//                     type="button"
//                     className="btn"
//                     id="see-more"
//                     style={buttonAnimation}
//                   >
//                     See More
//                   </animated.button>
//                 </div>
//               </div>
//             </div>
            
//             <div className="col-md-6 position-relative d-none d-md-block">
//               {/* Floating images */}
//               {imageAnimations.map((animation, index) => (
//                 <animated.img
//                   key={index}
//                   className={`rectangle r${index + 1}`}
//                   src={imageSources[index + 1]}
//                   alt={`Floating Image ${index + 1}`}
//                   style={animation}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Header;
