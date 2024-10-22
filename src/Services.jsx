import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true, // Animation occurs only once
    threshold: 0.2, // 20% of the component is visible
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="container-fluid"
      id="our-services"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeIn}
      transition={{ duration: 1 }}
    >
      <div className="our-services">
        <motion.header
          id="services-title"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 1, delay: 0.05 }}  // Reduced delay
        >
          Our Services: Our Most Popular Solution
        </motion.header>
        <motion.p
          className="lead"
          id="services-desc"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 1.1, delay: 0.1 }}  // Reduced delay
        >
          Digitalize your business to reach your market.
          <br />
          Use our team to build your system!
        </motion.p>
      </div>

      <div className="container text-center" id="teams">
        <div className="row">
          <div className="col">
            <motion.div
              className="img-box-services"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 1, delay: 0.2 }}  // Reduced delay
            >
              <img className="services-img" src="/images/icons/wd.png" />
            </motion.div>
            <motion.p
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 1.2, delay: 0.3 }}  // Reduced delay
            >
              Web Development
            </motion.p>
          </div>
          <div className="col">
            <motion.div
              className="img-box-services"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 1, delay: 0.4 }}  // Reduced delay
            >
              <img className="services-img" src="/images/icons/md.png" />
            </motion.div>
            <motion.p
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 1.2, delay: 0.5 }}  // Reduced delay
            >
              Mobile App Development
            </motion.p>
          </div>
          <div className="col">
            <motion.div
              className="img-box-services"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 1, delay: 0.6 }}  // Reduced delay
            >
              <img className="services-img" src="/images/icons/dm.png" />
            </motion.div>
            <motion.p
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 1.2, delay: 0.7 }}  // Reduced delay
            >
              Digital Marketing
            </motion.p>
          </div>
          <div className="col">
            <motion.div
              className="img-box-services"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 1, delay: 0.8 }}  // Reduced delay
            >
              <img className="services-img" src="/images/icons/ds.png" />
            </motion.div>
            <motion.p
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 1.2, delay: 0.9 }}  // Reduced delay
            >
              Data Science
            </motion.p>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <motion.div
              className="img-box-services"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 1, delay: 1.0 }}  // Reduced delay
            >
              <img className="services-img" src="/images/icons/uiux.png" />
            </motion.div>
            <motion.p
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 1.2, delay: 1.1 }}  // Reduced delay
            >
              UI/UX Design
            </motion.p>
          </div>
          <div className="col">
            <motion.div
              className="img-box-services"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 1, delay: 1.2 }}  // Reduced delay
            >
              <img className="services-img" src="/images/icons/seo.png" />
            </motion.div>
            <motion.p
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 1.2, delay: 1.3 }}  // Reduced delay
            >
              SEO
            </motion.p>
          </div>
          <div className="col">
            <motion.div
              className="img-box-services"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 1, delay: 1.4 }}  // Reduced delay
            >
              <img className="services-img" src="/images/icons/cw.png" />
            </motion.div>
            <motion.p
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 1, delay: 1.5 }}  // Reduced delay
            >
              Content Writing
            </motion.p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Services;
