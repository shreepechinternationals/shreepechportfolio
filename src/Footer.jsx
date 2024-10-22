import React, { useEffect, useRef } from "react";
import Threejs from "./Threejs";
import Copyright from "./Copyright";
function Footer() {
  

  return (
    <>

      {/* Footer Content */}
      <div className="container-fluid" id="footer" style={{ position: "relative", zIndex: 1 }}>
        <footer className="footer">
        <div id="threejs-background">
            <Threejs />
        </div>
          <div className="container">
            <div className="row">
              {/* Logo Column */}
              <div className="col-md-3 footer-logo text-start">
                <img src="public/images/logo/shreepech.png" alt="Logo" />
              </div>
              {/* Other Columns */}
              <div className="col-md-9">
                <div className="row">
                  {/* Services Column */}
                  <div className="col-md-4">
                    <h4>Services</h4>
                    <ul className="list-unstyled">
                      <li><a href="#">Web Development</a></li>
                      <li><a href="#">Mobile App Development</a></li>
                      <li><a href="#">Digital Marketing</a></li>
                      <li><a href="#">Data Science</a></li>
                      <li><a href="#">UI/UX Design</a></li>
                      <li><a href="#">SEO</a></li>
                      <li><a href="#">Content Writing</a></li>
                    </ul>
                  </div>
                  {/* Company Column */}
                  <div className="col-md-4">
                    <h4>Company</h4>
                    <ul className="list-unstyled">
                      <li><a href="#">Why Us?</a></li>
                      <li><a href="#">Career</a></li>
                      <li><a href="#">Blogs</a></li>
                      <li><a href="#">Contact Us</a></li>
                      {/* <li><a href="#">Sitemap</a></li> */}
                    </ul>
                  </div>
                  {/* Connect with Us Column */}
                  <div className="col-md-4">
                    <h4>Connect with Us</h4>
                    <ul className="list-unstyled">
                      <li><a href="#">Instagram</a></li>
                      <li><a href="#">Facebook</a></li>
                      <li><a href="#">LinkedIn</a></li>
                      <li><a href="#">E-Mail</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Copyright Footer */}
          <Copyright/>
        </footer>
        
      </div>
    </>
  );
}

export default Footer;
