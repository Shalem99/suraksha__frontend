// src/pages/Home.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Car Trouble? We’re on the Way!",
      subtitle:
        "24/7 roadside assistance and emergency car care, wherever you are",
      image:
        "https://img.freepik.com/free-photo/man-repairing-broken-car-road_1157-46547.jpg?w=1380&q=80",
      links: [
        {
          text: "Request Assistance",
          url: "/book-appointment",
          type: "primary",
        },
        { text: "Call Now", url: "/contact", type: "secondary" },
      ],
    },
    {
      title: "Expert Technicians On-Site",
      subtitle:
        "From breakdowns to routine checkups, our pros handle it all on the spot",
      image:
        "https://img.freepik.com/free-photo/mechanic-doing-car-service-garage_1303-26973.jpg?w=1380&q=80",
      links: [
        { text: "Meet Our Team", url: "/about", type: "primary" },
        { text: "Book a Service", url: "/services", type: "secondary" },
      ],
    },
    {
      title: "Reliable, Anytime, Anywhere",
      subtitle:
        "Highway, city, or home — we bring top-quality service to your location",
      image:
        "https://img.freepik.com/free-photo/broken-car-being-helped-by-roadside-service_181624-25366.jpg?w=1380&q=80",
      links: [
        { text: "Book Appointment", url: "/book-appointment", type: "primary" },
        { text: "Explore Services", url: "/services", type: "secondary" },
      ],
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-slider">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === currentSlide ? "active" : ""}`}
              style={{
                background: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.9)), url(${slide.image}) center/cover no-repeat`,
              }}
            >
              <div className="slide-content">
                <h1>{slide.title}</h1>
                <p>{slide.subtitle}</p>
                <div className="hero-buttons">
                  {slide.links.map((link, i) => (
                    <Link
                      key={i}
                      to={link.url}
                      className={`btn ${
                        link.type === "primary"
                          ? "btn-primary"
                          : "btn-secondary"
                      }`}
                    >
                      {link.text}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="slider-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={index === currentSlide ? "active" : ""}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-preview">
        <div className="container">
          <h2>Our Premium Services</h2>
          <div className="services-grid">
            <div className="services-grid">
              <div className="service-card" data-color="blue">
                <div className="service-icon">🔧</div>
                <h3>Quick Repairs</h3>
                <p>Fast and reliable repair services for all car models.</p>
              </div>

              <div className="service-card" data-color="yellow">
                <div className="service-icon">⚡</div>
                <h3>Battery Service</h3>
                <p>Instant battery replacement and charging solutions.</p>
              </div>

              <div className="service-card" data-color="green">
                <div className="service-icon">🛡️</div>
                <h3>Safety Check</h3>
                <p>Complete safety inspection before long journeys.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-preview">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Why Choose SURAKSHA CAR CARE?</h2>
              <p>
                We are your trusted partner for all automotive care needs. Our
                experienced technicians provide reliable and consistent service
                for all your car repair and maintenance requirements.
              </p>
              <ul>
                <li>✓ Certified and experienced technicians</li>
                <li>✓ Premium quality products and equipment</li>
                <li>✓ Convenient doorstep service</li>
                <li>✓ Competitive pricing with transparency</li>
                <li>✓ 100% customer satisfaction guarantee</li>
              </ul>
              <Link to="/about" className="btn btn-primary">
                Learn More
              </Link>
            </div>
            <div className="about-image">
              <img
                src="https://imgs.search.brave.com/qlGWxG1V2gQ2ERchQrJ6G5agOOKstAesMQEdrWLWkHw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2QzLzZj/Lzk1L2QzNmM5NWYy/MWQyYWJlN2JlNDAx/MTA4OThhYjllMDlm/LmpwZw"
                alt="Technician at Work"
                className="technician-image"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
