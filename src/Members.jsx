// import React from 'react'

// function Members() {
//   return (
//     <div className="container mt-5">
//         <div className="circle"> 
//     <div className="container-fluid" id="members"> 
//     <div className="our-services"> 
//         <header id='members-title'>Meet Our Team Members</header>
//         <p className="lead" id="services-desc">A group of skilled professionals, working together to bring<br/> innovative ideas to life and deliver exceptional results.</p>
//         </div>
//         <div className="container text-center" id="meet-our-team">
//             <div className="row">
//                 <div className="col">
//                     <div className="img-box-career">
//                             <img className="team-img" src="https://media.licdn.com/dms/image/v2/D4D03AQHj38rLOR5XPQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1714588425927?e=1732752000&v=beta&t=HPNDPOPywKTFehoWdvvfHjU0t_p3BJkc9ftbdvxfIR0"/>
//                         </div>
//                     <h2 className='name'>Yogesh Bikram Shah</h2>
//                     <h3 className='position'>Position</h3>
//                 </div>
//                 <div className="col">
//                 <div className="img-box-career">
//                             <img className="team-img" src="https://media.licdn.com/dms/image/v2/C4D03AQEPuJk0BCks1Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1651678476287?e=1732752000&v=beta&t=IX8W-Go5CZARHxPGqWnZtVIu5DsHKWUFwnNLHtPZrLk"/>
//                         </div>
//                     <h2 className='name'>Johan Tandukar</h2>
//                     <h3 className='position'>Position</h3>
//                 </div>
//                 <div className="col">
//                 <div className="img-box-career">
//                             <img className="team-img" src="https://media.licdn.com/dms/image/v2/D4D03AQHI1O2c1rV9AA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1670298340438?e=1733356800&v=beta&t=KzRAf_sfSAu41snP837PbcYMY6SDzuxkqgLlizaUvqs"/>
//                         </div>
//                     <h2 className='name'>Rojan Dhungel</h2>
//                     <h3 className='position'>Position</h3>
//                 </div>
//             </div>
//             <div className="row">
//                 <div className="col">
//                 <div className="img-box-career">
//                             <img className="team-img" src="https://scontent.fktm17-1.fna.fbcdn.net/v/t39.30808-6/422881575_400928188976209_7547068254776703562_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=HRizCfztpswQ7kNvgGCPWj0&_nc_ht=scontent.fktm17-1.fna&_nc_gid=ABicNnVhIt95A0uevZj-M0X&oh=00_AYCoca8TGCiEUgZxTGtKPYwIELfRVP8glp0ZtU6v9wX6Jg&oe=67006E96"/>
//                         </div>
//                     <h2 className='name'>Saran Adhikari</h2>
//                     <h3 className='position'>Position</h3>
//                 </div>
//                 <div className="col">
//                 <div className="img-box-career">
//                             <img className="team-img" src="https://media.istockphoto.com/id/1320651997/photo/young-woman-close-up-isolated-studio-portrait.jpg?s=612x612&w=0&k=20&c=lV6pxz-DknISGT2jjiSvUmSaw0hpMDf-dBpT8HTSAUI="/>
//                         </div>
//                     <h2 className='name'>Alicia Portman</h2>
//                     <h3 className='position'>Position</h3>
//                 </div>
//                 <div className="col">
//                 <div className="img-box-career">
//                             <img className="team-img" src="https://t3.ftcdn.net/jpg/03/35/80/92/360_F_335809246_yY1Q7bOnlhwtUHG4X2m27sfuzuTNGhp4.jpg"/>
//                         </div>
//                     <h2 className='name'>Ileana Hemsworth</h2>
//                     <h3 className='position'>Position</h3>
//                 </div>
//             </div>
//             </div>
//         </div>
//         </div>
//     </div>
//   )
// }

// export default Members

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Members() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="container mt-5" ref={ref}>
      <div className="circle">
        <div className="container-fluid" id="members">
          <div className="our-services">
            <header id="members-title">Meet Our Team Members</header>
            <p className="lead" id="services-desc">
              A group of skilled professionals, working together to bring
              <br />
              innovative ideas to life and deliver exceptional results.
            </p>
          </div>
          <div className="container text-center" id="meet-our-team">
            <div className="row">
              {/* First Row */}
              <div className="col">
                <motion.div
                  className="img-box-career"
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={fadeIn}
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  <img
                    className="team-img"
                    src="https://media.licdn.com/dms/image/v2/D4D03AQHj38rLOR5XPQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1714588425927?e=1732752000&v=beta&t=HPNDPOPywKTFehoWdvvfHjU0t_p3BJkc9ftbdvxfIR0"
                  />
                </motion.div>
                <motion.h2
                  className="name"
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={fadeIn}
                  transition={{ duration: 1.2, delay: 0.4 }}
                >
                  Yogesh Bikram Shah
                </motion.h2>
                <motion.h3
                  className="position"
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={fadeIn}
                  transition={{ duration: 1.2, delay: 0.6 }}
                >
                  Position
                </motion.h3>
              </div>
              <div className="col">
                <motion.div
                  className="img-box-career"
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={fadeIn}
                  transition={{ duration: 1, delay: 0.8 }}
                >
                  <img
                    className="team-img"
                    src="https://media.licdn.com/dms/image/v2/C4D03AQEPuJk0BCks1Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1651678476287?e=1732752000&v=beta&t=IX8W-Go5CZARHxPGqWnZtVIu5DsHKWUFwnNLHtPZrLk"
                  />
                </motion.div>
                <motion.h2
                  className="name"
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={fadeIn}
                  transition={{ duration: 1.2, delay: 1 }}
                >
                  Johan Tandukar
                </motion.h2>
                <motion.h3
                  className="position"
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={fadeIn}
                  transition={{ duration: 1.2, delay: 1.2 }}
                >
                  Position
                </motion.h3>
              </div>
              <div className="col">
                <motion.div
                  className="img-box-career"
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={fadeIn}
                  transition={{ duration: 1, delay: 1.4 }}
                >
                  <img
                    className="team-img"
                    src="https://media.licdn.com/dms/image/v2/D4D03AQHI1O2c1rV9AA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1670298340438?e=1733356800&v=beta&t=KzRAf_sfSAu41snP837PbcYMY6SDzuxkqgLlizaUvqs"
                  />
                </motion.div>
                <motion.h2
                  className="name"
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={fadeIn}
                  transition={{ duration: 1.2, delay: 1.6 }}
                >
                  Rojan Dhungel
                </motion.h2>
                <motion.h3
                  className="position"
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={fadeIn}
                  transition={{ duration: 1.2, delay: 1.8 }}
                >
                  Position
                </motion.h3>
              </div>
            </div>

            {/* Second Row */}
            <div className="row">
              <div className="col">
                <motion.div
                  className="img-box-career"
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={fadeIn}
                  transition={{ duration: 1, delay: 2 }}
                >
                  <img
                    className="team-img"
                    src="https://scontent.fktm17-1.fna.fbcdn.net/v/t39.30808-6/422881575_400928188976209_7547068254776703562_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=HRizCfztpswQ7kNvgGCPWj0&_nc_ht=scontent.fktm17-1.fna&_nc_gid=ABicNnVhIt95A0uevZj-M0X&oh=00_AYCoca8TGCiEUgZxTGtKPYwIELfRVP8glp0ZtU6v9wX6Jg&oe=67006E96"
                  />
                </motion.div>
                <motion.h2
                  className="name"
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={fadeIn}
                  transition={{ duration: 1.2, delay: 2.2 }}
                >
                  Saran Adhikari
                </motion.h2>
                <motion.h3
                  className="position"
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={fadeIn}
                  transition={{ duration: 1.2, delay: 2.4 }}
                >
                  Position
                </motion.h3>
              </div>
              <div className="col">
                <motion.div
                  className="img-box-career"
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={fadeIn}
                  transition={{ duration: 1, delay: 2.6 }}
                >
                  <img
                    className="team-img"
                    src="https://media.istockphoto.com/id/1320651997/photo/young-woman-close-up-isolated-studio-portrait.jpg?s=612x612&w=0&k=20&c=lV6pxz-DknISGT2jjiSvUmSaw0hpMDf-dBpT8HTSAUI="
                  />
                </motion.div>
                <motion.h2
                  className="name"
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={fadeIn}
                  transition={{ duration: 1.2, delay: 2.8 }}
                >
                  Alicia Portman
                </motion.h2>
                <motion.h3
                  className="position"
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={fadeIn}
                  transition={{ duration: 1.2, delay: 3 }}
                >
                  Position
                </motion.h3>
              </div>
              <div className="col">
                <motion.div
                  className="img-box-career"
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={fadeIn}
                  transition={{ duration: 1, delay: 3.2 }}
                >
                  <img
                    className="team-img"
                    src="https://t3.ftcdn.net/jpg/03/35/80/92/360_F_335809246_yY1Q7bOnlhwtUHG4X2m27sfuzuTNGhp4.jpg"
                  />
                </motion.div>
                <motion.h2
                  className="name"
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={fadeIn}
                  transition={{ duration: 1.2, delay: 3.4 }}
                >
                  Ileana Hemsworth
                </motion.h2>
                <motion.h3
                  className="position"
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={fadeIn}
                  transition={{ duration: 1.2, delay: 3.6 }}
                >
                  Position
                </motion.h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Members;
