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
    { name: 'Figma', image: '/images/technology-img/design/figma.png' },
    { name: 'Adobe Photoshop', image: '/images/technology-img/design/photoshop.png' },
    { name: 'Adobe Illustrator', image: '/images/technology-img/design/illustrator.png' },
    { name: 'Canva', image: '/images/technology-img/design/canva.png' },
     
    
  ];
  const cloud = [
    { name: 'AWS', image: '/images/technology-img/cloud/aws.png' },
    { name: 'Microsoft Azure', image: '/images/technology-img/cloud/azure.png' },
    { name: 'Docker', image: '/images/technology-img/cloud/docker.png' },
    { name: 'Google Cloud', image: '/images/technology-img/cloud/googlecloud.png' },
    { name: 'CPanel', image: '/images/technology-img/cloud/cpanel.png' },
    { name: 'Heroku', image: '/images/technology-img/cloud/heroku.png' },
     
    
  ];
  const db = [
    { name: 'MySQL', image: '/images/technology-img/db/mysql.png' },
    { name: 'MongoDB', image: '/images/technology-img/db/mongodb.png' },
    { name: 'Firebase', image: '/images/technology-img/db/firebase.png' },
    { name: 'SQlite', image: '/images/technology-img/db/sqlite.png' },
    { name: 'MariaDB', image: '/images/technology-img/db/mariadb.png' },
    { name: 'Microsoft SQL', image: '/images/technology-img/db/ms-sql.png' },
     
    
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
