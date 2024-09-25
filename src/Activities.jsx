import React from "react";

function Activities() {
  return (
    <>
      <div className="container">
        <div className="our-services">
          <header id="about-us-title">How We Work</header>
          <p className="lead" id="services-desc">
            We gather requirements, discuss terms, build the project,
            <br /> deliver it, and finalize with payment.
          </p>
        </div>
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <div className="activities-box">
                <img className="activities-img" src="images/activities/1.jpg" />
              </div>
              <h2 className="name">Send in your requirements</h2>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="activities-box">
                <img className="activities-img" src="images/activities/2.jpg" />
              </div>
              <h2 className="name">Communicate on Project Terms</h2>
            </div>
            <div className="col">
              <div className="activities-box">
                <img className="activities-img" src="images/activities/3.jpg" />
              </div>
              <h2 className="name">Project Begins</h2>
            </div>
            <div className="col">
              <div className="activities-box">
                <img className="activities-img" src="images/activities/6.jpg" />
              </div>
              <h2 className="name">Build Your Project</h2>
            </div>
            <div className="row">
              <div className="col">
                <div className="activities-box">
                  <img
                    className="activities-img"
                    src="images/activities/5.jpg"
                  />
                </div>
                <h2 className="name">Deliver Project</h2>
              </div>
            
            <div className="col">
              <div className="activities-box">
                <img className="activities-img" src="images/activities/4.jpg" />
              </div>
              <h2 className="name">Complete Payment</h2>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Activities;
