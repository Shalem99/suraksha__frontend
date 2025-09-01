import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="container">
        <div className="page-header">
          <h1>Contact Us</h1>
          <p>Get in touch with us for any inquiries or support</p>
        </div>

        <div className="contact-content" style={{ color: "white" }}>
          {/* Contact Info */}
          <div className="contact-info">
            <h3>Get In Touch</h3>

            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div >
                <h4>Address</h4>
                <p>
                  Beside Royal Enfield Showroom, N.H 16 Road,
                  <br />
                  Morampudi, Rajamahendravaram
                </p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div>
                <h4>Phone</h4>
                <p>
                  +91 8143143167
                  <br />
                  +91 8247252301
                  <br />
                  +91 9502339536
                </p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div>
                <h4>Email</h4>
                <p>
                  
                  surakshacarcare01@gmail.com
                </p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">⏰</div>
              <div>
                <h4>Working Hours</h4>
                <p>
                  Mon - Sat: Full Hours
                  <br />
                  Sunday: Requested Hours
                </p>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="map-container">
            <iframe
              title="Suraksha Car Care Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.087963400482!2d81.79942151538285!3d16.9973312841298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37a300171fc8f3%3A0x88f30979f404f51b!2sSuraksha%20car%20care!5e0!3m2!1sen!2sin!4v1692883171811!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: "10px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
