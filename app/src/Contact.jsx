import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  const address =
    "Door No:76-16-26A, 16 Floor Building, Left 2nd Lane, Urmila Nagar, Bhavanipuram-520012";
  const phone = "9291559555";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;
  const whatsappUrl = `https://wa.me/${phone}`;
  const mapRef = useRef(null);

  // State for enquiry form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enquiry submitted:", formData);
    alert("Enquiry submitted successfully!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  useEffect(() => {
    const loadGoogleMaps = () => {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_ACTUAL_API_KEY_HERE`; // Replace with your Google Maps API key
      script.async = true;
      script.defer = true;
      script.onload = () => {
        const map = new window.google.maps.Map(mapRef.current, {
          center: { lat: 16.5296, lng: 80.5966 }, // Approximate coordinates for Bhavanipuram, Vijayawada
          zoom: 15,
        });
        new window.google.maps.Marker({
          position: { lat: 16.5296, lng: 80.5966 },
          map,
          title: "Urmila Nagar",
        });
      };
      script.onerror = () => {
        console.error(
          "Failed to load Google Maps script. Check API key, billing, or network."
        );
      };
      document.head.appendChild(script);
    };

    loadGoogleMaps();
  }, []);

  return (
    <div className="min-vh-100 bg-light m-0 p-0">
      <div
        className="card shadow-lg d-flex flex-column flex-md-row w-100 m-0"
        style={{ borderRadius: 0 }}
      >
        {/* Enquiry Form Section */}
        <div className="flex-grow-1 p-4">
          <h3 className="text-center fw-bold mb-3">Enquiry Form</h3>
          <div className="p-3 rounded" style={{ backgroundColor: "#f8f9fa" }}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Your Phone Number"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="3"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="button"
              onClick={handleSubmit}
              className="btn btn-primary w-100"
            >
              Submit Enquiry
            </button>
          </div>
        </div>

        {/* Address and Map Section */}
        <div className="flex-grow-1 p-4">
          <h2 className="text-center fw-bold mb-3">Our Address</h2>
          <div className="d-flex align-items-start mb-4">
            <svg
              className="me-2 mt-1"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <p className="text-muted">{address}</p>
          </div>

          {/* Google Map */}
          <div
            ref={mapRef}
            className="w-100 rounded border mb-4"
            style={{ height: "300px" }}
          ></div>

          {/* Action Buttons */}
          <div className="d-flex flex-column flex-md-row justify-content-center gap-2">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary d-flex align-items-center justify-content-center"
            >
              <svg
                className="me-2"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553-2.276A1 1 0 0021 13.618V6.382a1 1 0 00-1.553-.894L15 8m0 9V8m0 9l-6-3"
                />
              </svg>
              Get Directions
            </a>
            <a
              href={`tel:${phone}`}
              className="btn btn-success d-flex align-items-center justify-content-center"
            >
              <svg
                className="me-2"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call Us: {phone}
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-info d-flex align-items-center justify-content-center"
            >
              <svg
                className="me-2"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.074-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
