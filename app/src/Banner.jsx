import React from "react";

const Banner = () => {
  return (
    <>
      <div className="product-banner-container">
        <div className="container d-flex flex-column flex-md-row align-items-center p-4">
          {/* Text Section */}
          <div className="text-section">
            <h2 className="title">
              Sustainable Paper Products for Every Occasion
            </h2>
            <p className="description">
              Sai Krishna Cottage Industry offers a wide range of eco-friendly
              paper products, including plates, bowls, and trays, designed for
              sustainability and convenience. Our biodegradable and recyclable
              products are perfect for events, catering, and daily use. Made
              from premium materials, they are sturdy, leak-proof, and
              environmentally conscious. We cater to bulk and wholesale orders,
              providing affordable solutions for restaurants, events, and
              households. Explore our sustainable paper products and join us in
              building a greener future!
            </p>
            <button className="book-now-btn">SHOP NOW</button>
          </div>

          {/* Image Section */}
          <div className="image-section">
            <img
              src="/assets/product-banner-image.jpg"
              alt="Paper Products"
              className="banner-image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
