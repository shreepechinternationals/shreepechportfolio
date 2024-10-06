// import React from "react";

// function Services() {
//   return (
//     <div className="container-fluid" id="our-services">
//         <div className="our-services">
//       <header id="services-title">Our Services: Our Most Popular Solution</header>
//       <p className="lead" id="services-desc">Digitalize your business to reach your market.<br/>Use our team to build your system !</p>
//       </div>
//         <div className="container text-center" id="teams">
//             <div className="row">
//                 <div className="col">
//                     <div className="img-box-services">
//                         <img className="services-img" src="images/icons/wd.png"/>
//                     </div>
//                 <p>Web Development</p>
//                 </div>
//                 <div className="col">
//                 <div className="img-box-services">
//                         <img className="services-img" src="images/icons/md.png"/>
//                     </div>
//                 <p>Mobile App Development</p>
//                 </div>
//                 <div className="col">
//                 <div className="img-box-services">
//                         <img className="services-img" src="images/icons/dm.png"/>
//                     </div>
//                 <p>Digital Marketing</p>
//                 </div>
//                 <div className="col">
//                 <div className="img-box-services">
//                         <img className="services-img" src="images/icons/ds.png"/>
//                     </div>
//                 <p>Data Science</p>
//                 </div>
//             </div>

//             <div className="row">
//                 <div className="col">
//                 <div className="img-box-services">
//                         <img className="services-img" src="images/icons/uiux.png"/>
//                     </div>
//                 <p>UI/UX Design</p>
//                 </div>
//                 <div className="col">
//                 <div className="img-box-services">
//                         <img className="services-img" src="images/icons/seo.png"/>
//                     </div>
//                 <p>SEO</p>
//                 </div>
//                 <div className="col">
//                 <div className="img-box-services">
//                         <img className="services-img" src="images/icons/cw.png"/>
//                     </div>
//                 <p>Content Writing</p>
//                 </div>
                
//             </div>
//         </div>
//     </div>

//   )
// }

// export default Services

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
          transition={{ duration: 1, delay: 0.1 }}
        >
          Our Services: Our Most Popular Solution
        </motion.header>
        <motion.p
          className="lead"
          id="services-desc"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 1.1, delay: 0.3 }}
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
              transition={{ duration: 1, delay: 0.4 }}
            >
              <img className="services-img" src="images/icons/wd.png" />
            </motion.div>
            <motion.p
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 1.2, delay: 0.6 }}
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
              transition={{ duration: 1, delay: 0.8 }}
            >
              <img className="services-img" src="images/icons/md.png" />
            </motion.div>
            <motion.p
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 1.2, delay: 1 }}
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
              transition={{ duration: 1, delay: 1.2 }}
            >
              <img className="services-img" src="images/icons/dm.png" />
            </motion.div>
            <motion.p
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 1.2, delay: 1.4 }}
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
              transition={{ duration: 1, delay: 1.6 }}
            >
              <img className="services-img" src="images/icons/ds.png" />
            </motion.div>
            <motion.p
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 1.2, delay: 1.8 }}
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
              transition={{ duration: 1, delay: 2.0 }}
            >
              <img className="services-img" src="images/icons/uiux.png" />
            </motion.div>
            <motion.p
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 1.2, delay: 2.2 }}
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
              transition={{ duration: 1, delay: 2.4 }}
            >
              <img className="services-img" src="images/icons/seo.png" />
            </motion.div>
            <motion.p
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 1.2, delay: 2.6 }}
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
              transition={{ duration: 1, delay: 2.8 }}
            >
              <img className="services-img" src="images/icons/cw.png" />
            </motion.div>
            <motion.p
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 1, delay: 3 }}
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

