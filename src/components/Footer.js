// src/components/Footer.js
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>🛡️ SURAKSHA CAR CARE</h3>
            <p>
              Your trusted partner for premium automotive care services. We
              deliver professional car care solutions right to your doorstep.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                📘
              </a>
              <a href="#" aria-label="Instagram">
                📷
              </a>
              <a href="#" aria-label="Twitter">
                🐦
              </a>
              <a href="#" aria-label="YouTube">
                📺
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/book-appointment">Book Appointment</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Our Services</h4>
            <ul>
              <li>
                <a href="/Services">Car Electrician</a>
              </li>
              <li>
                <a href="/Services">Car Mechanic</a>
              </li>
              <li>
                <a href="/Services">Tinkering</a>
              </li>
              <li>
                <a href="/Services">Painting</a>
              </li>
              
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <p>📍 Beside Royal Enfield Showroom, N.H 16 Road, Morampudi, Rajamahendravaram</p>
              <p>📞 +91 8143143167</p>
              <p>📧 surakshacarcare01@gmail.com</p>
              <p>⏰ Mon-Sun: 24 Hrs</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 SURAKSHA CAR CARE. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
