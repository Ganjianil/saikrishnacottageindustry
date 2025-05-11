import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Enquiryform = () => {
  const { productTitle } = useParams(); // Get the product title from the URL
  const navigate = useNavigate(); // For navigation after form submission

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enquiry submitted:", { product: productTitle, ...formData });
    alert("Enquiry submitted successfully!");
    navigate("/products"); // Redirect to products page instead of root
  };

  return (
    <div
      style={{
        background: "linear-gradient(180deg, #f7fafc 0%, #edf2f7 100%)",
        minHeight: "100vh",
        padding: "3rem 1rem",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <div
              className="enquiry-form"
              style={{
                background: "#fff",
                borderRadius: "15px",
                padding: "2rem",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.08)",
              }}
            >
              <h2
                className="text-center mb-4"
                style={{ color: "#1a202c", fontWeight: 600 }}
              >
                Enquiry for {productTitle || "Product"}
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label
                    htmlFor="name"
                    className="form-label"
                    style={{ color: "#2d3748" }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    style={{
                      borderRadius: "10px",
                      padding: "0.75rem",
                      fontSize: "1rem",
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="email"
                    className="form-label"
                    style={{ color: "#2d3748" }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    style={{
                      borderRadius: "10px",
                      padding: "0.75rem",
                      fontSize: "1rem",
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="phone"
                    className="form-label"
                    style={{ color: "#2d3748" }}
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    required
                    style={{
                      borderRadius: "10px",
                      padding: "0.75rem",
                      fontSize: "1rem",
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="message"
                    className="form-label"
                    style={{ color: "#2d3748" }}
                  >
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your enquiry"
                    rows="4"
                    style={{
                      borderRadius: "10px",
                      padding: "0.75rem",
                      fontSize: "1rem",
                    }}
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <button
                    type="submit"
                    className="btn"
                    style={{
                      background: "#ff5a5f",
                      color: "white",
                      padding: "0.75rem 2rem",
                      borderRadius: "10px",
                      fontSize: "1rem",
                      border: "none",
                      transition: "background 0.3s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.background = "#e04f54")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.background = "#ff5a5f")
                    }
                  >
                    Submit Enquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enquiryform;
