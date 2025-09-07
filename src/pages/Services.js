import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Services.css";

const CLOUDINARY_VIDEO =
  "https://res.cloudinary.com/dzinfdirr/video/upload/v1756453901/document_6163592542970451376_bh32lm.mp4";
const CLOUDINARY_VIDEO0 =
  "https://res.cloudinary.com/dzinfdirr/video/upload/v1756612965/document_6170066329995844805_fssqrz.mp4";
const CLOUDINARY_VIDEO1 =
  "https://res.cloudinary.com/dzinfdirr/video/upload/v1756611969/document_6170066329995844797_eefzhy.mp4";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedService, setSelectedService] = useState(null);
  const [bookingMode, setBookingMode] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    address: "",
    carModel: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await axios.get("http://surakshabackend-production-7967.up.railway.app/api/services");

      // ✅ Ensure every service has at least one video
      const updatedServices = response.data.map((service) => {
        const hasVideo = service.media?.some((m) => m.type === "video");
        if (!hasVideo) {
          return {
            ...service,
            media: [
              ...(service.media || []),
              { type: "video", url: CLOUDINARY_VIDEO },
            ],
          };
        }
        return service;
      });

      setServices(updatedServices);
    } catch (error) {
      console.error("Error fetching services:", error);

      // ✅ Fallback data with Cloudinary video included
      setServices([
        {
          _id: "1",
          name: "Car Electrician",
          description:
            "Electrical repairs and diagnostics including wiring, battery, and lighting systems.",
          duration: "1-2 hours",
          category: "Electrical",
          media: [
            {
              type: "image",
              url: "https://autorepairodessa.com/wp-content/uploads/2018/08/AdobeStock_61263278.jpeg",
            },
            { type: "video", url: CLOUDINARY_VIDEO },
          ],
        },
        {
          _id: "2",
          name: "Car Mechanic",
          description:
            "General mechanical repairs, engine tune-ups, and preventive maintenance.",
          duration: "3-4 hours",
          category: "Mechanical",
          media: [
            {
              type: "image",
              url: "http://accurateautomotiverepair.com/wp-content/uploads/2013/05/Accurate-Cars.jpg",
            },
            { type: "video", url: CLOUDINARY_VIDEO0 },
          ],
        },
        {
          _id: "3",
          name: "Tinkering",
          description:
            "Bodywork, dent removal, and minor structural repairs for your car.",
          duration: "1 day",
          category: "Bodywork",
          media: [
            {
              type: "image",
              url: "https://www.familyhandyman.com/wp-content/uploads/2017/12/dfh4_shutterstock_226630414.jpg?fit=696%2C696",
            },

            { type: "video", url: CLOUDINARY_VIDEO1 },
          ],
        },
        {
          _id: "4",
          name: "Painting",
          description:
            "Professional painting and touch-ups with premium quality paints.",
          duration: "2-3 days",
          category: "Painting",
          media: [
            {
              type: "image",
              url: "https://tse4.mm.bing.net/th/id/OIP.qO5mRSbWEjNjZgpS1D2rhwHaE8?pid=Api&P=0&h=180",
            },
            { type: "video", url: CLOUDINARY_VIDEO0 },
          ],
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBookClick = () => {
    setBookingMode(true);
    setStatus("");
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      address: "",
      carModel: "",
      message: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedService) return;

    setSubmitting(true);
    setStatus("");

    try {
      await axios.post("http://surakshabackend-production-7967.up.railway.app/api/appointments", {
        ...formData,
        service: selectedService.name,
      });

      setStatus("✅ Appointment booked successfully!");
      setBookingMode(false);
      setSelectedService(null);
    } catch (err) {
      console.error("Booking failed:", err);
      setStatus("❌ Failed to book appointment. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="services-page">
        <div className="container">
          <div className="loading">Loading services...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="services-page">
      <div className="container">
        <div className="page-header" >
          <h1>Our Premium Services</h1>
          <p>
            Professional automotive care services delivered to your doorstep
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service) => (
            <div key={service._id} className="service-card">
              <div
                className="service-header"
                onClick={() => {
                  setSelectedService(service);
                  setBookingMode(false);
                }}
              >
                <h3>{service.name}</h3>
              </div>
              <div
                className="service-body"
                onClick={() => {
                  setSelectedService(service);
                  setBookingMode(false);
                }}
              >
                <p>{service.description}</p>
                <div className="service-details">
                  <span className="duration">⏱️ {service.duration}</span>
                  <span className="category">📂 {service.category}</span>
                </div>
              </div>

              {/* ✅ Button inside card */}
              <div className="service-footer">
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    setSelectedService(service);
                    setBookingMode(false);
                  }}
                >
                  📅 Click here for appointment
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedService && (
          <div className="booking-modal">
            <div className="modal-content">
              {!bookingMode ? (
                <>
                  <h2>{selectedService.name}</h2>
                  <p>{selectedService.description}</p>
                  <div className="media-gallery">
                    {selectedService.media?.map((item, i) =>
                      item.type === "image" ? (
                        <img key={i} src={item.url} alt="service" />
                      ) : (
                        <video key={i} controls>
                          <source src={item.url} type="video/mp4" />
                          Your browser does not support video.
                        </video>
                      )
                    )}
                  </div>
                  <div className="modal-actions">
                    <button
                      className="btn btn-primary"
                      onClick={handleBookClick}
                    >
                      Book This Service
                    </button>
                    <button
                      className="btn btn-secondary"
                      onClick={() => setSelectedService(null)}
                    >
                      Close
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <h2>Book: {selectedService.name}</h2>
                  <form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="text"
                      name="carModel"
                      placeholder="Car Model"
                      value={formData.carModel}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="text"
                      name="address"
                      placeholder="Address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                    />
                    <textarea
                      name="message"
                      placeholder="Additional Message"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>

                    <div className="modal-actions">
                      <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={submitting}
                      >
                        {submitting ? "Booking..." : "Confirm Booking"}
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => setBookingMode(false)}
                      >
                        Back
                      </button>
                    </div>
                  </form>
                  {status && <p className="status">{status}</p>}
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
