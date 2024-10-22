import React from 'react';
import Copyright from './Copyright';

const WavyFooter = () => {
  return (
    <>
      {/* Footer Content */}
      <div id='wavy-footer-base'>
        <div className="container-fluid" id="footer-wave">
          <div className="wave-base">
            <div className="wave" id='wave1'></div>
            <div className="wave" id='wave2'></div>
            <div className="wave" id='wave3'></div>
            <div className="wave" id='wave4'></div>
          </div>
          <footer className="footer">
            <div className="container">
              <div className="row">
                {/* Logo Column */}
                <div className="col-md-3 footer-logo text-start">
                  <img src="/images/logo/shreepech.png" alt="Logo" />
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
                      </ul>
                    </div>
                    {/* Connect with Us Column */}
                    <div className="col-md-4">
                      <h4>Connect with Us</h4>
                      <ul className="list-unstyled">
                        <li><a href="https://www.instagram.com/shreepech.international?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='_blank'>Instagram</a></li>
                        <li><a href="https://www.facebook.com/people/Shreepech-International/61567752983133/" target='_blank'>Facebook</a></li>
                        <li><a href="https://www.linkedin.com/company/shreepech-international/" target='_blank'>LinkedIn</a></li>
                        <li><a href="https://mail.google.com/mail/?view=cm&fs=1&to=shreepechinternationals@gmail.com&su=Subject%20Here&body=Body%20text%20here" target='_blank'>E-Mail</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Copyright Footer */}
            <Copyright />
          </footer>
        </div>
      </div>
    </>
  );
};

export default WavyFooter;


