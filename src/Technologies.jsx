import React from 'react';
import './technologies.css'; // Assume you have some custom CSS for styles
import { useState } from 'react';
function Technologies() {
    
    const [toggle, setToggle] = useState(1)

    function updateToggle(id) {
        setToggle(id)
    }

  const eCommerce = [
    
   
    { name: 'WooCommerce', image: 'path_to_image/woocommerce.png' },
    { name: 'E-commerce', image: 'path_to_image/ecommerce.png' },
    
    
  ];
  const WebTechnologies = [
    { name: 'Python', image: 'path_to_image/magento.png' },
    { name: 'Node.js', image: 'path_to_image/adobe_cloud.png' },
    { name: 'Django', image: 'path_to_image/woocommerce.png' },
    { name: 'Laravel', image: 'path_to_image/shopify.png' },
    { name: 'Angular.js', image: 'path_to_image/bigcommerce.png' },
    { name: 'WordPress', image: 'path_to_image/opencart.png' },
    { name: 'Javascript', image: 'path_to_image/marketplace.png' },
    
    
  ];
  const MobileTechnologies = [
    { name: 'Android', image: 'path_to_image/magento.png' },
    { name: 'iOS', image: 'path_to_image/adobe_cloud.png' },
    { name: 'React Native', image: 'path_to_image/woocommerce.png' },
    { name: 'Flutter', image: 'path_to_image/shopify.png' },
    { name: 'Swift', image: 'path_to_image/bigcommerce.png' },
    { name: 'Kotlin', image: 'path_to_image/opencart.png' },
    
    
    
  ];
  const designTools = [
    { name: 'Figma', image: 'path_to_image/magento.png' },
    { name: 'Adobe Photoshop', image: 'path_to_image/adobe_cloud.png' },
    { name: 'Adobe Illustrator', image: 'path_to_image/woocommerce.png' },
    { name: 'Canva', image: 'path_to_image/woocommerce.png' },
     
    
  ];
  const cloud = [
    { name: 'AWS', image: 'path_to_image/magento.png' },
    { name: 'Microsoft Azure', image: 'path_to_image/adobe_cloud.png' },
    { name: 'Docker', image: 'path_to_image/woocommerce.png' },
    { name: 'Google Cloud', image: 'path_to_image/woocommerce.png' },
    { name: 'CPanel', image: 'path_to_image/woocommerce.png' },
    { name: 'Heroku', image: 'path_to_image/woocommerce.png' },
     
    
  ];
  const db = [
    { name: 'MySQL', image: 'path_to_image/magento.png' },
    { name: 'MongoDB', image: 'path_to_image/adobe_cloud.png' },
    { name: 'Firebase', image: 'path_to_image/woocommerce.png' },
    { name: 'SQlite', image: 'path_to_image/woocommerce.png' },
    { name: 'MariaDB', image: 'path_to_image/woocommerce.png' },
    { name: 'Microsoft SQL', image: 'path_to_image/woocommerce.png' },
     
    
  ];

  return (
    <>
    
    <section className="technologies-section">
      <div className="container">
        <div className="row mb-4 text-center">
          <div className="col">
            <h1 className="tech-title">Our Technology Stack</h1>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="row mb-4 justify-content-center">
          <div className="col-auto">
            <ul className="nav nav-tabs justify-content-center">
              <li className={`nav-item ${toggle === 1 ? 'active' : ''}`} onClick={()=> updateToggle(1)}>
                eCommerce
              </li>
              <li className={`nav-item ${toggle === 2 ? 'active' : ''}`} onClick={()=> updateToggle(2)}>
                Web
              </li>
              <li className={`nav-item ${toggle === 3 ? 'active' : ''}`} onClick={()=> updateToggle(3)}>
                Mobile
              </li>
              <li className={`nav-item ${toggle === 4 ? 'active' : ''}`} onClick={()=> updateToggle(4)}>
                Design Tools
              </li>
              <li className={`nav-item ${toggle === 5 ? 'active' : ''}`} onClick={()=> updateToggle(5)}>
                Cloud
              </li>
              <li className={`nav-item ${toggle === 6 ? 'active' : ''}`} onClick={()=> updateToggle(6)}>
                Database
              </li>
            </ul>
          </div>
        </div>

        {/* Tab Content */}
        <div className={toggle === 1 ? "show-content" : "tab-content"}>
          <div className="tab-pane fade show active" id="eCommerce">
            <div className="row">
              {eCommerce.map((tech, index) => (
                <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                  <div className="tech-card text-center p-3">
                    <img src={tech.image} alt={tech.name} className="img-fluid mb-3" />
                    <h5>{tech.name}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Tab Content */}
        <div className={toggle === 2 ? "show-content" : "tab-content"}>
          <div className="tab-pane fade show active" id="eCommerce">
            <div className="row">
              {WebTechnologies.map((tech, index) => (
                <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                  <div className="tech-card text-center p-3">
                    <img src={tech.image} alt={tech.name} className="img-fluid mb-3" />
                    <h5>{tech.name}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Tab Content */}
        <div className={toggle === 3 ? "show-content" : "tab-content"}>
          <div className="tab-pane fade show active" id="eCommerce">
            <div className="row">
              {MobileTechnologies.map((tech, index) => (
                <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                  <div className="tech-card text-center p-3">
                    <img src={tech.image} alt={tech.name} className="img-fluid mb-3" />
                    <h5>{tech.name}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Tab Content */}
        <div className={toggle === 4 ? "show-content" : "tab-content"}>
          <div className="tab-pane fade show active" id="eCommerce">
            <div className="row">
              {designTools.map((tech, index) => (
                <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                  <div className="tech-card text-center p-3">
                    <img src={tech.image} alt={tech.name} className="img-fluid mb-3" />
                    <h5>{tech.name}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Tab Content */}
        <div className={toggle === 5 ? "show-content" : "tab-content"}>
          <div className="tab-pane fade show active" id="eCommerce">
            <div className="row">
              {cloud.map((tech, index) => (
                <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                  <div className="tech-card text-center p-3">
                    <img src={tech.image} alt={tech.name} className="img-fluid mb-3" />
                    <h5>{tech.name}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Tab Content */}
        <div className={toggle === 6 ? "show-content" : "tab-content"}>
          <div className="tab-pane fade show active" id="eCommerce">
            <div className="row">
              {db.map((tech, index) => (
                <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                  <div className="tech-card text-center p-3">
                    <img src={tech.image} alt={tech.name} className="img-fluid mb-3" />
                    <h5>{tech.name}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Technologies;
