import React, { useState } from "react";

function ServicesExperience() {
  const [services] = useState([
    {
      icon: "fa-paintbrush",
      title: "UI Design",
      desc: "Created, User Interface Designs.",
      active: false,
    },
    {
      icon: "fa-pen-to-square",
      title: "Product Design",
      desc: "Created, Product Designs.",
      active: true,
    },
    {
      icon: "fa-ruler",
      title: "Branding",
      desc: "Promoted, different brands.",
      active: false,
    },
  ]);
  return (
    <section className="services-experience">
      <div className="container">
        <div className="services" id="services">
          {services.map((service, i) => (
            <div
              key={i}
              className={`service ${service.active ? "active" : ""}`}
            >
              <i className={`fas ${service.icon}`} />
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <button className="btn">Know More</button>
            </div>
          ))}
        </div>
        <div className="experiences" id="experiences">
          <div className="experience">
            <h3>0</h3>
            <p>Year Experience</p>
          </div>
          <div className="portfolios">
            <div className="portfolio">
              <h4>0</h4>
              <p>Clients</p>
            </div>
            <div className="portfolio">
              <h4>0</h4>
              <p>Years Experience</p>
            </div>
            <div className="portfolio">
              <h4>2</h4>
              <p>Completed Projects</p>
            </div>
            <div className="portfolio">
              <h4>13</h4>
              <p>Achievements</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesExperience;
