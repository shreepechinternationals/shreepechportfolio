import React from "react";

function Contact() {
  return (
    <>
      <div className="container-fluid d-flex align-items-center" id="contact">
        <div className="row w-100">
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1 className="display-4 font-weight-bold">Contact Us.</h1>
            <p className="lead">
              Understanding your problem is the first step to creating a viable
              solution for you.
            </p>
            <p className="lead">Connect us on:</p>
            <div className="container">
              <div className="social-icons d-flex">
                <a href="#" className="instagram" aria-label="Instagram">
                  <div className="contact-box-icon">
                    <img
                      className="contact-img"
                      src="images/icons/instagram.webp"
                    />
                  </div>
                </a>
                <a href="#" className="facebook" aria-label="Facebook">
                  <div className="contact-box-icon">
                    <img
                      className="contact-img"
                      src="images/icons/facebook.png"
                    />
                  </div>
                </a>
                <a href="#" className="linkedin" aria-label="LinkedIn">
                  <div className="contact-box-icon">
                    <img
                      className="contact-img"
                      src="images/icons/linkedin.png"
                    />
                  </div>
                </a>
                <a href="#" className="twitter" aria-label="Twitter">
                  <div className="contact-box-icon">
                    <img className="contact-img" src="images/icons/x.png" />
                  </div>
                </a>
              </div>
            </div>
            <p className="lead">
              Or,
              <br />
              Direct Call: +977 9802318496, +977 9861352004
            </p>
            <p className="lead">
              Conversing Time:
              <br />
              Monday - Friday, 08:00 AM - 5:00 PM
            </p>
          </div>
          <div className="col-md-6 d-md-block">
            <p className="lead" id="reach-us">Reach us via Email:</p>
            <form>
              <div className="container" id="form-container">
                <div className="row">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="col">
                    
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      id="query"
                      placeholder="Service of Query"
                    />
                  </div>
                  <div className="col">
                    
                    <input
                      type="text"
                      className="form-control"
                      id="phone-number"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
              </div>
            </form>
            <div className="form-group text-center">
            <button type="button" className="btn btn-primary " id="submit">Send Mail <i className="fas fa-paper-plane"/></button>
            <p className="lead" id="reach-us">*Our Team will respond to your mail shortly after the mail has been received.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
