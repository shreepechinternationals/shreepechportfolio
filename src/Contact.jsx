import React from "react";

function Contact() {
  return (
    <div className="container mt-5" id="contact">
      <div className="row">
        <div className="col md-6">
          <h1 className="display-4 font-weight-bold">Contact Us.</h1>
          <p className="lead">
            Understanding your problem is the first step to
            <br /> creating a viable solution for you.
            <br />
          </p>

          <p className="lead">Connect with us on:</p>

          <div className="container custom-container">
            <div className="row g-0">
              <div className="col px-0">
                <div className="img-box-contact">
                  <img
                    className="contact-img"
                    src="https://static.vecteezy.com/system/resources/previews/023/986/891/original/instagram-logo-instagram-logo-transparent-instagram-icon-transparent-free-free-png.png"
                  />
                </div>
              </div>
              <div className="col px-0">
                <div className="img-box-contact">
                  <img
                    className="contact-img"
                    src="https://www.iconpacks.net/icons/2/free-facebook-logo-icon-2428-thumb.png"
                  />
                </div>
              </div>
              <div className="col px-0">
                <div className="img-box-contact">
                  <img
                    className="contact-img"
                    src="https://www.freepnglogos.com/uploads/linkedin-blue-style-logo-png-0.png"
                  />
                </div>
              </div>
              <div className="col px-0">
                <div className="img-box-contact">
                  <img
                    className="contact-img"
                    src="https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1726876800&semt=ais_hybrid"
                  />
                </div>
              </div>
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
            Monday to Friday: 8:00 AM - 5:00PM
          </p>
        </div>
        <div className="col-md-6">
         
        </div>
      </div>
    </div>
  );
}

export default Contact;
