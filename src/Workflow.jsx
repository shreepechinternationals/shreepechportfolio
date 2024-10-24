

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



