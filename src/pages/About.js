// src/pages/About.js
import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // WhatsApp icon
import "./About.css";

const teamMembers = [
  {
    name: "Bandireddy Durga Prasad",
    role: "Senior Mechanic",
    phone: "+91 8143143167",
    photo:
      "https://res.cloudinary.com/dzinfdirr/image/upload/v1752160301/WhatsApp_Image_2025-07-10_at_20.41.15_19013d60_k63s4a.jpg",
    whatsapp: "https://wa.me/918143143167", // WhatsApp direct link
  },
  {
    name: "Bandireddy Chinnarao",
    role: "Senior  Tinkering",
    phone: "+91 8247252301",
    photo:
      "https://res.cloudinary.com/dzinfdirr/image/upload/v1752159983/WhatsApp_Image_2025-07-10_at_20.32.20_df4ccf81_eoeps8.jpg",
    whatsapp: "https://wa.me/918247252301",
  },
  {
    name: "Y.Pavan Kumar",
    role: "Mechanic",
    phone: "+91 9502339536",
    photo:
      "https://res.cloudinary.com/dzinfdirr/image/upload/v1752160042/WhatsApp_Image_2025-07-10_at_20.31.38_a332baad_ow1zsl.jpg",
    whatsapp: "https://wa.me/919502339536",
  },
];

const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        <div className="page-header">
          <h1>About SURAKSHA CAR CARE</h1>
          <p>Your trusted partner for premium automotive care services</p>
        </div>

        <div className="about-content">
          <section className="mission-section">
            <h2>Our Mission</h2>
            <p>
              At SURAKSHA CAR CARE, we are committed to providing exceptional
              automotive care services that protect and enhance your vehicle's
              performance, appearance, and value. Our mission is to deliver
              professional, reliable, and convenient car care solutions right to
              your doorstep.
            </p>
          </section>

          <section className="values-section">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">🛡️</div>
                <h3>Protection</h3>
                <p>We safeguard your investment with quality care.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">⭐</div>
                <h3>Excellence</h3>
                <p>We strive for excellence in every service we provide.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">🤝</div>
                <h3>Trust</h3>
                <p>Building long-term relationships through honesty.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">🚀</div>
                <h3>Innovation</h3>
                <p>Using the latest technology in automotive care.</p>
              </div>
            </div>
          </section>

          <section className="team-section">
            <h2>Our Expert Team</h2>
            <p>
              Our team consists of certified automotive technicians with years
              of experience in luxury car care and maintenance. Each member is
              trained in the latest automotive technologies and committed to
              delivering exceptional service.
            </p>

            {/* Team Profiles */}
            <div className="team-grid">
              {teamMembers.map((member, index) => (
                <div key={index} className="team-card">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="team-photo"
                  />
                  <h3>{member.name}</h3>
                  <p className="role">{member.role}</p>
                  <p className="phone">📞 {member.phone}</p>
                  <a
                    href={member.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-link"
                  >
                    <FaWhatsapp size={28} color="#25D366" />
                  </a>
                </div>
              ))}
            </div>
          </section>

          <section className="why-choose-section">
            <h2>Why Choose Us?</h2>
            <div className="features-list">
              <div className="feature">
                <span className="checkmark">✓</span>
                <div>
                  <h4>Certified Technicians</h4>
                  <p>
                    All our technicians are certified and regularly trained on
                    latest automotive technologies.
                  </p>
                </div>
              </div>
              <div className="feature">
                <span className="checkmark">✓</span>
                <div>
                  <h4>Premium Products</h4>
                  <p>We use only the highest quality products and equipment.</p>
                </div>
              </div>
              <div className="feature">
                <span className="checkmark">✓</span>
                <div>
                  <h4>Doorstep Service</h4>
                  <p>Convenient service at your location - home or office.</p>
                </div>
              </div>
              <div className="feature">
                <span className="checkmark">✓</span>
                <div>
                  <h4>Transparent Pricing</h4>
                  <p>No hidden charges. Clear, upfront pricing.</p>
                </div>
              </div>
              <div className="feature">
                <span className="checkmark">✓</span>
                <div>
                  <h4>Satisfaction Guarantee</h4>
                  <p>100% customer satisfaction guarantee on all services.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
