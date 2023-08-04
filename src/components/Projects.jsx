import React from "react";
import { useState } from "react";

function Projects() {
  const [projects] = useState([
    {
      title: "Project 1",
      img: "/P3.jpeg",
      gLink: "https://github.com/Aashish024/Note-App",
      lLink: "https://github.com/Aashish024/Note-App",
      disc: `This is an Note App, I have created this app using Flutter(dart). 
      In this app I have connected a database using firebase so that new user can signup 
      account or can login with an existing one, after login users can create there Notes 
      on create Note screen by just type any input they want to add in note once user create
      a new note, note with when it was created will be visible to there home screen 
      and user can delete or update there note as well.`,
    },
    {
      title: "Project 2",
      img: "/P4.jpeg",
      gLink: "https://github.com/Aashish024/Order_Processing_App",
      lLink: "https://github.com/Aashish024/Order_Processing_App",
      disc: `This is an order processing app I have created this app using Flutter(dart).
      I have connected a database using firebase so that new user can 
      signup new account or can login with an existing one after
      login users can create there order on create order screen by providing details of 
      order once order details are implemented users can see there order on home screen 
      and can check or update there order status as well.`,
    },
    {
      title: "Project 3",
      img: "/p1-image.jpeg",
      gLink: "https://github.com/Aashish024",
      lLink: "https://mangtaandgallo.netlify.app//",
      disc: `This is the first project I have created while learning about HTML and CSS from a course named "HTML and CSS in depth by meta" on Coursera. During this course I created a responsive website using flex display this is the front page of the website for a jewellerystore named MangtaandGallo.`,
    },
    {
      title: "Project 4",
      img: "/P2-image.png",
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
