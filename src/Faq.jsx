import React from "react";

function Faq() {
  return (
    <>
      <div className="faq-box">
        <div className="container-fluid d-flex" id="faq">
          <div className="container-fluid" id="faq-content">
            <h1 className="display-4 font-weight-bold">FAQ's</h1>

            <div
              className="container text-left justify-content-between "
              id="f-query"
            >
              <div className="row" id="faq-row">
                <div className="col-md-6 " id="faq-box-content">
                  <h2 className="question">What services does your company offer?</h2>

                  <p className="lead">
                    {" "}
                    {/* <i className="fa-solid fa-arrow-right" /> */}
                    We specialize in web and mobile application development, cloud computing, e-commerce solutions, software consulting, and digital transformation. We also offer UX/UI design, custom software development, and IT infrastructure management.
                  </p>
                  
                </div>
                <div className="col-md-6 " id="faq-box-content">
                  <h2 className="question">What technologies do you use in your projects?</h2>
                  <p className="lead">
                    {" "}
                    {/* <i className="fa-solid fa-arrow-right" /> */}
                    Our team uses a wide range of technologies, including JavaScript frameworks like React, cloud platforms like AWS and Microsoft Azure, database systems such as MongoDB and Firebase. We also work with HTML5, CSS3, Bootstrap for interactive web experiences.
                  </p>
                  
                </div>
                <hr/>
              </div>
              
              <div className="row" id="faq-row">
                <div className="col-md-6" id="faq-box-content">
                  <h2 className="question">Do you offer custom software development services?</h2>
                  <p className="lead">
                    {" "}
                    {/* <i className="fa-solid fa-arrow-right" /> */}
                    Yes, we provide custom software development tailored to your business needs. Our process involves an in-depth consultation to understand your requirements, followed by design, development, testing, and deployment phases. We ensure the final product aligns with your goals.
                  </p>
                  
                </div>
                <div className="col-md-6" id="faq-box-content">
                  <h2 className="question">How do you ensure the security of your software solutions?</h2>
                  <p className="lead">
                    {" "}
                    {/* <i className="fa-solid fa-arrow-right" /> */}
                    We follow industry-standard security protocols, conduct regular code reviews, and perform vulnerability assessments. Our solutions include encryption, multi-factor authentication, and regular software updates to prevent security breaches.
                  </p>
                  
                </div>
                <hr/>
              </div>
              <div className="row" id="faq-row">
                <div className="col-md-6" id="faq-box-content">
                  <h2 className="question">How do you manage project timelines and delivery?</h2>
                  <p className="lead">
                    {" "}
                    {/* <i className="fa-solid fa-arrow-right" /> */}
                    We follow Agile and Scrum methodologies to ensure transparency and timely delivery. By breaking the project into sprints, we can provide regular updates and adjust based on your feedback. We also use project management tools like Jira to track progress.
                  </p>
                  
                </div>
                <div className="col-md-6" id="faq-box-content">
                  <h2 className="question">What kind of support do you offer after project completion?</h2>
                  <p className="lead">
                    {" "}
                    {/* <i className="fa-solid fa-arrow-right" /> */}
                    We offer ongoing maintenance and support, including bug fixes, updates, and performance optimization. Our team is available for long-term support contracts or ad-hoc requests to ensure your solution remains up-to-date and efficient.
                  </p>
                  
                </div>
                <hr/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Faq;
