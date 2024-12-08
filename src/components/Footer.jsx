import React from "react";
import "../styles/components/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Section Informations */}
        <div className="footer-section">
          <h4>About Us</h4>
          <p>
            We are committed to providing exceptional services and building a community that inspires innovation.
          </p>
        </div>

        {/* Section Liens utiles */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#themes">Themes</a></li>
            <li><a href="#judges">Judges</a></li>
            <li><a href="#prizes">Prizes</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Section Contacts */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: contact@bantartificial.com</p>
          <p>Phone: +237 679 640 734 </p>
          <p>Location:  Yaounde, Cameroon</p>
        </div>

        {/* Section Réseaux sociaux */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="https://via.placeholder.com/24" alt="Facebook" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="https://via.placeholder.com/24" alt="Twitter" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="https://via.placeholder.com/24" alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Hackathon Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
