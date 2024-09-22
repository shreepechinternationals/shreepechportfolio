import React from "react";
import "./index.css";
function header() {
  return (
    <>
      <div
        className="container-fluid vh-100 d-flex align-items-center"
        id="hero"
      >
        <div className="row w-100">
          <header id="title">Shreepech International</header>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1 className="display-4 font-weight-bold">
              Where Creativity Meets Technology.
            </h1>
            <p className="lead">
              Empowering Businesses with Digital Solutions!
              <br />
              At Shreepech International, we transform ideas into reality
              through cutting-edge technology, custom software, and cloud
              services. Let’s build the future together!
            </p>
            <div className="mt-4">
              <div>
                <button
                  type="button"
                  className="btn btn-primary"
                  id="lets-get-it"
                >
                  Let’s Get It
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  id="see-more"
                >
                  See More
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6 position-relative d-none d-md-block">
            {/* Floating rectangles */}
            <div className="rectangle r1" />
            <div className="rectangle r2" />
            <div className="rectangle r3" />
            <div className="rectangle r4" />
            <div className="rectangle r5" />
            <div className="rectangle r6" />
            <div className="rectangle r7" />
            <div className="rectangle r8" />
            <div className="rectangle r9" />
            <div className="rectangle r10" />
          </div>
        </div>
      </div>
    </>
  );
}

export default header;
