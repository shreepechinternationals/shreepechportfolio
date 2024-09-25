import React from "react";

function Activities() {
  return (
    <>
      <div className="container-fluid" id="abt-us">
        <header id="about-us-title">How We Achieve Work</header>
        <div className="container my-5">
          <div className="row justify-content-center align-items-center position-relative">
            <div className="col-md-4 workflow-step">
              <img
                src="images/activities/1.jpg"
                alt="Send in your requirement"
              />
              <p>Send in your requirement</p>
            </div>
            <div className="col-md-1 workflow-arrow long-horizontal-arrow" />
            
            <div className="col-md-4 workflow-step">
              <img
                src="images/activities/2.jpg"
                alt="Communicate on Project terms"
              />
              <p>Communicate on Project terms</p>
            </div>
          </div>
          <div className="row justify-content-center align-items-center mt-4 position-relative">
            <div className="col-md-1">
              <div className="col-md-1 workflow-arrow vertical-arrow" /> 
              
              <div className="col-md-4 workflow-step">
                <img src="images/activities/3.jpg" alt="Project Begins" />
                <p>Project Begins</p>
              </div>
              <div className="col-md-1 workflow-arrow long-horizontal-arrow" />
             
              <div className="col-md-4 workflow-step">
                <img src="images/activities/4.jpg" alt="Build your project" />
                <p>Build your project</p>
              </div>
            </div>
            <div className="row justify-content-center align-items-center mt-4 position-relative">
              
              <div className="col-md-4 workflow-step">
                <img src="images/activities/5.jpg" alt="Deliver Project" />
                <p>Deliver Project</p>
              </div>
              <div className="col-md-1 workflow-arrow long-horizontal-arrow" />
              
              <div className="col-md-4 workflow-step">
                <img src="images/activities/6.jpg" alt="Complete Payment" />
                <p>Complete Payment</p>
                <div className="workflow-arrow curved-arrow" /> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Activities;
