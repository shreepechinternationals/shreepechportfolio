import React from "react";
import { useSpring, animated } from "@react-spring/web";
import Carousel from 'react-bootstrap/Carousel';
import Navbar from "./Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';  // Assuming you'll place the custom styles in this file

function LandingPage() {
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

  return (
    <>
      <Navbar />
      <div className="landing-page">
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

            {/* Ensure carousel is visible on all screen sizes */}
            
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
