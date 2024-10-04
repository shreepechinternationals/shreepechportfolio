import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    query: "",
    phoneNumber: "",
  });
  const [submitted, setSubmitted] = useState(false); // Track if the form has been submitted

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // Here, you would typically send formData to your server or API.
    console.log("Form submitted:", formData);
    setSubmitted(true); // Update submitted state
    // Optionally reset the form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      query: "",
      phoneNumber: "",
    });
  };

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
                      alt="Instagram"
                    />
                  </div>
                </a>
                <a href="#" className="facebook" aria-label="Facebook">
                  <div className="contact-box-icon">
                    <img
                      className="contact-img"
                      src="images/icons/facebook.png"
                      alt="Facebook"
                    />
                  </div>
                </a>
                <a href="#" className="linkedin" aria-label="LinkedIn">
                  <div className="contact-box-icon">
                    <img
                      className="contact-img"
                      src="images/icons/linkedin.png"
                      alt="LinkedIn"
                    />
                  </div>
                </a>
                <a href="#" className="twitter" aria-label="Twitter">
                  <div className="contact-box-icon">
                    <img
                      className="contact-img"
                      src="images/icons/x.png"
                      alt="Twitter"
                    />
                  </div>
                </a>
              </div>
            </div>
            <p className="lead" id='contact-details'>
              Or,
              <br />
              Direct Call: +977 9802318496, +977 9861352004
            </p>
            <p className="lead" id='contact-details'>
              Conversing Time:
              <br />
              Monday - Friday, 08:00 AM - 5:00 PM
            </p>
          </div>
          <div className="col-md-6 d-md-block">
            <p className="lead" id='contact-details-reach'>Reach us via Email:</p>
            <form onSubmit={handleSubmit}>
              <div className="container" id="form-container">
                <div className="row">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      name="query"
                      value={formData.query}
                      onChange={handleChange}
                      placeholder="Service of Query"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="form-group text-center mt-3">
                <button type="submit" className="btn btn-primary" id="submit">
                  Send Mail <i className="fas fa-paper-plane" />
                </button>
                {submitted && (
                  <p className="lead text-success mt-2">
                    Your message has been sent! We'll get back to you shortly.
                  </p>
                )}
                <p className="lead" id="reach-us">
                  *Our Team will respond to your mail shortly after the mail has been received.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
