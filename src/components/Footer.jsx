import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container">
        <span className="logo">Aashish</span>
        <div className="links">
          <a href=" ">
            <i className="fab fa-facebook"></i>
          </a>
          <a href=" ">
            <i className="fab fa-youtube"></i>
          </a>
          <a href=" ">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        <p className="copyright">
          <i className="fas fa-heart"></i>
          <a href=" ">
          Created By Aashish
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;