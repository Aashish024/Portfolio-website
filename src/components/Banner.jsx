import React from "react";

function Banner() {
  return (
    <section className="banner" id="banner">
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-img">
            <img src="/pic.jpeg" alt="" />
          </div>
          <div className="banner-content">
            <h6>Hello, I'm Aashish Batra</h6>
            <h3>Software Engineer</h3>
            <p>
            Strong in design and integration with intuitive problem-solving and
            technical skills like Flutter, Dart, Android Applications, IOS Applications, 
            Web Applications, JAVA, C, HTML, CSS, JAVASCRIPT,
            GIT and GITHUB. I am capable of translating requirements of the business 
            into technical solutions and I am always ready to learn new skills.
            </p>
            <a className="btn" href="#projects">
              About Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
