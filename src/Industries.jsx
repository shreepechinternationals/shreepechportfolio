import React from "react";
import './industries.css'; 

const industries = [
    { name: "Healthcare", icon: "fa-solid fa-dumbbell", image: "/images/industries-img/healthcare.avif", description: "Providing digital healthcare solutions." },
    { name: "Education", icon: "fa-solid fa-graduation-cap", image: "/images/industries-img/education.avif", description: "Innovating education through technology." },
    { name: "Travel", icon: "fa-solid fa-plane", image: "/images/industries-img/travel.avif", description: "Making travel information  efficient." },
    { name: "Finance", icon: "fa-solid fa-dollar-sign", image: "/images/industries-img/finance.jpg", description: "Transforming financial services." },
    { name: "IT", icon: "fa-solid fa-microchip", image: "/images/industries-img/IT.avif", description: "Driving technology innovation." },
    { name: "Logistics", icon: "fa-solid fa-key", image: "/images/industries-img/logistics.jpg", description: "Optimizing supply chain management." },
    { name: "Retail", icon: "fa-solid fa-store", image: "/images/industries-img/retail.jpg", description: "Enhancing retail experiences." },
    { name: "E-Commerce", icon: "fa-solid fa-cart-shopping", image: "/images/industries-img/e-commerce.jpg", description: "Building powerful e-commerce platforms." }
];

const Industries = () => {
    return (
        <section className="industries-section">
            <div className="container">
                <header id='industries-title'>Fields of Expertise</header>
                <p className="lead" id="industries-desc">Leveraging our extensive experience to deliver tailored solutions across diverse industries</p>

                <div className="row">
                    {industries.map((industry, index) => (
                        <div key={index} className="col-md-3 col-sm-6 mb-4">
                            <div className="industry-card">
                                <img
                                    src={industry.image}
                                    alt={industry.name}
                                    className="industry-image"
                                />
                                <div className="overlay">
                                    <i className={industry.icon}></i>
                                    <p>{industry.name}</p>
                                    <p className="description">{industry.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Industries;
