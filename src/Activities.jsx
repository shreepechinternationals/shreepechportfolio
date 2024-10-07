
// import React from "react";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// function Activities() {
//   const [ref, inView] = useInView({
//     triggerOnce: true, // Animation occurs only once
//     threshold: 0.2, // 20% of the component is visible
//   });

//   const fadeIn = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//   };

//   return (
//     <>
//       <div className="container" ref={ref}>
//         <div className="our-services">
//           <header id="members-title">How We Work</header>
//           <p className="lead" id="services-desc">
//             We gather requirements, discuss terms, build the project,
//             <br /> deliver it, and finalize with payment.
//           </p>
//         </div>

//         {/* First Row */}
//         <div className="container text-center">
//           <div className="row">
//             <div className="col">
//               <motion.div
//                 className="activities-box"
//                 initial="hidden"
//                 animate={inView ? "visible" : "hidden"}
//                 variants={fadeIn}
//                 transition={{ duration: 1, delay: 0.2 }}
//               >
//                 <img className="activities-img" src="images/activities/1.jpg" />
//               </motion.div>
//               <motion.h2
//                 className="name"
//                 initial="hidden"
//                 animate={inView ? "visible" : "hidden"}
//                 variants={fadeIn}
//                 transition={{ duration: 1.2, delay: 0.4 }}
//               >
//                 Send in your requirements
//               </motion.h2>
//             </div>
//           </div>
//         </div>

//         {/* Second Row */}
//         <div className="container text-center">
//           <div className="row">
//             <div className="col">
//               <motion.div
//                 className="activities-box"
//                 initial="hidden"
//                 animate={inView ? "visible" : "hidden"}
//                 variants={fadeIn}
//                 transition={{ duration: 1, delay: 1.6 }} // Delay added between rows
//               >
//                 <img className="activities-img" src="images/activities/2.jpg" />
//               </motion.div>
//               <motion.h2
//                 className="name"
//                 initial="hidden"
//                 animate={inView ? "visible" : "hidden"}
//                 variants={fadeIn}
//                 transition={{ duration: 1.2, delay: 1.8 }}
//               >
//                 Communicate on Project Terms
//               </motion.h2>
//             </div>
//             <div className="col">
//               <motion.div
//                 className="activities-box"
//                 initial="hidden"
//                 animate={inView ? "visible" : "hidden"}
//                 variants={fadeIn}
//                 transition={{ duration: 1, delay: 2 }} // Delays for second row
//               >
//                 <img className="activities-img" src="images/activities/3.jpg" />
//               </motion.div>
//               <motion.h2
//                 className="name"
//                 initial="hidden"
//                 animate={inView ? "visible" : "hidden"}
//                 variants={fadeIn}
//                 transition={{ duration: 1.2, delay: 2.2 }}
//               >
//                 Project Begins
//               </motion.h2>
//             </div>
//             <div className="col">
//               <motion.div
//                 className="activities-box"
//                 initial="hidden"
//                 animate={inView ? "visible" : "hidden"}
//                 variants={fadeIn}
//                 transition={{ duration: 1, delay: 2.4 }} // Delays for second row
//               >
//                 <img className="activities-img" src="images/activities/6.jpg" />
//               </motion.div>
//               <motion.h2
//                 className="name"
//                 initial="hidden"
//                 animate={inView ? "visible" : "hidden"}
//                 variants={fadeIn}
//                 transition={{ duration: 1.2, delay: 2.6 }}
//               >
//                 Build Your Project
//               </motion.h2>
//             </div>
//           </div>
//         </div>

//         {/* Third Row */}
//         <div className="container text-center">
//           <div className="row">
//             <div className="col">
//               <motion.div
//                 className="activities-box"
//                 initial="hidden"
//                 animate={inView ? "visible" : "hidden"}
//                 variants={fadeIn}
//                 transition={{ duration: 1, delay: 3.2 }} // Further delay for the third row
//               >
//                 <img className="activities-img" src="images/activities/5.jpg" />
//               </motion.div>
//               <motion.h2
//                 className="name"
//                 initial="hidden"
//                 animate={inView ? "visible" : "hidden"}
//                 variants={fadeIn}
//                 transition={{ duration: 1.2, delay: 3.4 }}
//               >
//                 Deliver Project
//               </motion.h2>
//             </div>
//             <div className="col">
//               <motion.div
//                 className="activities-box"
//                 initial="hidden"
//                 animate={inView ? "visible" : "hidden"}
//                 variants={fadeIn}
//                 transition={{ duration: 1, delay: 3.6 }} // Further delay for the third row
//               >
//                 <img className="activities-img" src="images/activities/4.jpg" />
//               </motion.div>
//               <motion.h2
//                 className="name"
//                 initial="hidden"
//                 animate={inView ? "visible" : "hidden"}
//                 variants={fadeIn}
//                 transition={{ duration: 1.2, delay: 3.8 }}
//               >
//                 Complete Payment
//               </motion.h2>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Activities;


import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Activities() {
  const [ref, inView] = useInView({
    triggerOnce: true, // Animation occurs only once
    threshold: 0.2, // 20% of the component is visible
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <div className="container" ref={ref}>
  <div className="our-services">
    <header id="members-title">How We Work</header>
    <p className="lead" id="services-desc">
      We gather requirements, discuss terms, build the project,
      <br /> deliver it, and finalize with payment.
    </p>
  </div>

  {/* Bootstrap div section to insert image */}
  <div className="row justify-content-center">
    <div className="col-md-12">
      <img 
        src="images/activities/activities.png" 
        alt="How We Work Flowchart" 
        className="img-fluid" // Makes the image responsive
      />
    </div>
  </div>
</div>

    </>
  );
}

export default Activities;
