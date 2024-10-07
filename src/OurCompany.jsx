

import React from "react";
import { motion } from "framer-motion";  // Import framer-motion

function OurCompany() {
  // Define animation variants for the left and right side content
  const fadeInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.2 } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.2} },
  };

  return (
    <>
      <div className="container mt-5" id="our-company">
        <div className="our-services">
          <header id="members-title">About Us</header>
        </div>

        <div className="section-primary" id="value-content">
          <div className="row">
            <motion.div
              className="col-md-6 d-flex flex-column justify-content-center"
              initial="hidden"
              whileInView="visible"
              variants={fadeInLeft}
              viewport={{ once: true }}
            >
              <div className="img-box">
                <img
                  src="https://img.freepik.com/free-photo/close-up-hands-business-concept_23-2149151165.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1727136000&semt=ais_hybrid"
                  alt=""
                />
              </div>
            </motion.div>

            <motion.div
              className="col-md-6 d-flex flex-column justify-content-center"
              initial="hidden"
              whileInView="visible"
              variants={fadeInRight}
              viewport={{ once: true }}
              id="company-contents">
              <h2>Who We Are</h2>
              <p className="lead">
                At Shreepech International, we are a team of passionate
                innovators, engineers, and tech enthusiasts committed to
                delivering advanced digital solutions. With a focus on quality
                and customer satisfaction, we bring expertise in software
                development, cloud services, and IT consulting, helping
                businesses thrive in an ever-evolving digital landscape.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="section-primary" id="value-content">
          <div className="row">
            <motion.div
              className="col-md-6 d-flex flex-column justify-content-center"
              initial="hidden"
              whileInView="visible"
              variants={fadeInRight}
              viewport={{ once: true }}
              id="company-contents">
              <h2>Our Mission</h2>
              <p className="lead">
                Our mission is to harness the power of technology to deliver
                innovative, scalable, and sustainable solutions that empower
                businesses. We strive to drive digital transformation, enhance
                efficiency, and create value for our clients through
                cutting-edge software, cloud services, and IT consulting,
                ensuring success in a rapidly evolving world.
              </p>
            </motion.div>

            <motion.div
              className="col-md-6 d-flex flex-column justify-content-center"
              initial="hidden"
              whileInView="visible"
              variants={fadeInLeft}
              viewport={{ once: true }}
            >
              <div className="img-box">
                <img
                  src="https://st.depositphotos.com/1000423/1637/i/450/depositphotos_16370285-stock-photo-hand-pushing-on-a-touch.jpg"
                  alt=""
                />
              </div>
            </motion.div>
          </div>
        </div>

        <div className="section-primary" id="value-content">
          <div className="row">
            <motion.div
              className="col-md-6 d-flex flex-column justify-content-center"
              initial="hidden"
              whileInView="visible"
              variants={fadeInLeft}
              viewport={{ once: true }}
            >
              <div className="img-box">
                <img
                  src="https://img.freepik.com/free-photo/businessman-pointing-his-presentation-futuristic-digital-screen_53876-102617.jpghttps://img.freepik.com/free-photo/people-office-analyzing-checking-finance-graphs_23-2150377138.jpg"
                  alt=""
                />
              </div>
            </motion.div>

            <motion.div
              className="col-md-6 d-flex flex-column justify-content-center"
              initial="hidden"
              whileInView="visible"
              variants={fadeInRight}
              viewport={{ once: true }}
              id="company-contents">
              <h2>Our Vision</h2>
              <p className="lead">
                Our vision is to be a leader in technology innovation, shaping
                the future by driving digital transformation across industries.
                We aim to create impactful solutions that enhance business
                growth, empower communities, and contribute to a more connected
                and sustainable world through continuous innovation and
                excellence in technology.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="section-primary" id="value-content">
          <div className="row">
            <motion.div
              className="col-md-6 d-flex flex-column justify-content-center"
              initial="hidden"
              whileInView="visible"
              variants={fadeInRight}
              viewport={{ once: true }}
            id="company-contents">
              <h2>Future Plans</h2>
              <p className="lead">
                Our future plans focus on expanding our services to incorporate
                emerging technologies. We aim to enhance our global presence,
                foster strategic partnerships, and continue innovating to
                provide cutting-edge solutions that drive growth, efficiency,
                and sustainability for our clients.
              </p>
            </motion.div>

            <motion.div
              className="col-md-6 d-flex flex-column justify-content-center"
              initial="hidden"
              whileInView="visible"
              variants={fadeInLeft}
              viewport={{ once: true }}
            >
              <div className="img-box">
                <img
                  src="https://img.freepik.com/free-photo/top-view-time-plan-written-sticky-note-female-hands-blue-table_140725-145310.jpg?size=626&ext=jpg&ga=GA1.1.1819120589.1727136000&semt=ais_hybrid"
                  alt=""
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurCompany;
