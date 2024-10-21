import React, { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    query: "",
    phoneNumber: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.query || !formData.phoneNumber) {
      setErrorMessage("Please fill out all required fields.");
      return;
    }
    setErrorMessage("");
    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      query: formData.query,
      phoneNumber: formData.phoneNumber,
    };

    // Send form data to EmailJS
    emailjs
      .send(
        "service_j67jkes", // Replace with your EmailJS service ID
        "template_b7roi7b", // Replace with your EmailJS template ID
        templateParams,
        "X5VO48dQVvMyIuPKp" // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSubmitted(true);
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            query: "",
            phoneNumber: "",
          });
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
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
            <p className="lead">Connect with us on:</p>
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
            <p className="lead" id="contact-details">
              Or,
              <br />
              Direct Call: +977 9802318496, +977 9861352004
            </p>
            <p className="lead" id="contact-details">
              Conversing Time:
              <br />
              Monday - Friday, 08:00 AM - 5:00 PM
            </p>
          </div>
          <div className="col-md-6 d-md-block" id="contact-us-contents">
            <p className="lead" id="contact-details-reach">
              Reach us via Email:
            </p>
            <form onSubmit={handleSubmit}>
              <div className="container" id="form-container">
                <div className="row">
                  <div className="col-md-6">
                  <label>
                    First Name <span style={{ color: 'red' }}>*</span>
                  </label>
                    <input
                      type="text"
                      className="form-control"
                      name="firstName" 
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First Name "
                      
                    />
                  </div>
                  <div className="col-md-6">
                  <label>
                    Last Name <span style={{ color: 'red' }}>*</span>
                  </label>
                    <input
                      type="text"
                      className="form-control"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last Name"
                      
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                  <label>
                    Email <span style={{ color: 'red' }}>*</span>
                  </label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                  <label>
                    Query <span style={{ color: 'red' }}>*</span>
                  </label>
                    <select
                      className="form-control select-dropdown"
                      name="query"
                      value={formData.query}
                      onChange={handleChange}
                      
                    >
                      <option value="">Select Service of Query</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Mobile App Development">
                        Mobile App Development
                      </option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="Digital Marketing">
                        Digital Marketing
                      </option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                  <label>
                    Phone <span style={{ color: 'red' }}>*</span>
                  </label>
                    <input
                      type="text"
                      className="form-control"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      
                    />
                  </div>
                </div>
                {/* Add a message box */}
                <div className="row">
                  <div className="col-md-12">
                  <label>
                    Message
                  </label>
                    <textarea
                      className="form-control"
                      name="message"
                      value={formData.message || ""}
                      onChange={handleChange}
                      placeholder="Your Message"
                      rows="4"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="form-group text-center mt-3">
                <button type="submit" className="btn btn-primary" id="submit">
                  Send Mail <i className="fas fa-paper-plane" />
                </button>
                {submitted && (
                    <p className="lead text-success ">
                      Your message has been sent! We'll get back to you shortly.
                    </p>
                  )}
                  {errorMessage && (
                    <p className="lead text-danger ">{errorMessage}</p>
                  )}
                <p className="lead" id="reach-us">
                  *Our Team will respond to your mail shortly after the mail has
                  been received.
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
