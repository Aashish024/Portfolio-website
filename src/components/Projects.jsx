import React from "react";
import { useState } from "react";

function Projects() {
  const [projects] = useState([
    {
      title: "Project 1",
      img: "/P1-image.jpeg",
      gLink: "https://github.com/Aashish024",
      lLink: "https://mangtaandgallo.netlify.app/",
      disc: `This is the first project I have created while learning about HTML and CSS from a course named "HTML and CSS in depth by meta" on Coursera. During this course I created a responsive website using flex display this is the front page of the website for a jewellerystore named MangtaandGallo`,
    },
    {
      title: "Project 1",
      img: "/p1-image2.jpeg",
      gLink: "https://github.com/Aashish024",
      lLink: "https://mangtaandgallo.netlify.app//",
      disc: `This is the first project I have created while learning about HTML and CSS from a course named "HTML and CSS in depth by meta" on Coursera. During this course I created a responsive website using flex display this is the front page of the website for a jewellerystore named MangtaandGallo`,
    },
    {
      title: "Project 2",
      img: "/P2-image.png",
      gLink: "https://github.com/Aashish024",
      lLink: "https://littlelemonrestaurant.netlify.app/",
      disc: `This is the second project I have created while learning about HTML and CSS from a course named "HTML and CSS in depth by meta" on Coursera. During this course I created a responsive website using grid display this is the front page of the website for a Restaurant named LittleLemon`,
    },
    {
      title: "Project 2",
      img: "/P2-image2.png",
      gLink: "https://github.com/Aashish024",
      lLink: "https://littlelemonrestaurant.netlify.app/",
      disc: `This is the second project I have created while learning about HTML and CSS from a course named "HTML and CSS in depth by meta" on Coursera. During this course I created a responsive website using grid display this is the front page of the website for a Restaurant named LittleLemon`,
    },
    
  ]);
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="title">
          <h3>Featured Projects</h3>
          <a
            href="https://github.com/Aashish024"
            target="_blank"
            className="btn"
            rel="noreferrer"
          >
            View All
          </a>
        </div>
        <div className="projects-wrapper">
          {projects.map((project, i) => (
            <div className="project" key={i}>
              <div className="img-container">
                <a
                href={project.lLink}
                target="_blank"
                rel="noreferrer">
                <img src={project.img} alt={project.title} />
                </a>
              </div>
              <div className="description">
                <h4>{project.title}</h4>
                <div className="links">
                  <a href={project.gLink} target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href={project.lLink} target="_blank" rel="noreferrer">
                    <i className="fa fa-globe"></i>
                  </a>
                </div>
              </div>
              <p>{project.disc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;