import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container">
        <span className="logo">Aashish</span>
        <div className="links">
          <a href="https://www.facebook.com/aashish.batra.54?mibextid=ZbWKwL">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.linkedin.com/in/aashish-batra-12a79524a">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://instagram.com/aashish__batra?igshid=MzNlNGNkZWQ4Mg==">
            <i className="fab fa-instagram"></i>
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
