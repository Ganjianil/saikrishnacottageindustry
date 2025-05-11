import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <div
      style={{
        fontFamily: "'Arial', sans-serif",
        backgroundColor: "#f5f7fa",
      }}
    >
      {/* Hero Section */}
      <section
        style={{
          backgroundColor: "#343a40",
          padding: "60px 0",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <div className="container">
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: 700,
              marginBottom: "1rem",
              animation: "fadeIn 1s ease-in-out",
            }}
          >
            About Sai Krishna Cottage Industry
          </h1>
          <p
            style={{
              fontSize: "1.5rem",
              fontWeight: 400,
              marginBottom: 0,
              animation: "slideIn 1s ease-in-out",
            }}
          >
            Crafting Excellence Since 2010
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: "50px 0" }}>
        <div className="container">
          <div className="row g-4">
            {/* Left Column: Our Story and Our Commitment */}
            <div className="col-12 col-lg-8">
              <div className="row g-4">
                {/* Our Story Card */}
                <div className="col-12 col-md-6">
                  <div
                    style={{
                      backgroundColor: "#fff",
                      borderRadius: "8px",
                      padding: "20px",
                      transition: "transform 0.3s ease",
                      height: "100%",
                      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                      animation: "slideIn 1s ease-in-out",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "translateY(-5px)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "translateY(0)")
                    }
                  >
                    <div>
                      <h3
                        style={{
                          fontSize: "1.5rem",
                          color: "#333",
                          fontWeight: 700,
                          marginBottom: "1rem",
                        }}
                      >
                        Our Story
                      </h3>
                      <p
                        style={{
                          fontSize: "1rem",
                          color: "#666",
                          lineHeight: 1.6,
                        }}
                      >
                        Established in 2010, Sai Krishna Cottage Industry in
                        Bhavanipuram, Vijayawada, has become a trusted name in
                        the industry. We are dedicated to meeting the needs of
                        our customers with exceptional products and services,
                        earning a reputation for reliability and quality.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Our Commitment Card */}
                <div className="col-12 col-md-6">
                  <div
                    style={{
                      backgroundColor: "#fff",
                      borderRadius: "8px",
                      padding: "20px",
                      transition: "transform 0.3s ease",
                      height: "100%",
                      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                      animation: "slideIn 1s ease-in-out",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "translateY(-5px)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "translateY(0)")
                    }
                  >
                    <div>
                      <h3
                        style={{
                          fontSize: "1.5rem",
                          color: "#333",
                          fontWeight: 700,
                          marginBottom: "1rem",
                        }}
                      >
                        Our Commitment
                      </h3>
                      <p
                        style={{
                          fontSize: "1rem",
                          color: "#666",
                          lineHeight: 1.6,
                        }}
                      >
                        Our business is built on a commitment to customer
                        satisfaction. With credentials Online Payu, we ensure a
                        seamless and trustworthy experience. We accept payments
                        via Cash and Cheques, making transactions convenient and
                        effective.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Visit Us */}
            <div className="col-12 col-lg-4">
              <div
                style={{
                  backgroundColor: "#343a40",
                  borderRadius: "8px",
                  padding: "20px",
                  color: "#fff",
                  animation: "fadeIn 1s ease-in-out",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: "#fff",
                    marginBottom: "1rem",
                  }}
                >
                  Visit Us
                </h3>
                <p
                  style={{
                    fontSize: "1rem",
                    lineHeight: 1.6,
                    color: "#ddd",
                    marginBottom: "0.5rem",
                  }}
                >
                  Sai Krishna Cottage Industry is conveniently located at:
                </p>
                <p
                  style={{
                    fontSize: "1rem",
                    lineHeight: 1.6,
                    color: "#fff",
                    fontWeight: 600,
                  }}
                >
                  Door No: 76-16-26A, 16 Floor Building, Left 2nd Lane, Urmila
                  Nagar, Bhavanipuram, Vijayawada - 520012
                </p>
                <p style={{ fontSize: "1rem", lineHeight: 1.6, color: "#ddd" }}>
                  Near the prominent landmark of 16 Floor Building, Left 2nd
                  Lane.
                </p>
                <a
                  href="https://www.google.com/maps/place/Bhavanipuram,+Vijayawada,+Andhra+Pradesh/@16.5276858,80.5875737,15z"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    border: "1px solid #fff",
                    color: "#fff",
                    padding: "10px 20px",
                    fontWeight: 500,
                    textDecoration: "none",
                    display: "inline-block",
                    marginTop: "1rem",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#fff";
                    e.currentTarget.style.color = "#343a40";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "#fff";
                  }}
                >
                  View on Map
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer
        style={{
          backgroundColor: "#343a40",
          color: "#fff",
          padding: "20px 0",
          textAlign: "center",
        }}
      >
        <div className="container">
          <p style={{ fontSize: "0.9rem", marginBottom: 0 }}>
            © 2025 Sai Krishna Cottage Industry. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default About;
