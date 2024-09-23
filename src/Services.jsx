import React from "react";

function Services() {
  return (
    <div className="container-fluid" id="our-services">
        <div className="our-services">
      <header id="services-title">Our Services: Our Most Popular Solution</header>
      <p className="lead" id="services-desc">Digitalize your business to reach your market.<br/>Use our team to build your system !</p>
      </div>
        <div className="container text-center" id="teams">
            <div className="row">
                <div className="col">
                    <div className="img-box">
                        <img className="services-img" src="images/icons/wd.png"/>
                    </div>
                <p>Web Development</p>
                </div>
                <div className="col">
                <div className="img-box">
                        <img className="services-img" src="images/icons/md.png"/>
                    </div>
                <p>Mobile App Development</p>
                </div>
                <div className="col">
                <div className="img-box">
                        <img className="services-img" src="images/icons/dm.png"/>
                    </div>
                <p>Digital Marketing</p>
                </div>
                <div className="col">
                <div className="img-box">
                        <img className="services-img" src="images/icons/ds.png"/>
                    </div>
                <p>Data Science</p>
                </div>
            </div>

            <div className="row">
                <div className="col">
                <div className="img-box">
                        <img className="services-img" src="images/icons/uiux.png"/>
                    </div>
                <p>UI/UX Design</p>
                </div>
                <div className="col">
                <div className="img-box">
                        <img className="services-img" src="images/icons/seo.png"/>
                    </div>
                <p>SEO</p>
                </div>
                <div className="col">
                <div className="img-box">
                        <img className="services-img" src="images/icons/cw.png"/>
                    </div>
                <p>Content Writing</p>
                </div>
                
            </div>
        </div>
    </div>

  )
}

export default Services
