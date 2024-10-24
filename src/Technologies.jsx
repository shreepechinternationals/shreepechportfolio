import React from 'react';
import './technologies.css'; // Assume you have some custom CSS for styles
import { useState } from 'react';
function Technologies() {
    
    const [toggle, setToggle] = useState(1)

    function updateToggle(id) {
        setToggle(id)
    }

  const eCommerce = [
    
    { name: 'WooCommerce', image: '/images/technology-img/ecommerce/woo.png' },
    { name: 'E-commerce', image: '/images/technology-img/ecommerce/ecommerce.png' },
    
    
  ];
  const WebTechnologies = [
    { name: 'Python', image: '/images/technology-img/web/python.png' },
    { name: 'Node.js', image: '/images/technology-img/web/node.png' },
    { name: 'Django', image: '/images/technology-img/web/django.png' },
    { name: 'Laravel', image: '/images/technology-img/web/laravel.png' },
    { name: 'Angular.js', image: '/images/technology-img/web/angular.png' },
    { name: 'WordPress', image: '/images/technology-img/web/wordpress.png' },
    { name: 'Javascript', image: '/images/technology-img/web/js.png' },
    { name: 'React.js', image: '/images/technology-img/web/react.png' },
    
    
  ];
  const MobileTechnologies = [
    { name: 'Android', image: '/images/technology-img/mobile/android.png' },
    { name: 'iOS', image: '/images/technology-img/mobile/ios.png' },
    { name: 'React Native', image: '/images/technology-img/mobile/reactnative.png' },
    { name: 'Flutter', image: '/images/technology-img/mobile/flutter.png' },
    { name: 'Swift', image: '/images/technology-img/mobile/swift.png' },
    { name: 'Kotlin', image: '/images/technology-img/mobile/kotlin.png' },
    
    
    
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
                Web
              </li>
              <li className={`nav-item ${toggle === 2 ? 'active' : ''}`} onClick={()=> updateToggle(2)}>
                eCommerce
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
        <div className={toggle === 2 ? "show-content" : "tab-content"}>
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
